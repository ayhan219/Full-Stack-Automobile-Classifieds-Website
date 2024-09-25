import React, { useEffect, useState } from "react";
import {
  FaRoad,
  FaArrowRight,
  FaArrowLeft,
  FaShoppingCart,
} from "react-icons/fa";
import { IoLogoModelS } from "react-icons/io";
import { PiEngine } from "react-icons/pi";
import { SiCoronaengine } from "react-icons/si";
import { MdGasMeter } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";

const CarDetails = () => {
  const [carDetails, setCarDetails] = useState({});
  const [carImages, setCarImages] = useState([]);
  const [count, setCount] = useState(0);

  const controlTheImage = () => {
    if (carImages.length - 1 === count) {
      setCount(0);
    } else if (count < 0) {
      setCount(carImages.length-1)
    } else {
      setCount(count + 1);
    }
  };

  const { id } = useParams();

  const getSpecificPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/car/${id}`);
      setCarDetails(response.data);
      const findCarImages = response.data[0].image.split(",");
      setCarImages(findCarImages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSpecificPost();
  }, []);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-[80%] h-[30%] bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
        <div className="text-center mb-4">
          <h3 className="text-4xl text-[#1F2B59] font-extrabold">
            {carDetails[0]?.brand}
          </h3>
        </div>
        <div className="w-full flex gap-6 justify-center">
          <div className="flex gap-2 items-center">
            <FaRoad className="text-4xl" />
            <p className="text-primary text-xl font-bold">
              {carDetails[0]?.km} km
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoLogoModelS className="text-4xl" />
            <p className="text-primary text-xl font-bold">
              {carDetails[0]?.model}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <PiEngine className="text-4xl" />
            <p className="text-primary text-xl font-bold">
              {carDetails[0]?.HP} hp
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <SiCoronaengine className="text-4xl" />
            <p className="text-primary text-xl font-bold">
              {carDetails[0]?.transmission}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <MdGasMeter className="text-4xl" />
            <p className="text-primary text-xl font-bold">
              {carDetails[0]?.fuel}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] flex items-center mt-4">
        <div className="w-full relative flex justify-center">
          <img
            className="w-full h-[50rem] object-cover rounded-lg shadow-md "
            src={`http://localhost:5000/uploads/${carImages[count]}`}
            alt="Car"
          />
           <div className="w-full h-[30%] absolute flex justify-between items-center top-64">
            <FaArrowLeft
              onClick={() => {
                setCount(count - 1);
                controlTheImage();
              }}
              className="cursor-pointer   text-white hover:text-gray-300 p-4 bg-gray-800 rounded-full transition duration-300"
              style={{ fontSize: "4rem" }}
            />
            <FaArrowRight
              onClick={() => {
                setCount(count + 1);
                controlTheImage();
              }}
              className="cursor-pointer text-white hover:text-gray-300 p-4 bg-gray-800 rounded-full transition duration-300"
              style={{ fontSize: "4rem" }}
            />
          </div>
        </div>

        <div className="w-[40%] h-[70%] bg-primary shadow-2xl rounded-xl ml-4 flex flex-col">
          <div className="p-7 text-white text-3xl font-bold flex justify-between">
            <label>Car Price</label>
            <p>${carDetails[0]?.price}</p>
          </div>
          <div className="flex justify-center mb-4">
            <button className="w-[80%] flex items-center justify-center gap-4 h-14 bg-white text-primary text-2xl font-bold rounded hover:bg-gray-200 transition duration-300">
              <FaShoppingCart /> Buy
            </button>
          </div>
          <div className="flex flex-col gap-3 px-7">
            <div className="flex justify-between text-white">
              <span>Service Total</span>
              <p>$79</p>
            </div>
            <div className="flex justify-between text-white">
              <span>CarAudit™</span>
              <p>$79</p>
            </div>
            <div className="flex justify-between text-white">
              <span>Extended Warranty</span>
              <p className="w-16 h-10 bg-green-600 text-xl font-bold rounded-sm text-center">
                Free
              </p>
            </div>
          </div>
          <div className="p-7 text-white text-3xl font-bold flex justify-between">
            <label>Total Price</label>
            <p>${carDetails[0]?.price + 79 + 79}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
