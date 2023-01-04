import React, { useState } from "react";
import { loginUser } from "../api/api";
import { Link } from "react-router-dom";


const Login = ({token, setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await loginUser(username, password);
      const newToken = res['token']
      setToken(newToken);
      window.localStorage.setItem('fitness_tracker_JWT', newToken);
      window.alert("You have successfully signed in! Now redirecting to home page...")
      window.location.assign("/");
    } catch (error) {
      window.alert("Error logging in. Please check your username and password and try again.");
    }
  }

  return (
    <div>
      <div id="login-page">
        <div>
        <h1 className="form-title">Welcome Returning User!</h1>
        <form onSubmit={handleSubmit} className="username-box">
          <label>Username:</label>
          <input
            id="username"
            onChange={handleOnChange}
            value={username}
            placeholder="Username"
          />
          <br />
          <br />
          <label>Password:</label>
          <input
            type="password"
            id="Password"
            onChange={handleOnChange}
            value={password}
            placeholder="Password"
          />
          <link></link>
          <button type="submit" id="login-button">
            Login
          </button>
        </form>
      </div>
      <br/>
      <div id="register">
        <h4>Don't have an account?</h4>
        <button>
          <Link to="/register"> Click here to Register</Link>
        </button>
        </div>
      </div>
    </div>
  );
  }

export default Login;

