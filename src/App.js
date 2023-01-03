import { Route, Routes, Link } from "react-router-dom"
import {  Activities, Home, Login, Routines, CreateActivity, Register, MyRoutines } from "./components/index"
import { getActivities, fetchPublicRoutines, getUser } from "./api/api"
import React, { useEffect, useState } from "react"



const App = () => {
  const [user, setUser] = useState({})
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([])
  const [updateRoutines, setUpdateRoutines] = useState(0)
  const [token, setToken] = useState(
    window.localStorage.getItem("token" || "")
  );
 

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

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token", token);
    }
  }, [token]);
 
  useEffect(() => {
    fetchPublicRoutines().then(result => setRoutines(result))
  }, [updateRoutines])
  useEffect(() => {
    if(token){
      getUser(token).then(result => setUser(result));
    }
  }, [token])
  
 return(
    <>
    <nav className="whole-nav">
    <nav className="nav-list">
        <Link to="/" className="home-btn">Fitness Trackr</Link>
      </nav>
        <nav className="nav-right">

        <Link to="/MyRoutines" className="profile-btn">My Routines</Link>
          <Link to="/activities" className="activities-btn">Activities</Link>
          <Link to="/routines" className="routines-btn">Routines</Link>
          <Link to="/login" className="login-btn">Login</Link>
        </nav>
    </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />

        <Route path="/activities" element={<Activities activities={activities} />}/>
        <Route path="/createactivity" element={<CreateActivity setActivities={setActivities}/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/routines" element={<Routines routines={routines} setRoutines={setRoutines}/>} />
        <Route path="/MyRoutines" element={<MyRoutines routines={routines} activities={activities} setRoutines={setRoutines} setUpdateRoutines={setUpdateRoutines} user={user} token={token}/>} />
      </Routes>
    </>
 )}

export default App