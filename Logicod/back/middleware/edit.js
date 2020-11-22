const { cache } = require("@hapi/joi");
const { isWWF, LOGICAL_CONNECTIONS } = require("../utils/logicFunc");
const { User } = require("../models/user");
const { ObjectId } = require("mongoose").Types;

module.exports = async (req, res) => {
  
  try {
    let {
      body: { lessons },
      user: { email },
    } = req;
    ValidationLessons(lessons);
    await User.update({ email }, { lessons }).exec();
    res.json({ lessons, massage: "you'r lessons save sucsesfuly" });
  } catch (err) {
    console.log(err);
    res.status(405).json(err);
  }
};

function ValidationLessons(lessons) {
  for (let lesson of lessons) {
    for (let exerises of lesson) {
      let { premises, conclusion, rules } = exerises;
      if (!premises.every(isWWF)) {
        throw new Error("some premises is not wwf");
      }
      if (!isWWF(conclusion)) {
        throw new Error("conclusion is not wwf");
      }
      let rulesValid = rules.every(
        (rule) =>
          "EI".includes(rule[0]) && LOGICAL_CONNECTIONS.includes(rule[1])
      );
      if (!rulesValid) {
        throw new Error("the rules is not in the rigth format");
      }
      if (!exerises.id) {
        exerises.id = ObjectId();
      }
    }
  }
}
