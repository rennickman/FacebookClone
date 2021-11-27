import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/profile/:username" element={<Profile />} />
            </Routes>
        </Router>
    )
}



export default App



