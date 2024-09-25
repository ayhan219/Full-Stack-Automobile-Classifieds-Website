import React, { useEffect, useState } from "react";
import CarSeller from "../components/CarSeller";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";

const Buy = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [transmission, setTransmission] = useState("");
  const [minKm, setMinKm] = useState("");
  const [maxKm, setMaxKm] = useState("");
  const [color, setColor] = useState([]);
  const [firstOwner, setFirstOwner] = useState("");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [openSearchBar,setOpenSearchBar] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5; 

  // Checkbox handling for color and transmission
  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    setColor((prevColors) =>
      checked ? [...prevColors, value] : prevColors.filter((c) => c !== value)
    );
  };

  const handleTransmissionChange = (e) => {
    setTransmission(e.target.value);
  };

  const handleFirstOwnerChange = (e) => {
    setFirstOwner(e.target.value === "yes" ? true : false);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/car", {
        params: {
          minPrice,
          maxPrice,
          brand,
          transmission,
          minKm,
          maxKm,
          firstOwner,
          color: color.join(","),
          page: currentPage, 
          limit,
        },
      });

      setCars(response.data);  
      if (response.data.length === 0 && currentPage > 1) {
        // If the data is empty, revert to the previous page
        setCurrentPage(prevPage => prevPage - 1);
      }
      
     
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage]); 

  const handleNextPage = () => {
    if (cars.length > 0) {  // Only allow going to next page if there are cars
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  
  const isNextDisabled = cars.length === 0;
  return (
    <div className="w-full h-auto flex ">
       <div className="flex w-[5%] bg-primary md:hidden">
        <GiHamburgerMenu onClick={()=>setOpenSearchBar(!openSearchBar)} className="text-2xl text-white cursor-pointer" />
</div>
      {/* Sidebar */}
      <div className="hidden w-[20%] h-full bg-white shadow-lg p-8 md:flex flex-col">
        <h2 className="text-primary text-3xl font-extrabold text-center pb-6">
          Search Area
        </h2>

        {/* Price Filter */}
        <div className="w-full flex flex-col gap-4 pb-4">
          <label className="text-sm text-primary font-bold">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              className="w-[50%] border-2 border-solid border-primary outline-none rounded px-2 py-1"
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              className="w-[50%] border-2 border-solid border-primary outline-none rounded px-2 py-1"
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div className="w-full pb-4">
          <label className="text-sm text-primary font-bold">Brand</label>
          <input
            className="w-full border-2 border-solid border-primary outline-none rounded px-2 py-1 mt-1"
            type="text"
            placeholder="Enter brand name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>

        {/* Transmission Filter */}
        <div className="w-full pb-4">
          <label className="text-sm text-primary font-bold">Transmission</label>
          <div className="w-full flex flex-col gap-2 pt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="Manual"
                onChange={handleTransmissionChange}
              />
              <span className="text-sm text-gray-700">Manual</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="Automatic"
                onChange={handleTransmissionChange}
              />
              <span className="text-sm text-gray-700">Automatic</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="Hybrid"
                onChange={handleTransmissionChange}
              />
              <span className="text-sm text-gray-700">Hybrid</span>
            </label>
          </div>
        </div>

        {/* Km Filter */}
        <div className="w-full flex flex-col gap-4 pb-4">
          <label className="text-sm text-primary font-bold">Km Range</label>
          <div className="flex items-center gap-2">
            <input
              className="w-[50%] border-2 border-solid border-primary outline-none rounded px-2 py-1"
              type="number"
              placeholder="Min km"
              value={minKm}
              onChange={(e) => setMinKm(e.target.value)}
            />
            <input
              className="w-[50%] border-2 border-solid border-primary outline-none rounded px-2 py-1"
              type="number"
              placeholder="Max km"
              value={maxKm}
              onChange={(e) => setMaxKm(e.target.value)}
            />
          </div>
        </div>

      {/* Color Filter */}
<div className="w-full pb-4">
  <label className="text-sm text-primary font-bold">Colors</label>
  <div className="w-full flex flex-col gap-2 pt-2">
    {[
      { name: "Red", hex: "#ff0000" },
      { name: "Blue", hex: "#0000ff" },
      { name: "Green", hex: "#008000" },
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#ffffff" },
      { name: "Yellow", hex: "#ffff00" },
      { name: "Orange", hex: "#ffa500" },
      { name: "Purple", hex: "#800080" },
      { name: "Brown", hex: "#a52a2a" },
      { name: "Pink", hex: "#ffc0cb" },
      { name: "Gray", hex: "#808080" },
    ].map(({ name, hex }) => (
      <label className="flex items-center gap-2" key={name}>
        <input
          type="checkbox"
          value={name}
          onChange={handleColorChange}
          
        />
        <span
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: hex }}
        ></span>
        <span className="text-sm text-gray-700">{name}</span>
      </label>
    ))}
  </div>
</div>


        {/* First Owner Filter */}
        <div className="w-full pb-4">
          <label className="text-sm text-primary font-bold">First Owner</label>
          <div className="w-full flex flex-col gap-2 pt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="firstOwner"
                value="yes"
                onChange={handleFirstOwnerChange}
              />
              <span className="text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="firstOwner"
                value="no"
                onChange={handleFirstOwnerChange}
              />
              <span className="text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Search Button */}
        <div className="text-center mt-auto">
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
     

       {/* Main Content Area */}
       <div className="w-[80%] h-auto bg-gray-100">
        <div className="flex justify-center">
          <div className="w-full h-20 p-10 flex items-center justify-around">
            <div className="flex items-center">
              <img
                className="w-20 h-16"
                src="https://carvago.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner_collapsed.3906a7e2.webp&w=96&q=75"
                alt=""
              />
              <h3 className="text-[#1F2B59] text-xl font-bold">
                How to buy a car online
              </h3>
            </div>
            <button className="border-2 w-40 h-10 rounded-xl text-[#3E47DD] text-sm font-bold border-[#3E47DD] shadow-xl hover:bg-primary hover:text-white ease-in-out duration-100">
              Find out more
            </button>
          </div>
        </div>
        <div className="text-xl text-primary font-bold flex flex-col items-center pt-6 pb-4">
          <h1>Cars for sale</h1>
        </div>

        {/*Car Listing*/}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {cars.map((car) => (
              <CarSeller key={car._id} car={car} />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-300 text-black py-2 px-4 rounded-l"
            onClick={handlePrevPage}
            disabled={currentPage === 1} 
          >
            Previous
          </button>
          <button
            className="bg-gray-300 text-black py-2 px-4 rounded-r"
            onClick={handleNextPage}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </div>
      </div>
      {
        openSearchBar && <div className="absolute w-[50%] h-full bg-white shadow-lg p-8 md:flex flex-col z-50">
        <h2 className="text-primary text-xl md:text-3xl font-extrabold text-center pb-6 flex items-center justify-between">
          Search Area
          <GiHamburgerMenu className="text-4xl" onClick={()=>setOpenSearchBar(!openSearchBar)} />
        </h2>

        {/* Price Filter */}
        <div className="w-full flex flex-col gap-4 pb-4">
          <label className="text-sm text-primary font-bold">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              className="w-[50%] border-2 border-solid border-primary outline-none rounded px-2 py-1"
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              className="w-[50%] border-2 border-solid border-primary outline-none rounded px-2 py-1"
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div className="w-full pb-4">
          <label className="text-sm text-primary font-bold">Brand</label>
          <input
            className="w-full border-2 border-solid border-primary outline-none rounded px-2 py-1 mt-1"
            type="text"
            placeholder="Enter brand name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>

        {/* Transmission Filter */}
        <div className="w-full pb-4">
          <label className="text-sm text-primary font-bold">Transmission</label>
          <div className="w-full flex flex-col gap-2 pt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="Manual"
                onChange={handleTransmissionChange}
              />
              <span className="text-sm text-gray-700">Manual</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="Automatic"
                onChange={handleTransmissionChange}
              />
              <span className="text-sm text-gray-700">Automatic</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="transmission"
                value="Hybrid"
                onChange={handleTransmissionChange}
              />
              <span className="text-sm text-gray-700">Hybrid</span>
            </label>
          </div>
        </div>

        {/* Km Filter */}
        <div className="w-full flex flex-col gap-4 pb-4">
          <label className="text-sm text-primary font-bold">Km Range</label>
          <div className="flex items-center gap-2">
            <input
              className="w-[50%] border-2 border-solid border-primary outline-none rounded px-2 py-1"
              type="number"
              placeholder="Min km"
              value={minKm}
              onChange={(e) => setMinKm(e.target.value)}
            />
            <input
              className="w-[50%] border-2 border-solid border-primary outline-none rounded px-2 py-1"
              type="number"
              placeholder="Max km"
              value={maxKm}
              onChange={(e) => setMaxKm(e.target.value)}
            />
          </div>
        </div>

      {/* Color Filter */}
<div className="w-full pb-4">
  <label className="text-sm text-primary font-bold">Colors</label>
  <div className="w-full flex flex-col gap-2 pt-2">
    {[
      { name: "Red", hex: "#ff0000" },
      { name: "Blue", hex: "#0000ff" },
      { name: "Green", hex: "#008000" },
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#ffffff" },
      { name: "Yellow", hex: "#ffff00" },
      { name: "Orange", hex: "#ffa500" },
      { name: "Purple", hex: "#800080" },
      { name: "Brown", hex: "#a52a2a" },
      { name: "Pink", hex: "#ffc0cb" },
      { name: "Gray", hex: "#808080" },
    ].map(({ name, hex }) => (
      <label className="flex items-center gap-2" key={name}>
        <input
          type="checkbox"
          value={name}
          onChange={handleColorChange}
          
        />
        <span
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: hex }}
        ></span>
        <span className="text-sm text-gray-700">{name}</span>
      </label>
    ))}
  </div>
</div>


        {/* First Owner Filter */}
        <div className="w-full pb-4">
          <label className="text-sm text-primary font-bold">First Owner</label>
          <div className="w-full flex flex-col gap-2 pt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="firstOwner"
                value="yes"
                onChange={handleFirstOwnerChange}
              />
              <span className="text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="firstOwner"
                value="no"
                onChange={handleFirstOwnerChange}
              />
              <span className="text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Search Button */}
        <div className="text-center mt-auto">
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      }
    </div>
  );
};

export default Buy;
