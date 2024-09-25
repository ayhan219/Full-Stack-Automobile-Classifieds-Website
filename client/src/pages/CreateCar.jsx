import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const CreateCar = () => {
  const { currentUser } = useContext(UserContext);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [hp, setHp] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [color, setColor] = useState("");
  const [firstOwner, setFirstOwner] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };
  const handleFirstOwnerChange = (e) => {
    setFirstOwner(e.target.value === true ? "true" : "false");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", currentUser.id);
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("fuel", fuel);
    formData.append("km", km);
    formData.append("hp", hp);
    formData.append("color", color);
    formData.append("transmission", transmission);
    formData.append("firstOwner", firstOwner);
    formData.append("price", price);
    formData.append("description", description);

    if (images.length > 0) {
      images.forEach((image) => {
        formData.append("image", image);
      });
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/car",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/buy");
      }
    } catch (error) {
      console.error("Error uploading car data:", error); // Hata mesajı
    }
  };

  return (
    <div className="w-full h-[140vh] flex justify-center bg-gray-100">
      <div className="w-[80%] h-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-primary text-center pt-4">
          Sell Your Car
        </h2>

        <form onSubmit={handleSubmit} className="mt-8">
          {/* Car Brand */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">
              Car Brand
            </label>
            <input
              onChange={(e) => setBrand(e.target.value)}
              className="h-10 outline-none border-2 border-gray-300 rounded px-2 focus:border-primary"
              type="text"
              placeholder="Enter your car brand"
              required
            />
          </div>

          {/* Car Model */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">
              Car Model
            </label>
            <input
              onChange={(e) => setModel(e.target.value)}
              className="h-10 outline-none border-2 border-gray-300 rounded px-2 focus:border-primary"
              type="text"
              placeholder="Enter your car model"
              required
            />
          </div>

          {/* Year */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">Year</label>
            <input
              onChange={(e) => setYear(e.target.value)}
              className="h-10 outline-none border-2 border-gray-300 rounded px-2 focus:border-primary"
              type="number"
              placeholder="Enter the year of manufacture"
              required
            />
          </div>

          {/* Mileage */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">
              Mileage (km)
            </label>
            <input
              onChange={(e) => setKm(e.target.value)}
              className="h-10 outline-none border-2 border-gray-300 rounded px-2 focus:border-primary"
              type="number"
              placeholder="Enter mileage in kilometers"
              required
            />
          </div>

          {/* HP */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">HP</label>
            <input
              onChange={(e) => setHp(e.target.value)}
              className="h-10 outline-none border-2 border-gray-300 rounded px-2 focus:border-primary"
              type="number"
              placeholder="Enter the horsepower"
              required
            />
          </div>
          {/* Car color */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">Color</label>
            <input
              onChange={(e) => setColor(e.target.value)}
              className="h-10 outline-none border-2 border-gray-300 rounded px-2 focus:border-primary"
              type="text"
              placeholder="Enter your car color"
              required
            />
          </div>

          {/* Transmission (Radio Buttons) */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">
              Transmission
            </label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="automatic"
                  name="transmission"
                  value="automatic"
                  className="mr-2"
                  onChange={(e) => setTransmission(e.target.value)}
                  checked={transmission === "automatic"}
                />
                <label htmlFor="automatic" className="text-lg">
                  Automatic
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="manual"
                  name="transmission"
                  value="manual"
                  className="mr-2"
                  onChange={(e) => setTransmission(e.target.value)}
                  checked={transmission === "manual"}
                />
                <label htmlFor="manual" className="text-lg">
                  Manual
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="hybrid"
                  name="transmission"
                  value="hybrid"
                  className="mr-2"
                  onChange={(e) => setTransmission(e.target.value)}
                  checked={transmission === "hybrid"}
                />
                <label htmlFor="hybrid" className="text-lg">
                  Hybrid
                </label>
              </div>
            </div>
          </div>

          {/* First Owner */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">
              First Owner
            </label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  onChange={handleFirstOwnerChange}
                  id=""
                />
                <label className="text-lg">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  value="no"
                  name={firstOwner}
                  onChange={handleFirstOwnerChange}
                  id=""
                />
                <label className="text-lg">No</label>
              </div>
            </div>
          </div>

          {/* Fuel */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">Fuel</label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="diesel"
                  name="fuel"
                  value="diesel"
                  checked={fuel === "diesel"}
                  onChange={(e) => setFuel(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="diesel" className="text-lg">
                  Diesel
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gasoline"
                  name="fuel"
                  value="gasoline"
                  checked={fuel === "gasoline"}
                  onChange={(e) => setFuel(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="gasoline" className="text-lg">
                  Gasoline
                </label>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">
              Price ($)
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="h-10 outline-none border-2 border-gray-300 rounded px-2 focus:border-primary"
              type="number"
              placeholder="Enter the selling price"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="outline-none border-2 border-gray-300 rounded px-2 focus:border-primary"
              placeholder="Enter a brief description"
              rows="4"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col mb-4">
            <label className="text-xl font-bold text-primary mb-2">
              Images
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="border-2 border-gray-300 rounded px-2 py-2"
              multiple
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white font-bold h-10 rounded hover:bg-primary-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCar;
