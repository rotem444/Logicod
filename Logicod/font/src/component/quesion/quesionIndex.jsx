import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toArgFormat } from "../../utils/logicFunction";

class QuesionIndex extends Component {
  state = {
    arg: "",
  };
  handelHover = (arg) => () =>
    this.setState((ps) => ({
      ...ps,
      arg,
    }));
  handelHoverOut = () =>
    this.setState((ps) => ({
      ...ps,
      arg: "",
    }));
  render() {
    const { lessons, completed } = this.props;
    console.log("less", this.props);
    return (
      <div id="accordion" className="w-75 container mt-3">
        {lessons.map((lesson, lessonIndex) => (
          <div className="card">
            <div className="card-header" id={"heading" + ++lessonIndex}>
              <h1 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target={"#collapse" + lessonIndex}
                  aria-expanded="true"
                  aria-controls={"collapse" + lessonIndex}
                >
                  lesson {lessonIndex}
                </button>
              </h1>
            </div>
            <div
              id={"collapse" + lessonIndex}
              className="collapse show"
              aria-labelledby={"heading" + lessonIndex}
              data-parent="#accordion"
            >
              <div className="card-body">
                {lesson.map(({ id, ...rest }, exerciseIndex) => (
                  <Link
                    to={({ pathname }) =>
                      `${pathname}?exercise=${
                        exerciseIndex + 1
                      }&lesson=${lessonIndex}`
                    }
                  >
                    <div
                      onMouseEnter={this.handelHover(toArgFormat(rest))}
                      onMouseLeave={this.handelHoverOut}
                      className={`btn btn-${
                        completed?.includes(id) ? "success" : "secondary"
                      } m-1`}
                    >
                      {" "}
                      {exerciseIndex + 1}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <h2 className="text-center">{this.state.arg}</h2>
      </div>
    );
  }
}

export default QuesionIndex;
