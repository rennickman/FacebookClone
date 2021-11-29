import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import { AuthContext } from './context/AuthContext';




const App = () => {


    const { user } = useContext(AuthContext);


    return (
        <Router>
            <Routes>
                {/* Home Route - Only accessible if logged in */}
                <Route path="/" exact element={user ? <Home /> : <Register />} />

                {/* Login Route - Cant be accessed if already logged in */}
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

                {/* Register Route Cant be accessed if already logged in */}
                <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

                {/* Profile Route */}
                <Route path="/profile/:username" element={<Profile />} />
            </Routes>
        </Router>
    )
}



export default App



