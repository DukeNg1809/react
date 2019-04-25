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

function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <div className="SearchBar">
      <input
        type="search"
        id="search"
        name="search"
        aria-labelledby="search-button"
        value={innerSearch}
        onChange={event => {
          setInnerSearch(event.target.value);
        }}
      />
      <button
        type="button"
        id="search-button"
        onClick={() => {
          props.onSubmit(innerSearch);
        }}
      >
        Search
      </button>
      <button
        type="reset"
        id="clear"
        onClick={() => {
          setInnerSearch("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const { loading, headlines, error } = useNewsArticles(search);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }
  // if(headlines===[]){
  //   return <p>Empty</p>
  // }
  return (
    <div className="App">
      {search != "" ? <h1>{search}</h1> : <h1>TopHeadlines</h1>}
      <SearchBar onSubmit={setSearch} />
      {headlines.length === 0 ? (
        <p>Empty!!!</p>
      ) : (
        headlines.map(headline => (
          <Headline title={headline.title} key={headline.url} />
        ))
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
