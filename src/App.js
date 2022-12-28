import { Route, Routes, Link } from "react-router-dom"
import {  Activities, Home, Login, Routines } from "./components"
import CreateRoutine from "./components/CreateRoutine"


const App = () => {
  return (
    <>
      <nav>
         <li><Link to="/" className="home-btn">HELLO, PAL.</Link></li>
        <ul className="nav-list">
          <li><Link to="/activities" className="activities-btn">Activities</Link></li>
          <li><Link to="routines" className="routines-btn">Routines</Link></li>
          <li><Link to="/profile" className="profile-btn">Profile</Link></li>
          <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>
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