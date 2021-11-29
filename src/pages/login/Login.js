import React, { useRef, useContext } from 'react';
import { CircularProgress } from '@material-ui/core';

import './Login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';




const Login = () => {


    const email = useRef();
    const password = useRef();

    const { user, isFetching, error, dispatch } = useContext(AuthContext);




    // Handle Login Form submission
    const handleClick = e => {
        // Prevent page refresh
        e.preventDefault();

        // Make Login Call to the Api
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };





    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    {/* Login Logo */}
                    <h3 className="loginLogo">Rennbook</h3>

                    {/* Login Message */}
                    <span className="loginDesc">Connect with friends and the world around you on Rennbook.</span>
                </div>

                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        {/* Login Inputs */}
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input 
                            placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} 
                        />

                        {/* Login Button - display loading Icon if Fetching */}
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? <CircularProgress color="white" size="20px" /> : "Log In"}
                        </button>

                        {/* Forgot Password */}
                        <span className="loginForgot">Forgot Password</span>

                        {/* Register Button */}
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="white" size="20px" /> : "Create A New Account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default Login;
