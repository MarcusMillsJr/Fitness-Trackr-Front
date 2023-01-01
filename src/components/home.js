
import React from 'react';
import { Link } from 'react-router-dom';
import skate from "../images/running.jpg";

const Home = () => {
    return (
        <div className="video">
                 <img src={skate} alt="friends about to skate" className="skate"/>
            <div className="home-div">
            <h1 className="homediv-title">HELLO PAL</h1>
            <h2 className="homediv-slogan">Let's plan some activities and leisure, together.</h2>
            <button>
                <Link to='/login' className="homediv-login">Login</Link>
            </button><br></br>
            <h3>Don't have an account?</h3>
            <button>
                <Link to='/register'>Register here!</Link><br></br>
            </button>
            </div>
            
        </div>
    )
}

export default Home;
