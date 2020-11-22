import React from "react";

const proofTab = ({ prof, handelMarked, handelGoBack }) => {
  return (
    <table class="table table-hover">
      <thead>
        <tr className="text-left">
          <th>
            <div className="btn btn-secondary" onClick={handelGoBack}>
              Back
            </div>
          </th>
          <th>Proposition</th>
          <th style={{ width: "10%" }}>Rationale</th>
        </tr>
      </thead>
      <tbody>
        {prof?.map(({ proposition, rationale, indentation, isMark }, index) => (
          <tr
            key={index}
            className={"text-left" + " table-active".repeat(isMark)}
            style={{ cursor: "pointer" }}
            onClick={handelMarked(index)}
          >
            <th>{index + 1 + "."}</th>
            <td style={{ textIndent: 2 * indentation + "em" }}>
              {proposition}
            </td>
            <td>{rationale}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default proofTab;
