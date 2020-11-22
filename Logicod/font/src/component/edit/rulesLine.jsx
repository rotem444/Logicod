import React, { useContext } from "react";
import { logicalConnectors } from "../../utils/logicFunction";
import { selectRule } from "./store/actionCreators";
import editContext from "./editContext";

const RulesLine = () => {
  return (
    <div className="row justify-content-center">
      {logicalConnectors.map((connector) => {
        return (
          <React.Fragment key={connector}>
            <RulesButton rule={"I" + connector} />
            <RulesButton rule={"E" + connector} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

const RulesButton = ({ rule }) => {
  const { dispatch, rules } = useContext(editContext);

  return (
    <div
      className={`btn btn-${
        rules.includes(rule) ? "primary" : "secondary"
      } m-1 col`}
      style={{ borderRadius: "15px" }}
      onClick={() => dispatch(selectRule(rule))}
    >
      {rule}
    </div>
  );
};

export default RulesLine;
