import React, { useState, useEffect } from "react";
import "./style.css";
import Doclist from "./Doclist";
import Addform from "./Adddoc";
import Edit from "./Editform";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/add">Addform</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/list" component={Doclist} />
            <Route exact path="/add" component={Addform} />
            <Route exact path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
