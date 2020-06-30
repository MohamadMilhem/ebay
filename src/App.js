import logo from "./pictures/logo.png";
import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo"></img>
        <h4 className="search">Search</h4>
        <input className="searchBar"></input>
      </header>
    </div>
  );
}

export default App;
