import React from "react";

const CustomCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  w-[100] mt-5">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-white text-white p-4 rounded-xl shadow-lg"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="p-3 bg-orange-600 rounded-md">
              <div className="p-2 bg-white rounded-md">
                <span className="text-md text-orange-600 ">&lt; &gt;</span>
              </div>
            </div>
            <button className="border shadow-md text-black px-4 py-1 rounded">
              Active
            </button>
          </div>
          <h2 className=" text-black text-xl py-2 mb-2">Game Engine Commit</h2>
          <div className="flex space-x-2 mb-3 w-full">
            <button className="bg-gray-600 p-2 rounded w-[50%]">Medium</button>
            <button className="bg-red-600 p-2 rounded w-[50%]">Error</button>
          </div>
          <ul className="text-sm text-gray-400 mb-4">
            <li>Last run: 32 days ago * 450 lines</li>
            <li>Created at: 2024-02-01</li>
            <li>Finished at: 2024-02-02</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded">
            Re-run this code
          </button>
        </div>
      ))}
    </div>
  );
};

export default CustomCard;
