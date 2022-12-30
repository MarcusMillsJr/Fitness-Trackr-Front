import React from "react";
import { Link } from "react-router-dom";
import untitled from "../images/bluedrop.png";
import skate from "../images/running.jpg";


const Home = () => {
  return (
    //if loggin in then say hello ${users name}
    <>
      <div className="video">
      <img src={skate} alt="friends about to skate" className="skate"/>
        <img src={untitled} alt="green background" className="backdrop" />
        <div className="home-div">
        <h1 className="homediv-title">HELLO PAL</h1>
        <h2 className="homediv-slogan">Let's plan some activities and leisure, together.</h2>
          <Link to="/login" className="homediv-login">
            GET STARTED
          </Link>
      </div>
      </div>
      
    </>
  );
};

export default Home;
