import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "../UserContext/UserContext";
import axios from "axios";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const { currentUser } = useContext(UserContext);

  const handleLogout = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-20 bg-primary text-white flex justify-between px-10 md:px-0 md:justify-around items-center relative">
        <div className="text-3xl font-bold">
          <Link to={"/"}>
            <h2>Carvago</h2>
          </Link>
        </div>
        <div className="hidden md:flex gap-10">
          <div className="flex gap-8 text-lg font-semibold items-center">
            <Link to="/buy">
              <a className="hover:text-gray-400 ease-in-out duration-150">
                Buy
              </a>
            </Link>
            <Link to={currentUser ? "/createcar" : "/login"}>
              <a className="hover:text-gray-400 ease-linear duration-150">
                Sell car
              </a>
            </Link>
            <Link to="/service">
              <a className="hover:text-gray-400 ease-linear duration-150">
                Services
              </a>
            </Link>
          </div>
          <div className="flex gap-5 pl-12">
            {currentUser === null && (
              <Link to={"/login"}>
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
                  Login
                </button>
              </Link>
            )}
            {currentUser === null ? (
              <Link to={"/signup"}>
                <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
                  Sign Up
                </button>
              </Link>
            ) : (
              <Link>
                <button
                  onClick={handleLogout}
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Logout
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="flex md:hidden text-4xl">
          <GiHamburgerMenu onClick={() => setHamburgerMenu(!hamburgerMenu)} />
        </div>

        {hamburgerMenu && (
          <div className="absolute top-20 left-0 w-full bg-primary text-white p-5 md:hidden z-50">
            <div className="flex flex-col gap-4">
              <Link to="/buy" onClick={() => setHamburgerMenu(false)}>
                <a className="hover:text-gray-400 ease-linear duration-150">
                  Buy
                </a>
              </Link>
              <Link
                to={currentUser ? "/createcar" : "/login"}
                onClick={() => setHamburgerMenu(false)}
              >
                <a className="hover:text-gray-400 ease-linear duration-150">
                  Sell car
                </a>
              </Link>
              <Link to="/service" onClick={() => setHamburgerMenu(false)}>
                <a className="hover:text-gray-400 ease-linear duration-150">
                  Services
                </a>
              </Link>
              {currentUser === null && (
              <Link to={"/login"}>
                <button onClick={()=>setHamburgerMenu(false)} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
                  Login
                </button>
              </Link>
            )}
            {currentUser === null ? (
              <Link to={"/signup"}>
                <button onClick={() => setHamburgerMenu(false)} className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
                  Sign Up
                </button>
              </Link>
            ) : (
              <Link>
                <button
                  onClick={(e)=>{
                    handleLogout(e)
                    setHamburgerMenu(false)
                  }}
                 
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Logout
                </button>
              </Link>
            )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
