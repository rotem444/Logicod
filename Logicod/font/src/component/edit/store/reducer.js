import * as cases from "./cases";

export function reducer(state, action) {
  let { payload } = action;
  console.log(action.type);
  console.table(state);
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        page: payload,
      };
    case "SELECT_ARGUMENT":
      return cases.selectArgument(action, state);
    case "SELECT_PREMISE":
      return {
        ...state,
        marked: payload === state.marked ? null : payload,
      };
    case "DRAG_PREMISE":
      return {
        ...state,
        marked: payload,
      };
    case "SWITCH_PREMISES":
      return cases.switchPremises(action, state);
    case "INSERT_PROPOSITION":
      return cases.insertProposition(action, state);
    case "DELETE_PROPOSITION":
      return cases.deleteProposition(action, state);
    case "PHYSICAL_KEYBOARD_CLICK":
      return cases.physicalKeyboardClick(action, state);
    case "VIRTUAL_KEYBOARD_CLICK":
      return {
        ...state,
        formula: state.formula + payload,
      };
    case "CLEAR_FORMULA":
      return {
        ...state,
        formula: "",
      };
    case "INSERT_ARGUMENT":
      return cases.insertArgument(state);
    case "SELECT_RULE":
      return cases.selectRule(action, state);
    default:
      throw new Error(`action type ${action.type} invalide`);
  }
}

export function init(lessons) {
  lessons = lessons.map((lesson) =>
    lesson.map((exercise) => ({ ...exercise, color: "secondary" }))
  );
  return {
    page: "index",
    lessons,
    current: [],
    formula: "",
    premises: [],
    conclusion: "",
    rules: [],
    replaced: [],
    swiched: [],
    deleted: [],
  };
}
