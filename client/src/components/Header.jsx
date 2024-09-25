import React from "react";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[115vh] flex items-center pt-16  flex-col relative">
      <div className="w-[70%] h-[80vh] bg-black relative">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1548180367-1eebe054c9c6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="text-5xl font-bold mb-4">
            You choose your car online. We inspect it and deliver it.
          </p>
         <Link to={"/buy"}>
         <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded transition duration-300">
            Search Car
          </button>
         </Link>
        </div>
      </div>
      <div className="w-[50%] h-[15%] bg-white absolute bottom-56 rounded-xl shadow-2xl flex items-center">
        <div className="p-5 flex flex-col gap-3 items-center">
          <FaMoneyBillWaveAlt className="text-2xl text-[#1F2B59]" />

          <h2 className="text-[#1F2B59] text-2xl font-extrabold">
            Money back guarantee
          </h2>
          <p className="text-[#31406F] font-bold">
            If you don't fall in love with the vehicle, simply return it to us.
          </p>
        </div>
        <div className="p-5 flex flex-col gap-3 items-center">
            <MdHealthAndSafety className="text-2xl text-[#1F2B59]" />
          <h2 className="text-[#1F2B59] text-2xl font-extrabold">
          Safe purchase
          </h2>
          <p className="text-[#31406F] font-bold">
          We guarantee the technical condition of every vehicle sold.
          </p>
        </div>
        <div className="p-5 flex flex-col gap-3 items-center">
            <SiTrustpilot className="text-2xl text-[#1F2B59]" />
          <h2 className="text-[#1F2B59] text-2xl font-extrabold">
          6-month warranty
          </h2>
          <p className="text-[#31406F] font-bold">
          In addition, with every car you receive an extended warranty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
