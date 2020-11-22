import React from "react";

const InferButtons = ({ rules, onClick }) => {
  function InferButton(rule) {
    return (
      <div className="col btn btn-secondary m-2" onClick={onClick(rule)}>
        {rule}
      </div>
    );
  }
  return (
    <div>
      {["∧", "∨", "⇒", "⇔", "¬"].map((conector) => (
        <div key={conector} className="row">
          {InferButton("I" + conector)}
          {InferButton("E" + conector)}
        </div>
      ))}
      <div className="row">
        {InferButton("Hyp")}
        {InferButton("Rep")}
      </div>
    </div>
  );
};

export default InferButtons;
