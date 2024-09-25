import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();

  const handleSignup = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup",{
        username,
        email,
        password
      })
      if(response.status === 200){
        navigate("/login")
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Sign Up</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
            onChange={(e)=>setUsername(e.target.value)}
              className="w-full border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
              className="w-full border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
            onChange={(e)=>setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
            onClick={handleSignup}
              className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300 w-full"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <a href="/login" className="text-sm text-primary hover:underline">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
