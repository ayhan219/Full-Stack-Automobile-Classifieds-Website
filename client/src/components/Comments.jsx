import React from "react";

const Comments = () => {
  return (
    <div className="w-full h-[100vh] bg-white flex justify-center pt-40">
      <div className="w-[75%] h-[100%]">
        <div className="text-center mb-10">
          <h3 className="text-5xl text-[#1F2B59] font-extrabold">
            Those who buy cars from our site
          </h3>
        </div>

        {/* First comment section */}
        <div className="w-full h-auto p-10 flex justify-between items-center gap-10">
          <div className="w-[30%] flex justify-center">
            <img
              className="w-44 h-44 rounded-full object-cover"
              src="https://cdn.prod.website-files.com/6320c9d25c243e328157e175/6320c9d25c243e17dc57e8a6_Tim%20Photo%20square.jpg"
              alt="Customer 1"
            />
          </div>
          <div className="w-[70%] h-auto bg-primary rounded-xl p-8 flex flex-col text-center gap-5 justify-center">
            <h3 className="text-white text-xl font-extrabold">Comments</h3>
            <p className="text-white font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              eaque cupiditate vel, vitae exercitationem minus est enim
              provident laudantium voluptates!
            </p>
          </div>
        </div>

        {/* Second comment section */}
        <div className="w-full h-auto p-10 flex justify-between items-center gap-10">
          <div className="w-[70%] h-auto bg-primary rounded-xl p-8 flex flex-col text-center gap-5 justify-center">
            <h3 className="text-white text-xl font-extrabold">Comments</h3>
            <p className="text-white font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              eaque cupiditate vel, vitae exercitationem minus est enim
              provident laudantium voluptates!
            </p>
          </div>
          <div className="w-[30%] flex justify-center">
            <img
              className="w-44 h-44 rounded-full object-cover"
              src="https://schnek-fotografie.nl/assets/img/blog/selfie-900.jpg"
              alt="Customer 2"
            />
          </div>
        </div>

        {/* third one */}
        <div className="w-full h-auto p-10 flex justify-between items-center gap-10">
          <div className="w-[30%] flex justify-center">
            <img
              className="w-44 h-44 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9kCeWCD-4IDk0LCMkMmBhwE93Ud3MrTkBIAQCtowwqwYiXOrRpCM4Tiniq1G7ZoASEI&usqp=CAU"
              alt="Customer 1"
            />
          </div>
          <div className="w-[70%] h-auto bg-primary rounded-xl p-8 flex flex-col text-center gap-5 justify-center">
            <h3 className="text-white text-xl font-extrabold">Comments</h3>
            <p className="text-white font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              eaque cupiditate vel, vitae exercitationem minus est enim
              provident laudantium voluptates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
