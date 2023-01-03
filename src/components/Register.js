import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { Link } from "react-router-dom";

const RegisterUser = () => {
    const [user, setUser] = useState("");
    const [password, setPassword]= useState("");
 //
    const handleRegisterClick = async (event) => {
        event.preventDefault();
        const registerInfo = {
            user: user,
            password: password
        };

        let firstPassword = document.querySelector('.password').value,
            confirmPassword = document.querySelector('.confirm_password').value;
          
            if (firstPassword === "") {
                alert("Password field cannot be empty");
                return false;
            } 
            
            if (firstPassword !== confirmPassword) {
                alert("Passwords did not match, please try again!");
                return false
            }

            const newUser = await registerUser(registerInfo);
            alert(newUser.message)

            setUser("");
            setPassword("");
            document.querySelector('.confirm_password').value='';
            window.location.reload(false);
    };

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
 

    return (
      <div id='registerPage'>
        <h2>Create New User</h2>
        <form>
            <label for="username">Username: </label>
            <input type="text" className="RegisterBox" id="username" placeholder="Username" value={user} onChange={handleUserChange}  />
            <br/>
            <br/>
            <label for="password">Password: </label>
            <input type="password" className="RegisterBox" placeholder="Password" id="password" value={password}
             onChange={handlePasswordChange}/>
             <br/>
             <br/>
            <label for="confirm-password">Confirm Password: </label>
            <input type="password" className="RegisterBox" placeholder="Re-Enter Password" id="confirm-password"
            />
             <br/>
             <br/>
             <button onClick={handleRegisterClick}>Register</button>  
        </form>
        <h4>Already have an account with us?</h4><button><Link to="/login"> Click here to login</Link></button>
      </div>    
    );
};

export default RegisterUser;
