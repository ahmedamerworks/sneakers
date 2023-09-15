import React from "react";
import { Navbar } from "./components";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Brand from "./components/brand/Brand";
import Product from "./components/product/Product";
import signup from "./components/signup/signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact Component={Home} />
          <Route path="/brand" Component={Brand} />
          <Route path="/product" Component={Product} />
          <Route path="/signup" Component={signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
