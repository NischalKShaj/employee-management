// component for the profile page

// importing the required modules
import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../store/slice/userSlice";

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: 0,
    password: "",
    gender: "",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setFormData({
        username: currentUser.username || "",
        email: currentUser.email || "",
        age: currentUser.age || 0,
        password: currentUser.password || "",
        gender: currentUser.gender || "",
        role: currentUser.role || "",
      });
    }
  }, [currentUser]);

  const changeEvent = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // for updating the user data
  const handleUpdate = () => {
    try {
      dispatch(updateUser({ email: currentUser.email, updates: formData }));
      navigate("/");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="relative w-full max-w-md bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg rounded-lg p-8 text-white">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-2">Profile</h2>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLeor7Lf4ePn6eqrsbW5vsHIzM7a3d60ur3BxsjR1NbN0dPX2tzr7O29wsX2DjRMAAADaUlEQVR4nO2bW3LkIAwADYi3be5/25iZZB4bxyDZgqkt+ivZn+0SQgahTNNgMBgMBoPBYDAYDAaDwWCaAGBSG/mn3i53AFQMxt8xdpm6ewE466XU4getpZlVVy9YjHgKPcRE6Ke1KclfRnct2UkLprATpWe05g5W4PzfShmZVHOneGh0D1ZjK5j/yKZ3lpZLCPZ46R7Bcu2sKuN0i1Uzp1gXpxvN8qpeSQjTyMkgAiV0aJFWMGOctnrVpLZXJ/k3DRYQAi5Q2wJGdqkFqZThXj98oHKouK2wGZVhzqra78s/oXK8VobgxF2rHMVpY+WUipSU2goo5/pBoqTUtn6cZ+OV5sScVLTV4y0Kjhgp4fmOVajT3TuMUshTyxPG8kmr5xnGmnBCiu8C8b9JMS7fRyY6vSQwSi0fWDwn9YmfGaBKBUap1dOctGU8JVC3H29LaCGePHnvWKT104lVCgIpUMwXd1JR4KxSGcr+Y917NwhFXTIrTYQ7coNeHjhsVnFnVGZFtTyZL6IPFM7Js/YRfgBcWWduAz2sEN082e55prrPwV+iXii89T3i1NKp8tWhzWsDzqpxnDKlO6AW7J3q38BymFjSdHlvP3pu12LuYHRjdUHuaWlhew5xgApe6Fex7RffLUoPrWmxRkipM1KKNLv+IzjfuBjnuOTv3GcYAawvQN8Rqvy/K7dEG5L5Po4ak4KdF9dpvAtWtdhkvL5l02ue538RPoWoYG0oBpOKQUh9WNJz3pvZqSYRg9VZL3bL017B8iFyxwsmZ2uFniFLC2MpBYh7024VWt4yVQpQ9jiLDr1kYGhaHw+71WiJdHGTaosSMpP2kOnKWwTMlWfyAvq63ic4T+2//ta66L4M9iqju1Y6Xx+Kk5N4q9NTJhDP7bl9rZOZZS/Lple2S8UJJ+IYQhEt6ImF7EShoJasq1P8DeIjBGecMoRYAbeT0Ohsh8Cy797AdmjpT9gItEEtIL4vTULiPoTEx0YsGpHslLlJGr5eqs3iZRCN2tTKSVTPMNGnDwjoVPcgQX1SJ1pVherE7AhJqq6t3Wzr3amq67hHqvPImtMxceiVjimn+koaWT5DTaq3zahMcf2A8ucC5yhXdfqEG51UWrx23+InvphSLb97PxQz3cv2FN++VQeKyzcYDAaDwaA9XxcLKh2A6JUdAAAAAElFTkSuQmCC"
              alt="profileImage"
              className="rounded-full w-24 h-24"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={changeEvent}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={changeEvent}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="age" className="text-sm text-gray-400 mb-1">
              Age
            </label>
            <input
              type="tel"
              id="age"
              name="age"
              value={formData.age}
              onChange={changeEvent}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm text-gray-400 mb-1">
              Gender
            </label>
            <input
              type="tel"
              id="gender"
              name="gender"
              value={formData.gender}
              readOnly
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="role" className="text-sm text-gray-400 mb-1">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={changeEvent}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            >
              <option value="">Select a role</option>
              <option value="Developer">Developer</option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
              <option value="Tester">Tester</option>
              <option value="DevOps">DevOps</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={changeEvent}
              value={formData.password}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            onClick={handleUpdate}
            className="w-full py-2 mt-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold tracking-wide text-sm transition"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
