const route = require("express").Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");
const joi = require("@hapi/joi");
const defaultExamples = require("../utils/defaultExamples");
const { User } = require("../models/user");

const obj = {
  name: joi.string().min(2).max(255).required().label("Name"),
  email: joi.string().min(6).max(255).required().email().label("Email"),
  password: joi.string().min(6).max(1024).required().label("Password"),
  status: joi.string().label("status"),
  teacherEmail: joi.string().min(6).max(255).email().label("Teacher Email"),
};
async function encodPassword(params) {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(user.password, salt);
}

function signInValidation(fields) {
  let { error } = joi
    .object(_.pick(obj, ["email", "password"]))
    .validate(fields, { abortEarly: false });
  if (error) throw error2[0].message;
}
function signUpValidation(fields) {
  let obj2 = { ...obj };
  if (fields.status === "student" && !fields.teacherEmail) {
    throw "student req teacher email";
  }
  let { error } = joi.object(obj2).validate(fields, { abortEarly: false });
  if (!error) return;
  throw error.details[0].message;
}
async function getExamples() {
  return (
    (await User.findOne({ status: "admin" }, "lessons")) || defaultExamples
  );
}
async function encodPassword(password) {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
}

async function authentication(fields) {
  signInValidation(fields);
  let user = await User.findOne(
    {
      email: fields.email,
    },
    "-_id -__v"
  );

  if (!user) throw "user not exist";
  let {
    email,
    password,
    status,
    name,
    teacherEmail,
    examplesComplete,
    HomeworkComplete,
    exerises,
  } = user;
  if (!(await bcrypt.compare(fields.password, password))) {
    throw "Invalid email or password";
  }
  return {
    name,
    status,
    examplesComplete,
    token: user.generateAuthToken(),
    massage: `hellow ${name}`,
    ...(user.status === "student" && {
      teacherEmail,
      HomeworkComplete,
      homework: await User.findOne({ email: teacherEmail }, "exerises").exec(),
    }),
    ...(user.status === "teacher" && {
      exerises,
      students: await User.find({ teacherEmail: email }, "email").exec(),
    }),
  };
}

route.post("/entry", async (req, res) => {
  try {
    res.json({
      examples: await getExamples(),
      ...(await authentication(req.body).catch(() => {})),
    });
  } catch ({ error }) {
    console.log(err, 9999);
    res.status(404).json({ error });
  }
});

route.post("/signin", async (req, res) => {
  try {
    let aut = await authentication(req.body);
    res.json({ ...aut });
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json(err.message);
    }
    res.status(404).json(err);
  }
});

route.post("/signup", async (req, res) => {
  try {
    let user = req.body;
    signUpValidation(user);
    console.log(555);
    let { name, email, password, status, teacherEmail = false } = user;
    user.password = await encodPassword(password);
    if (await User.findOne({ email }).exec()) {
      throw "user whit the same email allredy exist";
    }
    if (status === "teacher") {
      user.exerises = defaultExamples;
    } else if (!(await User.findOne({ email: teacherEmail }).exec())) {
      throw "teacher whit the same email not exist";
    } else {
      _.assign(user, { HomeworkComplete: [], examplesComplete: [] });
    }
    await new User(user).save();
    res.json({ message: `use ${name} save sucsesfuly` });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json(error.message);
    }

    res.status(404).json(error);
  }
});

module.exports = route;
