import React from "react";
import Form from "./form";
import { Redirect } from "react-router-dom";

class SignIn extends Form {
  state = {
    fields: { email: "", password: "" },
    errors: { email: "", password: "" },
  };

  render() {
    return (
      <form
        className="container"
        method="POST"
        autoComplete="off"
        onSubmit={this.props.handlerSignIn(this.state)}
      >
        <h1>sign-in</h1>
        {this.renderInput("email", "email")}
        {this.renderInput("password", "password")}
        {this.renderButton()}
      </form>
    );
  }
}

const RenderSignIn = (status, handlerSignIn) => () => {
  if (status !== "guest") return <Redirect to="/" />;
  return <SignIn {...{ handlerSignIn }} />;
};

export default RenderSignIn;
