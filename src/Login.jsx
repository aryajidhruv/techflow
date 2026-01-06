import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl shadow-indigo-100 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Log In</h1>
          <p className="text-gray-500 mt-2">Join TechFlow and start studying smarter.</p>
        </div>
        
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-indigo-500" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-indigo-500" />
          <input type="password" placeholder="Password" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:outline-indigo-500" />
          <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all">Login</button>
        </form>

        {/* <p className="text-center mt-6 text-sm text-gray-500">
          Already have an account? <Link to="/login" className="text-indigo-600 font-bold">Log in</Link>
        </p> */}
      </div>
    </div>
  );
};

export default Login;