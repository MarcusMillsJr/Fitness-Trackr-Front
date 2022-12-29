import { Route, Routes, Link } from "react-router-dom"
import {  Activities, Home, Login, Routines } from "./components"
import CreateRoutine from "./components/CreateRoutine"


const App = () => {
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
        <Route path="/activities" element={<Activities />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/createroutine" element={<CreateRoutine />} />
      </Routes>
    </>
  )
}

export default App