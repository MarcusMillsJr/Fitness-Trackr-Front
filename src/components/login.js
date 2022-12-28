import React from "react";
import login from '../images/login.png'

const Login = () => {
  return (
    <>
    <img src={login} alt="backdrop" width={900} className="login-drop"/>
      <form className="login-form">
        <div className="login-username">
          <label className="login-title">LOGIN TO START PLANNING</label>
          <input type="text" placeholder="enter username" required></input>
          <input type="text" placeholder="enter password" required></input>
        </div>
        <div>
            <button className="login-btn">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login
