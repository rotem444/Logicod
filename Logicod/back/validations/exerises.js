const Joi = require("@hapi/joi");
const { isWWF } = require("../utils/logicFunc");

const obj = Joi.object({
  id: Joi.string().required().label("id"),
  teacherEmail: Joi.string().required().label("Teacher Email"),
  prof: Joi.array()
    .items(
      Joi.object({
        proposition: Joi.string().custom(method).required(),
        rationale: Joi.string()
          .pattern(/(([EI][∧∨⇒⇔¬]|Rep)\(\d(,\d){0,2}\)|Hyp|Prem)/)
          .required(),
        indentation: Joi.number().required(),
      })
    )
    .required()
    .label("Prof"),
});

function method(formula) {
  if (isWWF(formula)) return formula;
  throw new Error("is not a formula");
}

function validCompleted({ body }) {
  let { error } = obj.validate(body);
  if (error) throw error2[0].message;
}

module.exports = validCompleted;
