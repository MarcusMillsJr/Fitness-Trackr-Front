import React from "react";
import { Link } from "react-router-dom";
import skate from "../images/running.jpg";


const Home = () => {
  return (
    //if loggin in then say hello ${users name}
    <>
      <div className="video">
      <img src={skate} alt="friends about to skate" className="skate"/>
        <div className="home-div">
        <h1 className="homediv-title">Fitness Trackr</h1>
        <h2 className="homediv-slogan">Let's plan some activities and leisure, together.</h2>
          <Link to="/register" className="homediv-login">
            GET STARTED
          </Link>
      </div>
      </div>
      
    </>
  );
};

export default Home
