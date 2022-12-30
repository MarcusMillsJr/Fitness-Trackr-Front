import React from "react";

const Login = () => {
  return (
    <>
    <div className="login-page">
    <form className="login-form">
          <label className="login-title">LOGIN TO START PLANNING</label>
          <input type="text" placeholder="enter username" required className="username"></input>
          <input type="text" placeholder="enter password" required className="password"></input>
        <div>
            <button className="login-btn">Login</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login
