import logo from "./pictures/logo.png";
import "./App.css";
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Header from "./header.jsx";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={8}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="logo" alt="logo"></img>
              <h4 className="search">Search</h4>
              <input className="searchBar"></input>
            </header>
          </div>
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
