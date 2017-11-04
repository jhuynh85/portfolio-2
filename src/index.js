import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Ubuntu Mono", "monospace"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
