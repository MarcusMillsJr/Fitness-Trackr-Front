import { Route, Routes, Link } from "react-router-dom"
import {  Activities, Home, Login, Routines, CreateActivity, Register, MyRoutines,} from "./components/Index"
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
 
  function logout() {
    window.localStorage.removeItem('fitness_tracker_JWT');
    setToken('');
    setUser('');
  }

  useEffect(() => {
    const getAllActivities = async () => {
      try {
        const result = await getActivities();
        setActivities(result);
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
        <Link to="/" className="home-btn">Fitness Trackr Home</Link>
      </nav>
    

        <nav className="nav-right">
          <Link to="/activities" className="activities-btn">Activities</Link>
          <Link to="/routines" className="routines-btn">Routines</Link>
          {token ? (
          <>
             <Link to="/MyRoutines" className="myroutines-btn">My Routines</Link>
            <Link to="/" onClick={logout} className="login-btn">
            Logout
          </Link>
          </>
         
        ) : (
          <>
            <Link to="/login" className="log-nav">Login</Link>
          </>

            )
          }
        </nav>

    </nav>
      <Routes>
        <Route exact path="/" element={<Home token={token} user={user} />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />

        <Route path="/activities" element={<Activities activities={activities} user={user}  token={token} />}/>
        <Route path="/createactivity" element={<CreateActivity setActivities={setActivities} activities={activities} token={token}/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/routines" element={<Routines routines={routines} setRoutines={setRoutines}/>} />
        <Route path="/MyRoutines" element={<MyRoutines routines={routines} activities={activities} setRoutines={setRoutines} setUpdateRoutines={setUpdateRoutines} user={user} token={token}/>} />
      </Routes>
    </>
 )}

export default App