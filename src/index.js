import React from "react";
import ReactDom from "react-dom";
import "./index.scss";

const App = () => {
  return (
    <div className="app-container">
      <h1>react-app</h1>hello world
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
