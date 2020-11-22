import React, { useContext } from "react";
import editContext from "./editContext";

const SubmitExercise = ({ handleEdit }) => {
  const { lessons } = useContext(editContext);
  console.log("$$$$$$$$", handleEdit);
  return (
    <div className="container">
      <button onClick={() => handleEdit(lessons)}>submit</button>
    </div>
  );
};

export default SubmitExercise;
