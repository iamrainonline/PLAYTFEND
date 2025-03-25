import React, { useState } from "react";
import {
  Search,
  LogOut,
  Home,
  Folder,
  Settings,
  Bell,
  HelpCircle,
  Play,
  ArrowRightFromLine,
  ArrowLeftFromLine,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen }) => {
  // Calculate sidebar width based on state
  const sidebarWidth = isOpen ? "w-64" : "w-20";

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-[#141124] text-white h-full transition-all duration-300 ${sidebarWidth} flex flex-col p-4 fixed left-0 top-0 bottom-0 shadow-lg z-10`}
      >
        {/* Logo */}
        <div
          className="text-xl font-semibold flex items-center justify-between cursor-pointer mb-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`${isOpen ? "block" : "hidden"}`}>
            <span className="text-[#0098ED]"> &lt;/&gt; Platy</span> Fend
          </span>
          <span className="ml-3 text-gray-400 cursor-pointer">
            {isOpen ? <ArrowLeftFromLine /> : <ArrowRightFromLine />}
          </span>
        </div>

        {/* General Menu */}
        {isOpen && (
          <p className="text-gray-500 text-lg mt-6 ml-4 mb-2">General Menu</p>
        )}

        <div className="space-y-2">
          {[
            { label: "Homepage", icon: Home, path: "/" },
            { label: "Runs", icon: Play, path: "/runs" },
            { label: "Projects", icon: Folder, path: "/projects" },
            { label: "Tenants", icon: Network, path: "/tenants" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center p-3 rounded-lg hover:bg-white/20 cursor-pointer"
            >
              <div className="min-w-6 flex justify-center">
                <item.icon size={24} />
              </div>
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        {isOpen && (
          <p className="text-gray-500 text-lg mt-6 ml-4 mb-2">Adjustments</p>
        )}
        <div className="space-y-2">
          {[
            { label: "Settings", icon: Settings, path: "/settings" },
            { label: "Notifications", icon: Bell, path: "/notifications" },
            { label: "Help & Support", icon: HelpCircle, path: "/help" },
            { label: "Log Out", icon: LogOut, path: "/logout" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center p-3 rounded-lg hover:bg-white/20 cursor-pointer"
            >
              <div className="min-w-6 flex justify-center">
                <item.icon size={24} />
              </div>
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`flex-1 ${
          isOpen ? "ml-64" : "ml-16"
        } transition-all duration-300`}
      >
        <div
          className={`h-16 bg-white shadow-md flex items-center justify-between px-6 fixed top-0 ${
            isOpen ? "left-64" : "left-16"
          } right-0 transition-all duration-300 z-0`}
        >
          <div className="relative">
            <Search className="absolute left-3 top-2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg w-60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Admin</span>
            <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
