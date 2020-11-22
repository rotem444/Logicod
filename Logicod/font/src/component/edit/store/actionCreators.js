import * as action from "./action";

export const changePage = (page) => ({
  type: action.CHANGE_PAGE,
  info: "routing between edit pages",
  payload: page,
});
export const selectArgument = (lessonIndex, exerciseIndex) => ({
  type: action.SELECT_ARGUMENT,
  info: "operate the selected method on the choosen exercise",
  payload: [lessonIndex, exerciseIndex],
});
export const selectPremise = (index) => ({
  type: action.SELECT_PREMISE,
  info: "marked premise so you can insert or switch him",
  payload: index,
});
export const dragPremise = (index) => ({
  type: action.DRAG_PREMISE,
  info: "triger when user start drag the premise",
  payload: index,
});
export const switchPremises = (index) => ({
  type: action.SWITCH_PREMISES,
  info: "triger by click on switch button or by droping another premise",
  payload: index,
});
export const insertProposition = (index) => ({
  type: action.INSERT_PROPOSITION,
  info: "triger by the 'send' buttons in the virtual keyboard or the arglist",
  payload: index,
});
export const deleteProposition = (index) => ({
  type: action.DELETE_PROPOSITION,
  info: "triger by the drop button in the arglist",
  payload: index,
});
export const virtualKeyboardClick = (char) => ({
  type: action.VIRTUAL_KEYBOARD_CLICK,
  info: "triger by click on the virtual keyboard",
  payload: char,
});
export const physicalKeyboardClick = (value) => ({
  type: action.PHYSICAL_KEYBOARD_CLICK,
  info: "triger when the value of the keyboard's input changed",
  payload: value,
});
export const clearFormula = () => ({
  type: action.CLEAR_FORMULA,
  info: "triger by the 'click button in the keyboard",
});
export const insertArgument = () => ({
  type: action.INSERT_ARGUMENT,
  info: "triger by the argument button",
});
export const selectRule = (rule) => ({
  type: "SELECT_RULE",
  payload: rule,
});
