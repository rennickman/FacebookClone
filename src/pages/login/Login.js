import React from 'react';

import './Login.css';





const Login = () => {




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
                    <div className="loginBox">
                        {/* Login Inputs */}
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />

                        {/* Login Button */}
                        <button className="loginButton">Log In</button>

                        {/* Forgot Password */}
                        <span className="loginForgot">Forgot Password</span>

                        {/* Register Button */}
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Login;
