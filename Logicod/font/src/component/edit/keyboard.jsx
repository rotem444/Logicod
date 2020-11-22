import React, { useContext } from "react";
import {
  physicalKeyboardClick,
  virtualKeyboardClick,
  insertProposition,
  insertArgument,
  clearFormula,
  changePage,
} from "./store/actionCreators";
import EditContext from "./editContext";
import RulesLine from "./rulesLine";

const logicalConnectors = ["∧", "∨", "⇒", "⇔", "¬"];
const letters = ["P", "Q", "R", "S", "T"];

const Keyboard = () => {
  const { dispatch, formula, marked, conclusion, current } = useContext(
    EditContext
  );
  let isReplace = 1 in current;
  console.log("cur12: ", current);
  let title = createTitel(current);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="form-control mb-1 mt-2"
            value={formula}
            onChange={(e) =>
              dispatch(physicalKeyboardClick(e.currentTarget.value))
            }
          />
        </div>
      </div>
      <div className="row">
        <div
          onClick={() => dispatch(changePage("index"))}
          className="col-12 text-center"
        >
          <div className="btn btn-dark m-1 col">{title}</div>
        </div>
      </div>
      <RulesLine />
      <div className="row">
        {logicalConnectors.map((connector, index) => (
          <div
            onClick={() => dispatch(virtualKeyboardClick(connector))}
            key={connector}
            className="btn btn-secondary m-1 col"
          >
            <span className="float-left" style={{ fontSize: "0.6em" }}>
              {index + 1}
            </span>
            <span className="">{connector}</span>
          </div>
        ))}
      </div>
      <div className="row">
        {letters.concat("(", ")").map((letter) => (
          <div
            onClick={() => dispatch(virtualKeyboardClick(letter))}
            key={letter}
            className="btn btn-secondary m-1 col"
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        <div
          className="btn btn-secondary m-1 col-2"
          onClick={() => dispatch(insertProposition())}
        >
          {typeof marked === "number" ? "Replace" : "Add"} <br /> Premise
        </div>
        <div
          className="btn btn-secondary m-1 col-2"
          onClick={() => dispatch(insertProposition("⊢"))}
        >
          {conclusion ? "Replace" : "Add"} <br /> Conclusion
        </div>
        <div
          className="btn btn-secondary m-1 col-2"
          onClick={() => dispatch(insertArgument())}
        >
          {isReplace ? "Replace" : "Add"}
          <br /> Argument
        </div>
        <div
          className="btn btn-secondary m-1 col-2"
          onClick={() => dispatch(clearFormula())}
        >
          clear
        </div>
      </div>
    </>
  );
};

function createTitel(current) {
  let [lesson, exercise] = current;
  if (++lesson) {
    if (++exercise) {
      return `replace exercise ${exercise} in lesson ${lesson}`;
    }
    return `add new execise to lesson ${lesson}`;
  }
  return "click to choose ececise's position";
}

export default Keyboard;
