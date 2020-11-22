import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./component/general/navbar";
import RenderSignIn from "./component/user/signin";
import RenderSignUp from "./component/user/signup";
import About from "./component/general/about";
import { toast, ToastContainer } from "react-toastify";
import { submitValidation } from "./validation/userValidation";
import { signInRequest, entryRequest, logout } from "./service/userService";
import { editRequest } from "./service/exerciseService";
import { completedRequest } from "./service/exerciseService";
import RenderExercise from "./component/quesion/renderExercise";
import RenderEdit from "./component/edit/editingRouter";
import Help from "./component/general/Help";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};
  async componentDidMount() {
    this.setState(await entryRequest());
  }

  handlerSingIn = ({ fields, errors }) => async (e) => {
    e.preventDefault();
    if (submitValidation(errors)) return;
    try {
      let data = await signInRequest(fields);
      console.log("signin", data);
      this.setState((ps) => ({ ...ps, ...data }));
    } catch (err) {
      toast.error(err);
    }
  };
  handlerLogout = () => {
    logout();
    this.setState(({ examples }) => ({ status: "guest", examples }));
  };
  handlerEdit = async (lessons) => {
    try {
      lessons = await editRequest(lessons);
      this.setState((ps) => ({ ...ps, lessons }));
    } catch (err) {
      toast.error(err);
    }
  };
  handelCompleted = (teacherEmail = "rotems123@gmail.com") => (id) => async (
    prof
  ) => {
    let { status } = this.state;
    console.log(this.state);
    try {
      if (status === "guest") {
        throw new Error(
          "In order for the answer to be save you need to be connected"
        );
      }
      await completedRequest(prof, id, teacherEmail);
    } catch (err) {
      toast.error(err.message);
    }
  };
  render() {
    let {
      email,
      name,
      status,
      examples,
      homework,
      HomeworkComplete,
      examplesComplete,
      lessons,
      teacherEmail,
    } = this.state;
    console.log("status:", status);
    console.log(this.state);
    return (
      <React.Fragment>
        <ToastContainer />

        <Navbar
          {...{ email, name, status }}
          handlerLogout={this.handlerLogout}
        />
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/help" component={Help} />
              <Route
                path="/signin"
                render={RenderSignIn(status, this.handlerSingIn)}
              />
              <Route
                path="/edit"
                render={RenderEdit(status, lessons, this.handlerEdit)}
              />
              <Route path="/signup" render={RenderSignUp(status)} />
              <Route
                path="/homework"
                render={RenderExercise(
                  homework,
                  this.handelCompleted(teacherEmail),
                  HomeworkComplete
                )}
              />
              <Route
                path="/examples"
                render={RenderExercise(
                  examples,
                  this.handelCompleted(),
                  examplesComplete
                )}
              />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
