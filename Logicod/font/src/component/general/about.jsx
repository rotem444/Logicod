import React from "react";

const about = () => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <h1 className="col-6">
        <cite>"Logic is the anatomy of thought"</cite>
        <div
          className="col-6 mt-1"
          style={{
            fontSize: "20px",
          }}
        >
          <i>- John Locke</i>
        </div>
      </h1>
      <div>
        <pre className="text-left">
          {`
Welcome to Logicon! This site is a tutorial for learning "Natural Deduction" of "Propositional Logic". 
for explaine about "Natural Deduction" you can use our guides in the "Help" tab.`}
        </pre>
      </div>
    </div>
  </div>
);

export default about;
