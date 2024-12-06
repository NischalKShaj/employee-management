// component for the login

// importing the required modules
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/slice/userSlice";
import Swal from "sweetalert2";
import { validateEmail, validatePassword } from "../../utils/validation";
import Navbar from "../navbar/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // for handling the change in the input fields
  const changeEvent = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };

  // for submitting the login form
  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    // email
    if (!validateEmail(formData.email)) {
      errors.email = "Enter a valid email";
    }

    // password
    if (!validatePassword(formData.password)) {
      errors.password = "Enter valid password";
    }
    setError(errors);
    try {
      dispatch(login({ email: formData.email, password: formData.password }));
      Swal.fire({
        icon: "success",
        text: "user logged in successfully",
        title: "success",
      });
      navigate("/home");
    } catch (error) {
      console.error("error", error);
      Swal.fire({
        icon: "error",
        text: "oops unexpected error occurred",
        title: "error",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-md bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg rounded-lg p-8 space-y-6 text-white"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Login</h2>
            <p className="text-gray-400 text-sm">
              Welcome back! Please login to your account.
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={changeEvent}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              placeholder="Enter your email"
              required
            />
            {error && <p className="text-red-500 mt-1">{error.email}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={changeEvent}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              placeholder="Enter your password"
              required
            />
            {error && <p className="text-red-500 mt-1">{error.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold tracking-wide text-sm transition"
          >
            Login
          </button>

          <div className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
