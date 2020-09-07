import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const Hats = () => {
  return <h1>This is the hats component</h1>;
};
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop/hats" component={Hats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
