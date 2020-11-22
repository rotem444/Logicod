const route = require("express").Router();
const _ = require("lodash");
const edit = require("../middleware/edit");
const { User } = require("../models/user");
const validCompleted = require("../validations/exerises");

route.post("/edit", edit);

route.post("/completed", async (req, res) => {
  try {
    validCompleted(req);
    let {
      body: { teacherEmail, prof, id },
      user: { email },
    } = req;

    let exerises = await User.findOne(
      { email: teacherEmail },
      "exerises"
    ).exec();

    if (!exerises) {
      throw new Error("teacher not found");
    }

    exerises = exerises.exerises;
    let exerise = exerises.reduce(_.concat).find((exe) => exe.id == id);

    if (!exerise) {
      throw new Error("exerise white this id not exits");
    }

    let fildName =
      teacherEmail === "rotems123@gmail.com"
        ? "examplesComplete"
        : "HomeworkComplete";
    let fild = await User.findOne({ email }, fildName);
    console.log(fild);
    fild = fild[fildName];
    fild.push(id);
    await User.updateOne({ email }, { [fildName]: fild });
  } catch (err) {
    console.assert(true, `filde whit err ${err}`);
  }
});

module.exports = route;
