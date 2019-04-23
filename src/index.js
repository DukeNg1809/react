import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello CAB230</h1>
      <h2>Welcome to React!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
