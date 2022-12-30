import React from "react";
import ReactDOM from "react-dom";
import { Routines, CreateNewRoutine } from "./components";

const App = () => {
  return <>
          <nav>
              <p>Home</p>
              <p>Plan</p>
              <p>Login</p>
          </nav>
           <h1>Hello World</h1>
           <Routines />
           <CreateNewRoutine />
          </>;
};

ReactDOM.render(<App />, document.getElementById("app"));
