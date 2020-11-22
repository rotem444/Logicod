import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import EditContext from "./editContext";

function changePage(page) {
  return {
    type: "CHANGE_PAGE",
    payload: page,
  };
}
const Sidenav = () => {
  const { dispatch, lessons, current } = useContext(EditContext);
  return (
    <aside className="w-25">
      <ul>
        <li
          className="nav-item nav-link btn btn-outline-primary m-2"
          onClick={() => dispatch(changePage("index"))}
        >
          Index
        </li>{" "}
        <li
          className="nav-item nav-link btn btn-outline-primary m-2"
          onClick={() => dispatch(changePage("creation"))}
        >
          Creation
        </li>{" "}
        <li
          className="nav-item nav-link btn btn-outline-primary m-2"
          onClick={() => dispatch(changePage("submit"))}
        >
          Submit
        </li>{" "}
      </ul>
    </aside>
  );
};

export default Sidenav;
