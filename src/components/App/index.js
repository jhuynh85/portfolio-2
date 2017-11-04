import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

// Import components
import Footer from "../Footer";
import Header from "../Header";
import Main from "../../pages/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Site">
          <div className="Site-content">
            <Header />
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
