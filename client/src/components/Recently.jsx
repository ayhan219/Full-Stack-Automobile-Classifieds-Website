import React, { useEffect, useState } from "react";
import Car from "./Car";
import axios from "axios"

const Recently = () => {
  const[recently,setRecently] = useState([]);

  const getRecentlyCar = async()=>{
    try {
      const response = await axios.get("http://localhost:5000/api/car/recently");
      setRecently(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getRecentlyCar();
  },[])
  return (
    <div className="w-full h-[70vh] flex justify-center">
      <div className="w-[70%] h-[80vh] ">
        <div className="">
          <h2 className="text-[#1F2B59] text-3xl font-extrabold p-5">
            Recently Cars 
          </h2>
        </div>
        <div className="w-full h-[90%]  flex flex-col md:flex-row gap-6 justify-center">
        {
          recently.map((item)=>(
            <Car item={item} key={item.id} />
          ))
        }
        
        </div>
      </div>
    </div>
  );
};

export default Recently;
