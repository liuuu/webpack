import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    const { first, ...a } = name;
    console.log("last", a);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={() => {
              return (
                <div>
                  <Header />
                  route niubi
                  <Footer />
                </div>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
