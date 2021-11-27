import React from 'react';

import './Register.css';





const Register = () => {




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
                    <div className="loginBox">
                        {/* Register Inputs */}
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Verify Password" className="loginInput" />

                        {/* Register Button */}
                        <button className="loginButton">Sign Up</button>

                        {/* Login Button */}
                        <button className="loginRegisterButton">Log Into Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Register;
