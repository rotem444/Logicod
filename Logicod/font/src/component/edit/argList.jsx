import React, { useContext } from "react";
import _ from "lodash";
import EditContext from "./editContext";
import {
  selectPremise,
  dragPremise,
  switchPremises,
  insertProposition,
  deleteProposition,
} from "./store/actionCreators";
import "./argList.css";

const ArgListLine = ({ index }) => {
  let { dispatch, conclusion, premises, marked } = useContext(EditContext);
  console.log(marked);
  let isConclusion = index === "⊢";
  let proposition = isConclusion ? conclusion : premises[index];

  return (
    <div className="col">
      <div
        className={
          "argLine row w-100 m-1 btn btn-" +
          (index === marked ? "primary" : "secondary")
        }
        draggable={!isConclusion}
        onClick={() => dispatch(selectPremise(index))}
        onDragStart={() => dispatch(dragPremise(index))}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => console.log(index) || dispatch(switchPremises(index))}
      >
        <div className="col-1 float-left btn mr-1 text-right text-white">
          {isConclusion ? "⊢" : index + 1}
        </div>
        <div className="col-1 float-left btn mr-1 text-left text-white">
          {proposition}
        </div>

        <div
          className="col-1 float-right btn btn-secondary mr-1 argLineButton"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteProposition(index));
          }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-trash"
            fill="currentColor"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>

        <div
          className="col-1 float-right btn btn-secondary mr-1 argLineButton"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(insertProposition(index));
          }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-down"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
        </div>

        {marked !== null && marked !== index && !isConclusion && (
          <div
            className="col-1 float-right btn btn-secondary mr-1 argLineButton"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(switchPremises(index));
            }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-left-right"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

const ArgList = () => {
  const { premises, conclusion } = useContext(EditContext);
  console.log(premises, conclusion);
  return (
    <div className="container">
      {_.range(premises.length).map((index) => (
        <ArgListLine index={index} key={index} />
      ))}
      {conclusion && <ArgListLine index="⊢" />}
    </div>
  );
};

export default ArgList;
