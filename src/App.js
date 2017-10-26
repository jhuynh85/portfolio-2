import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

// Import components
import Footer from "./components/Footer";
import Main from "./pages/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Site">
          <div className="Site-content">
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
