import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Pages
import Mainpage from "./pages/Mainpage";

// Tabs
import Cats from "./components/Tabs/Cats";
import Dogs from "./components/Tabs/Dogs";
import Fish from "./components/Tabs/Fish";
import Bird from "./components/Tabs/Bird";

const Layout = ({ isOpen, setIsOpen }) => (
  <>
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    <div
      className={`transition-all duration-300 ${
        isOpen ? "ml-[500px]" : "ml-20"
      }`}
    >
      <Outlet />
    </div>
    <Footer />
  </>
);

const router = (isOpen, setIsOpen) =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout isOpen={isOpen} setIsOpen={setIsOpen} />,
      children: [
        {
          path: "/",
          element: <Mainpage />,
        },
        {
          path: "/cats",
          element: <Cats />,
        },
        {
          path: "/dogs",
          element: <Dogs />,
        },
        {
          path: "/fish",
          element: <Fish />,
        },
        {
          path: "/birds",
          element: <Bird />,
        },
      ],
    },
  ]);

const App = () => {
  const [isOpen, setIsOpen] = useState(true); // State moved here

  return <RouterProvider router={router(isOpen, setIsOpen)} />;
};

export default App;
