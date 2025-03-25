import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Bubble } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Scatter } from "react-chartjs-2";

import CustomCard from "../components/customComponents/CustomCard";

const Mainpage = () => {
  const data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Revenue",
        data: [200, 300, 400],
        backgroundColor: "rgba(74, 0, 172, 0.66)",
      },
      {
        label: "Test",
        data: [200, 300, 400],
        backgroundColor: "rgba(22, 31, 111, 0.26)",
      },
    ],
  };

  const bubbleData = {
    datasets: [
      {
        label: "Bubble Dataset",
        data: [
          { x: 1, y: 1, r: 10 },
          { x: 2, y: 2, r: 15 },
          { x: 3, y: 3, r: 20 },
        ],
        backgroundColor: "rgba(72, 2, 236, 0.6)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Cyan", "Blue", "Yellow"],
    datasets: [
      {
        label: "Colors",
        data: [300, 50, 100],
        backgroundColor: ["#9167F4", "blue", "#FCC526"],
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "#4bc0c0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 30 },
          { x: 25, y: 40 },
          { x: 35, y: 50 },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="transition-all duration-300 p-4 md:p-6">
      <div className="pt-20 mb-5">
        {/* Page content goes here */}
        <div className="bg-[#141124] p-4 rounded-lg">
          <h1 className="text-2xl text-blue-500 font-bold">Homepage</h1>
          <p className="mt-2 text-white">
            Welcome to your dashboard. Your content will appear here.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {/* Bar Chart */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg mb-5 md:mb-0">
          <Bar
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </div>

        {/* Bubble Chart */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg mb-5 md:mb-0">
          <Bubble
            data={bubbleData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </div>

        {/* Doughnut Chart */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg mb-5 md:mb-0">
          <Doughnut
            data={doughnutData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 2,
            }}
          />
        </div>
      </div>

      {/* Additional Charts */}
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        {/* Line Chart */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg mb-5 md:mb-0">
          <Line
            data={lineData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </div>

        {/* Scatter Chart */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg">
          <Scatter
            data={scatterData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white shadow-lg border border-gray-300 border-opacity-20 rounded-lg mb-5 md:mb-0">
          <Doughnut
            data={doughnutData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 2,
            }}
          />
        </div>
      </div>
      <CustomCard />
    </div>
  );
};

export default Mainpage;
