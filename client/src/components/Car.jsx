import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Car = ({ item, id }) => {
  return (
    <div className="w-full h-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      <div key={id} className="w-full h-56">
        <img
          className="w-full h-full object-cover"
          src={`http://localhost:5000/uploads/${item.image}`}
          alt={`${item.brand} ${item.model}`}
        />
      </div>
      <div className="p-2">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{item.brand}</h3>
          <span className="text-sm text-gray-500">Brand</span>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{item.model}</h3>
          <span className="text-sm text-gray-500">Model</span>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{item.km} km</h3>
          <span className="text-sm text-gray-500">Kilometers</span>
        </div>
      </div>
      <div className="flex justify-end  bg-white">
        <Link to={`/buy/cardetails/${item.id}`}>
          <button className="flex items-center justify-evenly w-36 h-10 text-sm font-bold bg-blue-500 text-white rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-600">
            See details
            <FaChevronRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Car;
