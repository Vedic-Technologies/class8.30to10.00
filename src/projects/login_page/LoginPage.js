import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

const [email, setEmail]=useState("");
const [password,setPassword]=useState("");
const [error, setError]=useState("")


  const navigate=useNavigate()

  const goToHomePage=()=>
    {
if(email==="admin@gmail.com" && password==='12345678')
  {
     navigate('/login_home');
  }
else{
  setError("invalid username and password");
}
     
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
        {/* Left side */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">Good to see you again!</h2>
          <p className="text-red-600 mb-8">{error}</p>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                value={email}
                onChange={(e)=>{setEmail(e.target.value);setError("")}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember me!</span>
              </label>
              <a href="#" className="text-green-500">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
              onClick={()=>goToHomePage()}
            >
              Login
            </button>
          </div>
          <p className="mt-4 text-center">
            Don't have an account? <a href="#" className="text-green-500">Sign up here</a>.
          </p>
        </div>
        {/* Right side */}
        <div className="w-1/2 bg-green-900 text-white p-8 rounded-r-lg flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">See your path clearly</h2>
            <p className="mb-8">All your goals in one glance!</p>
            <div className="space-y-4">
              <div className="bg-white text-black p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">Write a business plan</h3>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">Set yearly monetary goal</h3>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">Improve customer service</h3>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-md">
                <h3 className="font-semibold">Update branding</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
 