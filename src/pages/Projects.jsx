import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

const Projects = () => {
  const data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Revenue",
        data: [200, 300, 400],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Test",
        data: [200, 300, 400],
        backgroundColor: "rgba(75, 87, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="transition-all duration-300 p-4 md:p-6">
      <div className="pt-20 mb-5">
        {/* Page content goes here */}
        <div className="bg-[#141124] p-4 rounded-lg">
          <h1 className="text-2xl text-blue-500 font-bold">Projects!</h1>
          <p className="mt-2 text-white">
            Welcome to your dashboard. Your content will appear here.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg mb-5 md:mb-0">
          <Doughnut
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg mb-5 md:mb-0">
          <Doughnut
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg">
          <Doughnut
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
