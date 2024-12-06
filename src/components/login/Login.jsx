// component for the login

// importing the required modules
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // for handling the change in the input fields
  const changeEvent = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };

  // for submitting the login form
  const handleSubmit = () => {};

  return (
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

        {/* {message && <p className="text-red-500 text-center">{message}</p>} */}

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
  );
};

export default Login;
