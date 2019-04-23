import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";
import { useNewsArticles } from "./api";

function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

function App() {
  const { loading, headlines, error } = useNewsArticles();
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  return (
    <div className="App">
      {headlines.map(headline => (
        <Headline title={headline.title} key={headline.url} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
