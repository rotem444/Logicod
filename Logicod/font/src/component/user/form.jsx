import React, { Component } from "react";
import _ from "lodash";
import { validatField } from "../../validation/userValidation";

const Input = ({
  name,
  value,
  error,
  type = "text",
  disabled = false,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{_.startCase(name)}</label>
      <input
        {...{ name, value, type, disabled, onChange }}
        id={name}
        className="form-control"
      />
      <div className="text-danger" style={{ height: "10px" }}>
        {disabled || error}
      </div>
    </div>
  );
};

const Chackbox = ({ status, handleClick }) => (
  <>
    <input
      type="radio"
      name="status"
      id={"teacher"}
      value={"teacher"}
      checked={status === "teacher"}
      onClick={handleClick("teacher")}
    />
    <label htmlFor={status}>&nbsp; Teacher</label>
    <br />

    <input
      type="radio"
      name="status"
      id={"student"}
      value={"teacher"}
      checked={status === "student"}
      onClick={handleClick("student")}
    />
    <label htmlFor={status}>&nbsp; Student</label>
    <br />
  </>
);

class Form extends Component {
  handleChange = (name) => (e) => {
    let { value } = e.currentTarget;
    this.setState((previousState) => {
      let { fields, errors } = _.cloneDeep(previousState);
      fields[name] = value;
      errors[name] = validatField(name, value);
      return { fields, errors };
    });
  };

  handleClick = (status) => () => {
    this.setState(({ fields, errors }) => {
      fields = { ...fields, status };
      return { fields, errors };
    });
  };

  renderInput(name, type = "text", disabled = false) {
    let value = this.state.fields[name];
    let error = this.state.errors[name];
    let onChange = this.handleChange(name);
    return <Input {...{ name, value, error, type, disabled, onChange }} />;
  }
  renderChackbox() {
    let { status } = this.state.fields;
    return <Chackbox {...{ status, handleClick: this.handleClick }} />;
  }
  renderButton() {
    return <button className="btn btn-primary">submit</button>;
  }
}

export default Form;
