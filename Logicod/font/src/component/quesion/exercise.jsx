import React, { Component } from "react";
import { toast } from "react-toastify";
import ProfTab from "./proofTab";
import _ from "lodash";
import { sortProp2, toArgFormat } from "../../utils/logicFunction";
import InterButtons from "./inferButtons";
import PropTypes from "prop-types";
import legalCheck from "../../inferencerRules/legalCheck";
import conclusions from "../../inferencerRules/conclusions";

import {
  EliminateConjunction,
  IntroductionDisjunction,
  EliminateEquivalence,
  Hypothesis,
} from "../../inferencerRules/dialogbox";

class Exercise extends Component {
  state = {
    prof: [],
    openDialog: null,
    finish: false,
  };
  componentDidMount() {
    this.qed = toArgFormat(this.props);
    this.setState({
      prof: this.props.premises?.map((premise) => ({
        proposition: premise,
        rationale: "Prem",
        indentation: 0,
        isMark: false,
      })),
      openDialog: null,
    });
  }
  finish = false;
  async componentDidUpdate() {
    let {
      state: {
        prof,
        prof: {
          [prof.length - 1]: { indentation, proposition },
        },
        finish,
      },
      props: { conclusion, handelCompleted },
    } = this;
    conclusion = sortProp2(conclusion);
    proposition = sortProp2(proposition);

    if (finish || indentation || conclusion !== proposition) return;
    this.setState((ps) => ({
      ...ps,
      finish: true,
    }));
    toast.success("bravo!!!!!!");
    await handelCompleted(prof);
  }
  lineDesign = ({
    indentation = _.last(this.state.prof).indentation,
    ...rest
  }) => ({
    ...rest,
    indentation,
    isMark: false,
  });

  handelMarked = (index) => () => {
    this.setState(({ prof, ...rest }) => {
      prof = [...prof];
      let line = { ...prof[index] };
      line.isMark = !line.isMark;
      prof[index] = line;
      return { ...rest, prof, openDialog: null };
    });
  };
  handelGoBack = () => {
    let {
      prof,
      prof: {
        [prof.length - 1]: { rationale },
      },
    } = this.state;
    if (rationale === "Prem") {
      return toast.error("you can't go back anymore");
    }

    this.setState((ps) => ({ ...ps, prof: prof.slice(0, -1) }));
  };
  handelInference = (rule) => () => {
    let err = legalCheck[rule](this.state.prof);
    if (err) return toast.error(err);
    this.setState(({ prof, ...rest }) => ({
      ...rest,
      ...(rule === "E∧" || rule === "I∨" || rule === "Hyp" || rule === "E⇔"
        ? { openDialog: rule }
        : {
            prof: prof
              .map((prop) => ({ ...prop, isMark: false }))
              .concat(this.lineDesign(conclusions[rule](prof))),
            openDialog: null,
          }),
    }));
  };
  handelDialogBox = (proposition) =>
    this.setState(({ prof, ...rest }) => ({
      ...rest,
      prof: prof.concat(this.lineDesign(proposition)),
      openDialog: null,
    }));
  handelCloseDialogBox = () =>
    this.setState((ps) => ({
      ...ps,
      openDialog: null,
    }));
  render() {
    let { prof, openDialog, finish } = this.state;
    let { premises, conclusion, rules, lesson, exercise, title } = this.props;
    return (
      <div className="container w-100 text-center">
        <hgroup>
          {" "}
          <h2 className="center">{title}</h2>
          <h5>{`exercise ${exercise} in lesson ${lesson}`}</h5>
          <h3>{finish && <span className="text-success">finish!</span>}</h3>
          <h1>{this.qed}</h1>
        </hgroup>
        {openDialog === "E∧" && (
          <EliminateConjunction
            prof={prof}
            onClick={this.handelDialogBox}
            close={this.handelCloseDialogBox}
          />
        )}
        {openDialog === "I∨" && (
          <IntroductionDisjunction
            prof={prof}
            onClick={this.handelDialogBox}
            close={this.handelCloseDialogBox}
          />
        )}
        {openDialog === "Hyp" && (
          <Hypothesis
            prof={prof}
            onClick={this.handelDialogBox}
            close={this.handelCloseDialogBox}
          />
        )}
        {openDialog === "E⇔" && (
          <EliminateEquivalence
            prof={prof}
            onClick={this.handelDialogBox}
            close={this.handelCloseDialogBox}
          />
        )}

        <div className="float-right ml-3" style={{ marginTop: "100px" }}>
          <InterButtons onClick={this.handelInference} />
        </div>
        <div className="float-right w-75 text-center">
          <ProfTab
            prof={prof}
            conclusion={conclusion}
            handelMarked={this.handelMarked}
            handelGoBack={this.handelGoBack}
          />
        </div>
      </div>
    );
  }
}
Exercise.propTypes = {
  premises: PropTypes.arrayOf(PropTypes.string),
  conclusion: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.string),
  lesson: PropTypes.number,
  question: PropTypes.number,
};

export default Exercise;
