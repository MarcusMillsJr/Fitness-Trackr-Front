import {React, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Routines, MyRoutines} from "./components";
import { fetchPublicRoutines } from "./api/api";


const App = () => {
  const [routines, setRoutines] = useState([])
  useEffect(() => {
    fetchPublicRoutines().then(result => setRoutines(result))
}, [])
  return <>
          <nav>
              <p>Home</p>
              <p>Plan</p>
              <p>Login</p>
          </nav>
           <h1>Hello World</h1>
           <MyRoutines routines={routines} setRoutines={setRoutines}/>
           {/* <Routines routines={routines} setRoutines={setRoutines}/> */}
           
          </>;
};

ReactDOM.render(<App />, document.getElementById("app"));
