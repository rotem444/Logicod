const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const { array } = require("@hapi/joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
    enum: ["student", "teacher"],
  },
  teacherEmail: {
    type: String,
    minlength: 3,
    maxlength: 250,
  },
  examplesComplete: {
    type: Array,
  },
  HomeworkComplete: {
    type: Array,
  },
  exerises: {
    type: Array,
  },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    _.pick(this, ["email", "password", "status"]),
    process.env.JWT_TOKEN_KEY || "PrivateKey"
  );
};

function isValidUser(field) {
  return _.mapValues(field, _.isString);
}
const User = mongoose.model("user", userSchema);
module.exports = { User, isValidUser };

async function encodPassword(params) {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(user.password, salt);
}
