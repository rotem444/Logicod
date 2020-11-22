import React, { useContext, useState } from "react";
import _ from "lodash";
import EditContext from "./editContext";
import { selectArgument } from "./store/actionCreators";
import { toArgFormat } from "../../utils/logicFunction";

const ExerciseIndex = () => {
  const { dispatch, lessons, current } = useContext(EditContext);
  const [hoverExercise, setHoverExercise] = useState("");
  const [switchedExercise, setSwitchedExercise] = useState("");
  const [actionType, setActionType] = useState("replace");
  function handelMouseEnter(e) {
    let { arg } = e.target.dataset;
    if (
      actionType === "swiched" &&
      !switchedExercise &&
      e.target.matches(".bg-warning")
    ) {
      return setSwitchedExercise(arg);
    }
    setHoverExercise(arg);
  }
  function handelMouseLeave() {
    setHoverExercise("");
  }

  return (
    <div className="container text-center">
      <h1>Exercise Index</h1>
      {lessons.map((lesson, lessonIndex) => (
        <div
          key={lessonIndex + 1}
          className="d-flex flex-row bd-highlight mb-3"
        >
          <div className="btn btn-outline-primary m-2">
            lesson {lessonIndex + 1}
          </div>
          {lesson.map((exercise, exerciseIndex) => {
            return (
              <div
                key={`${lessonIndex + 1}.${exerciseIndex + 1}`}
                className={
                  "btn btn-outline-primary m-2" +
                  " active".repeat(
                    _.isEqual([lessonIndex, exerciseIndex], current)
                  )
                }
                data-arg={toArgFormat(exercise)}
                onMouseEnter={handelMouseEnter}
                onMouseLeave={handelMouseLeave}
                onClick={() =>
                  dispatch(selectArgument(lessonIndex, exerciseIndex))
                }
              >
                {exerciseIndex + 1}
              </div>
            );
          })}

          <div
            className={
              "btn btn-outline-primary m-2" +
              " active".repeat(_.isEqual([lessonIndex], current))
            }
            onClick={() => dispatch(selectArgument(lessonIndex))}
          >
            +
          </div>
        </div>
      ))}
      <div className="d-flex flex-row bd-highlight mb-3">
        <div
          className={
            "btn btn-outline-primary m-2" +
            " active".repeat(_.isEqual([lessons.length], current))
          }
          onClick={() => dispatch(selectArgument(lessons.length))}
        >
          +
        </div>
      </div>
      <div>{hoverExercise}</div>
    </div>
  );
};

export default ExerciseIndex;
