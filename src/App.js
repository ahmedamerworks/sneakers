import React from "react";
import { Navbar } from "./components";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact element={<Home />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
