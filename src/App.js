import { Route, Routes, Link } from "react-router-dom"
import {  Activities, Home, Login, Routines, MyRoutines } from "./components"
import { useState, useEffect } from "react";


import { fetchPublicRoutines } from "./api/api";




const App = () => {
  const [routines, setRoutines] = useState([])
  useEffect(() => {
    fetchPublicRoutines().then(result => setRoutines(result))
  })
  
  return (
    <>
    <nav className="whole-nav">
    <nav className="nav-list">
        <Link to="/" className="home-btn">HELLOPAL</Link>
      </nav>
        <nav className="nav-right">
        <Link to="/MyRoutines" className="profile-btn">My Routines</Link>
        <Link to="/about" className="about-btn">About</Link>
          <Link to="/activities" className="activities-btn">Activities</Link>
          <Link to="routines" className="routines-btn">Routines</Link>
          <Link to="/login" className="login-btn">Login</Link>
        </nav>
    </nav>
     
      
 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/routines" element={<Routines routines={routines} setRoutines={setRoutines}/>} />
        <Route path="/MyRoutines" element={<MyRoutines routines={routines} setRoutines={setRoutines}/>} />
      </Routes>
    </>
  )
}

export default App