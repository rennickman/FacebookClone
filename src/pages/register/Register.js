import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Register.css';





const Register = () => {


    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordVerify = useRef();

    const history = useNavigate()


    // Handle Registration Form submission
    const handleClick = async e => {
        // Prevent page refresh
        e.preventDefault();

        // Check that 2 passwords are the same
        if (passwordVerify.current.value !== password.current.value) {
            // Send Invalidation message if they dont match
            password.current.setCustomValidity("Passwords don't match!");

        } else {
            // Create a user with the values entered in input fields
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };

            try {
                // Create new user in database
                await axios.post("/auth/register", user);

                // Push user to Login Page if registration was successful
                history("/login");

            } catch (err) {
                // Deal with any errors
                console.log(err);
            } 
        }
    };





    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    {/* Register Logo */}
                    <h3 className="loginLogo">Rennbook</h3>

                    {/* Register Message */}
                    <span className="loginDesc">Connect with friends and the world around you on Rennbook.</span>
                </div>

                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        {/* Register Inputs */}
                        <input placeholder="Username" required ref={username} className="loginInput"/>
                        <input placeholder="Email" required ref={email} className="loginInput" type="email"/>
                        <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6"/>
                        <input placeholder="Verify Password" required ref={passwordVerify} className="loginInput" type="password"/>

                        {/* Register Button */}
                        <button className="loginButton" type="submit">Sign Up</button>

                        {/* Login Button */}    
                        <button className="loginRegisterButton">Log Into Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default Register;
