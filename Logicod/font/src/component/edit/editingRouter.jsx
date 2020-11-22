import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";
import { init, reducer } from "./store/reducer";
import Sidenav from "./sidenav";
import ExerciseIndex from "./exerciseIndex";
import CreatExercise from "./creatExercise";
import SubmitExercise from "./submitExercise";
import EditContext from "./editContext";
import defaultLessons from "./defaultLessons";

const Edit = ({ lessons, handleEdit }) => {
  const [state, dispatch] = useReducer(reducer, lessons, init);

  return (
    <div className="container-fluid d-flex flex-row bd-highlight mb-3">
      {" "}
      <EditContext.Provider value={{ ...state, dispatch }}>
        <Sidenav />
        <div className="w-75">
          {state.page === "index" && <ExerciseIndex />}
          {state.page === "creation" && <CreatExercise />}
          {state.page === "submit" && (
            <SubmitExercise handleEdit={handleEdit} />
          )}
        </div>
      </EditContext.Provider>
    </div>
  );
};

const RenderEdit = (status, lessons = defaultLessons, handleEdit) => () => {
  if (!(status === "teacher" || status === "admin")) {
    return <Redirect to="/" />;
  }
  return <Edit {...{ lessons, handleEdit }} />;
};
export default RenderEdit;
