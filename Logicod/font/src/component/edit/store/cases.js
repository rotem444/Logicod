import _ from "lodash";
import { toast } from "react-toastify";
import { isWWF, toLogicSign } from "../../../utils/logicFunction";

export function switchPremises(
  { payload },
  { premises: prev, marked, ...state }
) {
  let premises = [...prev];
  premises[payload] = premises[marked];
  premises[marked] = premises[payload];
  return { ...state, premises, marked: null };
}

export function insertProposition({ payload: index }, state) {
  let { premises, formula } = state;
  if (!isWWF(formula)) {
    toast.error("formula is not Well-formed");
    return state;
  }
  state = { ...state, formula: "" };
  if (index === "⊢") {
    return { ...state, conclusion: formula };
  }
  if (index === undefined) {
    premises = premises.concat(formula);
    return { ...state, premises };
  }
  premises = [...premises];
  premises[index] = formula;
  return { ...state, premises, marked: null };
}
export function deleteProposition({ payload: index }, state) {
  let { premises, marked } = state;
  if (index === "⊢") return { ...state, conclusion: "" };
  premises = [...premises];
  premises.splice(index, 1);
  if (marked > index) marked--;
  if (marked === index) marked = null;
  return { ...state, premises, marked };
}
export function selectArgument({ payload }, { current, ...state }) {
  if (_.isEqual(current, payload)) {
    return { ...state, current: [] };
  }
  return { ...state, current: payload, page: "creation" };
}
export function insertArgument(state) {
  let { lessons, current } = state;
  console.log(lessons, "CURRENT", current);
  let [lesson, exercise] = current;
  if (lesson === undefined) {
    toast("you need to chose where to puth you'r new exerise");
    return state;
  }
  let newExercise = {
    ..._.pick(state, ["premises", "conclusen", "rules"]),
    color: "success",
  };
  lessons = [...lessons];
  if (lessons.length === lesson) {
    lessons.push([newExercise]);
  } else if (exercise === undefined) {
    lessons[lesson] = [...lessons[lesson], newExercise];
  } else {
    lessons[lesson] = [...lessons[lesson]];
    lessons[lesson][exercise] = newExercise;
  }
  return {
    ...state,
    current: [],
    lessons,
    page: "submit",
    premises: [],
    conclusen: "",
    rules: [],
  };
}

export function physicalKeyboardClick({ payload: value }, state) {
  return { ...state, formula: toLogicSign(value) };
}

export function selectRule({ payload: rule }, { rules, ...state }) {
  rules = rules.includes(rule)
    ? rules.filter((item) => item !== rule)
    : rules.concat(rule);
  return { ...state, rules };
}
