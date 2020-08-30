import React from "react";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
