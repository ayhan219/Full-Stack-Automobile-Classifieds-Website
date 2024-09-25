import React, { useEffect, useState } from "react";
import { FaRoad } from "react-icons/fa";
import { IoLogoModelS } from "react-icons/io";
import { PiEngine } from "react-icons/pi";
import { SiCoronaengine } from "react-icons/si";
import { MdGasMeter } from "react-icons/md";
import { Link } from "react-router-dom";

const CarSeller = ({ car, id, loading }) => {
  return (
    <div className="text-primary w-full h-auto pt-10 flex pl-10 md:pl-0  flex-col gap-4 ">
      <div key={id} className="w-full h-full flex flex-col  md:flex-row">
        {loading ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : (
          <div className="w-full md:w-[30%] h-full">
            <img
              className="w-full h-64 object-cover rounded-xl"
              src={`http://localhost:5000/uploads/${car.image}`}
              alt=""
            />
          </div>
        )}
        <div className="p-3 w-full flex flex-col justify-between ">
          <div className="w-full h-10 ">
            <h2 className="text-primary text-xl md:text-2xl font-extrabold">
              {car.brand} {car.model}
            </h2>
          </div>
          <div className="w-full flex gap-3 md:gap-6">
            <div className="flex flex-col items-center md:flex-row gap-2">
              <FaRoad className="text-xl md:text-2xl" />
              <p className="text-primary">{car.km}</p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2">
              <IoLogoModelS className="text-xl md:text-2xl" />
              <p className="text-primary">{car.model}</p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2">
              <PiEngine className="text-xl md:text-2xl" />
              <p className="text-primary">{car.HP} hp</p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2">
              <SiCoronaengine className="text-xl md:text-2xl" />
              <p className="text-primary">{car.transmission}</p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2">
              <MdGasMeter className="text-xl md:text-2xl" />
              <p className="text-primary">{car.fuel}</p>
            </div>
          </div>
          <div className=" w-full md:w-[60%] flex justify-between items-center">
            <div className="flex pt-3 md:block gap-3 ">
              <label className="text-xl font-bold text-primary">Price: </label>
              <h3 className="text-primary text-xl md:text-3xl font-bold">
                 {car.price} €
              </h3>
            </div>
            <div>
              <Link to={`/buy/cardetails/${car.id}`}>
                {" "}
                <button className="bg-primary mt-2 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded transition duration-300">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSeller;
