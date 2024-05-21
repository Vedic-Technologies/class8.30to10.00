import React from 'react';

const LoginHomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 mt-20">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Server</h1>
        </div>
        <nav className="mt-10">
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Application</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Product</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Colony</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Add Cluster</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Image</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Host</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Script</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Toolkit</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Cloud account</a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Application > List > Product Details</h2>
          </div>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Please enter the application name" className="px-4 py-2 border rounded-lg"/>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">+ Newly added</button>
            <div className="flex items-center space-x-2">
              <img src="https://via.placeholder.com/30" alt="User Avatar" className="rounded-full"/>
              <span>Jane Cooper</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          {['Marvin McKinney', 'Leslie Alexander', 'Cameron Williamson', 'Marvin McKinney', 'Leslie Alexander', 'Cameron Williamson', 'Marvin McKinney', 'Leslie Alexander', 'Cameron Williamson'].map((name, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <img src={`https://via.placeholder.com/40?text=${name.charAt(0)}`} alt={name} className="rounded-full"/>
                <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">Newest: V{Math.random().toFixed(1).toString().slice(1)}.{Math.floor(Math.random() * 10)}</span>
              </div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-500">Name: Jane Cooper</p>
              <button className="mt-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200">...</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginHomePage;
 