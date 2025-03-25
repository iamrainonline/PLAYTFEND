import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Pages
import Mainpage from "./pages/Mainpage";
import Runs from "./pages/Runs";
import Projects from "./pages/Projects";

const Layout = ({ isOpen, setIsOpen }) => (
  <>
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    <div
      className={`transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}
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
          path: "/runs",
          element: <Runs />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
  ]);

const App = () => {
  const [isOpen, setIsOpen] = useState(true); // State moved here

  return <RouterProvider router={router(isOpen, setIsOpen)} />;
};

export default App;
