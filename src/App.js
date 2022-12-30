import { Route, Routes, Link } from "react-router-dom"
import {  Activities, Home, Login, Routines } from "./components/Index"
import CreateRoutine from "./components/CreateRoutine"
import { getActivities } from "./api/api"
import React, { useEffect, useState } from "react"


const App = () => {
  const [activities, setActivities] = useState([]);
  // const [token, setToken] = useState(
  //   window.localStorage.getItem("token" || "")
  // );

  // const history = useHistory();

  useEffect(() => {
    const getAllActivities = async () => {
      try {
        const result = await getActivities();
        setActivities(result);
        console.log('use effect result',result);
      } catch (error) {
        console.error(error);
      }
    };
    getAllActivities();
  }, [setActivities]);

  // useEffect(() => {
  //   if (token) {
  //     window.localStorage.setItem("token", token);
  //   } else {
  //     window.localStorage.removeItem("token", token);
  //   }
  // }, [token]);


  return (
    <>
    <nav className="whole-nav">
    <nav className="nav-list">
        <Link to="/" className="home-btn">HELLOPAL</Link>
      </nav>
        <nav className="nav-right">
        <Link to="/profile" className="profile-btn">Profile</Link>
        <Link to="/about" className="about-btn">About</Link>
          <Link to="/activities" className="activities-btn">Activities</Link>
          <Link to="routines" className="routines-btn">Routines</Link>
          <Link to="/login" className="login-btn">Login</Link>
        </nav>
    </nav>
     
      
 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<Activities activities={activities} />}/>
        <Route path="/routines" element={<Routines />} />
        <Route path="/createroutine" element={<CreateRoutine />} />
      </Routes>
    </>
  )
}

export default App