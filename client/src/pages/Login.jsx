import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Login
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleLogin}
              className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300 w-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <a href="/signup" className="text-sm text-primary hover:underline">
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
