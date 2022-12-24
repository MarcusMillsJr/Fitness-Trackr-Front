import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <>
          <nav>
              <p>Home</p>
              <p>Plan</p>
              <p>Login</p>
          </nav>
           <h1>Hello World</h1>
          </>;
};

ReactDOM.render(<App />, document.getElementById("app"));
