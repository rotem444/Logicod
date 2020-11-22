import React from "react";
import ExerisesIndex from "./quesionIndex";
import Exerise from "./exercise";
import _ from "lodash";
import { parse } from "query-string";
import { Redirect } from "react-router-dom";

const RenderExerise = (lessons, handelCompleted, completed) => ({
  history: {
    location: { pathname, search },
  },
}) => {
  let { lesson, exercise } = parse(search),
    id;
  if (!lessons) return <Redirect to="/" />;
  let title = _.upperFirst(pathname.slice(1));
  let qustion = lessons[lesson - 1] && lessons[lesson - 1][exercise - 1];
  if (!qustion) return <ExerisesIndex {...{ lessons, title, completed }} />;
  ({ id, ...qustion } = qustion);
  return (
    <Exerise
      {...{
        ...qustion,
        title,
        lesson,
        exercise,
        handelCompleted: handelCompleted(id),
      }}
    />
  );
};

export default RenderExerise;
