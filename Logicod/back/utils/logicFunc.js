const _ = require("lodash");
const Joi = require("@hapi/joi");
const LOGICAL_CONNECTIONS = ["∧", "∨", "⇒", "⇔", "¬"];

const logicalDictionary = {
  "∧": "&&",
  "∨": "||",
  "⇒": "<=",
  "⇔": "==",
  "¬": "!",
};

function isWWF(formula) {
  if (/^[A-Z]¬*([∧∨⇒⇔][A-Z]¬*)?$/.test(formula)) return true;
  if (!/\([A-Z][∧∨⇒⇔][A-Z]\)|[A-Z]¬+/.test(formula)) return false;
  return isWWF(formula.replace(/\([A-Z][∧∨⇒⇔][A-Z]\)|[A-Z]¬+/g, "P"));
}

function isProvable(premises, conclusion) {
  if (!premises.length) premises = ["P⇒P"];
  let toJSSign = `((${premises.join(")&&(")}))<=(${conclusion})`.replace(
    /[∧∨⇒⇔¬]/g,
    _.propertyOf(logicalDictionary)
  );

  let atomicPropositions = new Set(toJSSign.replace(/[^A-Z]/g, ""));
  let modelFunc = new Function(...atomicPropositions, "return " + toJSSign);
  let modelsNumber = atomicPropositions.size ** 2;
  return _.range(modelsNumber).every((modelNumber) => {
    let toBinary = Array.from(modelNumber.toString(2), _.toInteger);
    return modelFunc(...toBinary);
  });
}

module.exports = {
  LOGICAL_CONNECTIONS,
  logicalDictionary,
  isWWF,
  isProvable,
};
