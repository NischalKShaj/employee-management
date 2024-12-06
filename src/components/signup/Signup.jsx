// component for the signup

// importing the required modules
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  usernameValidation,
  validateAge,
  validateEmail,
  validatePassword,
  validateRole,
} from "../../utils/validation";
import { useDispatch } from "react-redux";
import { signupdata } from "../../store/slice/userSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: 0,
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    role: "",
  });

  const [error, setError] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    role: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for handling the change in the formData
  const changeEvent = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // for submitting the signup values
  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    // username
    if (!usernameValidation(formData.username)) {
      errors.username =
        "Name must contain more than 2 letters and only alphabets.";
    }

    // age
    if (!validateAge(formData.age)) {
      errors.age = "Age should be valid number";
    }

    // email
    if (!validateEmail(formData.email)) {
      errors.email = "Enter a valid email address.";
    }

    // role
    if (!validateRole(formData.role)) {
      errors.role = "Role cannot be blank";
    }

    // password
    if (!validatePassword(formData.password)) {
      errors.password =
        "Password should contain a capital letter, number, symbol  and should be at least 6 characters";
    }

    // confirm
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setError(errors);

    if (Object.keys(errors).length == 0) {
      try {
        dispatch(
          signupdata({
            username: formData.username,
            age: formData.age,
            email: formData.email,
            gender: formData.gender,
            role: formData.role,
            password: formData.password,
          })
        );
        navigate("/");
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg rounded-lg p-8 space-y-6 text-white"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Signup</h2>
          <p className="text-gray-400 text-sm">
            Create your account. Join us now!
          </p>
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
            placeholder="Enter your username"
            required
          />
          {error && <p className="text-red-500 mt-1">{error.username}</p>}
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
            placeholder="Enter your email"
            required
          />
          {error && <p className="text-red-500 mt-1">{error.email}</p>}
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
            placeholder="Enter your age"
            required
          />
          {error && <p className="text-red-500 mt-1">{error.age}</p>}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-400 mb-1">Gender</label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="w-4 h-4 mr-2 cursor-pointer"
                required
                onChange={changeEvent}
              />
              <label htmlFor="male" className="text-sm cursor-pointer">
                male
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="w-4 h-4 mr-2 cursor-pointer"
                required
                onChange={changeEvent}
              />
              <label htmlFor="employee" className="text-sm cursor-pointer">
                female
              </label>
            </div>
          </div>
          {error && <p className="text-red-500 mt-1">{error.gender}</p>}
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

          {error && <p className="text-red-500 mt-1">{error.role}</p>}
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
          {error && <p className="text-red-500 mt-1">{error.password}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm text-gray-400 mb-1">
            Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={changeEvent}
            value={formData.confirmPassword}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            placeholder="Confirm your password"
            required
          />
          {error && (
            <p className="text-red-500 mt-1">{error.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold tracking-wide text-sm transition"
        >
          Signup
        </button>

        <div className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
