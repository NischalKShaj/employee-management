// file to show the main routes for the application

// importing the required modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";

const MainRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainRoutes;
