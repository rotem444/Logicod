import React from "react";
import Form from "./form";
import { Redirect } from "react-router-dom";
import { signUpRequest } from "../../service/userService";

class SignUp extends Form {
  state = {
    fields: {
      name: "",
      email: "",
      password: "",
      status: "student",
      teacherEmail: "",
    },
    errors: {
      name: "",
      email: "",
      password: "",
      teacherEmail: "",
    },
  };

  render() {
    
    return (
      <form
        className="container"
        method="POST"
        autoComplete="off"
        noValidate="novalidate"
        onSubmit={this.props.handlerSingIn(this.state)}
      >
        <h1>sign-up</h1>
        {this.renderInput("name")}
        {this.renderInput("email", "email")}
        {this.renderInput("password", "password")}
        {this.renderChackbox()}
        {this.renderInput(
          "teacherEmail",
          "text",
          "teacher" === this.state.fields.status
        )}
        {this.renderButton()}
      </form>
    );
  }
}

const RenderSignUp = (status) => ({ history }) => {
  console.log(status);
  if (status !== "guest") return <Redirect to="/" />;
  return <SignUp handlerSingIn={signUpRequest(history)} />;
};
export default RenderSignUp;
