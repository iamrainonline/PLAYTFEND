import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  PawPrint,
  ArrowRightFromLine,
  ArrowLeftFromLine,
  Heart,
  Star,
  Package,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

import Cat from "../../assets/images/cat.jpg";
import Dog from "../../assets/images/dog.jpg";
import Fish from "../../assets/images/fish.jpg";
import Bird from "../../assets/images/bird.jpg";

const PetShopNavbar = ({ isOpen, setIsOpen }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    // Create a staggered animation effect for menu items
    const timeout = setTimeout(() => {
      const items = [];
      petTabs.forEach((_, index) => {
        setTimeout(() => {
          items.push(index);
          setAnimatedItems([...items]);
        }, index * 150);
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  // Calculate sidebar width based on state
  const sidebarWidth = isOpen ? "w-[500px]" : "w-20";

  // Tab definitions with Romanian text and additional info
  const petTabs = [
    {
      name: "Pisici",
      image: Cat,
      path: "/cats",
      icon: PawPrint,
      color: "#FF6B6B",
      products: 128,
      badge: "Popular",
    },
    {
      name: "Câini",
      image: Dog,
      path: "/dogs",
      icon: PawPrint,
      color: "#4ECDC4",
      products: 156,
      badge: "Trending",
    },
    {
      name: "Pești",
      image: Fish,
      path: "/fish",
      icon: PawPrint,
      color: "#45B7D1",
      products: 94,
    },
    {
      name: "Păsări",
      image: Bird,
      path: "/birds",
      icon: PawPrint,
      color: "#F9C80E",
      products: 86,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-white h-full transition-all duration-500 ${sidebarWidth} flex flex-col p-6 fixed left-0 top-0 bottom-0 shadow-xl z-10 overflow-hidden`}
      >
        {/* Logo */}
        <div
          className="text-2xl font-semibold flex items-center justify-between cursor-pointer mb-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`${isOpen ? "block" : "hidden"} text-gray-800`}>
            <span className="text-[#F4A261] font-bold">
              <PawPrint className="inline" /> Paw
            </span>
            <span className="font-light">Paradise</span>
          </span>
          <span
            className={`ml-3 text-gray-600 cursor-pointer ${
              isOpen ? "" : "mx-auto"
            } hover:bg-gray-100 p-2 rounded-full transition-colors`}
          >
            {isOpen ? (
              <ArrowLeftFromLine size={22} />
            ) : (
              <ArrowRightFromLine size={22} />
            )}
          </span>
        </div>

        {/* Only show the full menu when sidebar is open */}
        {isOpen && (
          <div className="flex flex-col space-y-6 mt-2 pb-4 overflow-y-auto">
            <h3 className="text-gray-400 uppercase text-xs font-semibold tracking-wider px-2 mb-2">
              Categorii Animale
            </h3>

            {petTabs.map((pet, index) => (
              <Link
                key={index}
                to={pet.path}
                className={`relative overflow-hidden rounded-2xl mb-2 group cursor-pointer transform transition-all hover:shadow-2xl ${
                  animatedItems.includes(index) ? "animate-fadeIn" : "opacity-0"
                }`}
                onMouseEnter={() => setActiveTab(index)}
                onMouseLeave={() => setActiveTab(null)}
              >
                <div className="flex flex-row w-full">
                  {/* Image container */}
                  <div className="relative w-3/5 h-44 overflow-hidden">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay for image */}
                    <div
                      className="absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-20"
                      style={{
                        background: `linear-gradient(135deg, ${pet.color}80 0%, transparent 50%, rgba(0,0,0,0.4) 100%)`,
                      }}
                    ></div>

                    {/* Animated indicator dots */}
                    <div className="absolute bottom-3 left-3 flex space-x-1">
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                          activeTab === index ? "bg-white" : "bg-white/50"
                        }`}
                      ></div>
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 delay-100 ${
                          activeTab === index ? "bg-white" : "bg-white/50"
                        }`}
                      ></div>
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 delay-200 ${
                          activeTab === index ? "bg-white" : "bg-white/50"
                        }`}
                      ></div>
                    </div>

                    {/* Badge if available */}
                    {pet.badge && (
                      <div className="absolute top-3 right-3 bg-white/90 text-xs font-semibold px-2 py-1 rounded-full text-gray-800 backdrop-blur-sm">
                        {pet.badge}
                      </div>
                    )}
                  </div>

                  {/* Text container with styling */}
                  <div
                    className="w-2/5 p-4 flex flex-col justify-between relative overflow-hidden"
                    style={{
                      backgroundColor: "rgb(24, 24, 27)",
                      backgroundImage: `radial-gradient(circle at 100% 100%, #000000 0%, rgba(0,0,0,0) 40%)`,
                    }}
                  >
                    {/* Styled accent for category */}
                    <div
                      className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 rounded-full opacity-30"
                      style={{ backgroundColor: pet.color }}
                    ></div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Pentru {pet.name}
                      </h3>
                      <div
                        className="w-12 h-0.5 rounded-full my-2 transition-all duration-300 group-hover:w-16"
                        style={{ backgroundColor: pet.color }}
                      ></div>
                      <p className="text-xs text-gray-400 mt-1">
                        {pet.products} produse disponibile
                      </p>
                    </div>

                    <div className="mt-auto flex items-center text-sm text-gray-400">
                      <span className="group-hover:text-white transition-colors duration-300">
                        Descoperă
                      </span>
                      <div
                        className="ml-2 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:ml-3"
                        style={{ backgroundColor: pet.color }}
                      >
                        <ArrowRightFromLine size={12} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Collapsed menu with just icons */}
        {!isOpen && (
          <div className="flex flex-col space-y-8 items-center mt-10">
            {petTabs.map((pet, index) => (
              <Link key={index} to={pet.path} className="group relative">
                <div
                  className="w-12 h-12 overflow-hidden rounded-xl flex items-center justify-center transition-all duration-300 border-2 group-hover:rounded-3xl group-hover:shadow-lg"
                  style={{
                    borderColor: pet.color,
                    background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{
                      backgroundImage: `url(${pet.image})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <pet.icon size={20} style={{ color: pet.color }} />
                </div>

                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                  {pet.name}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom navigation in collapsed state */}
        {!isOpen && (
          <div className="mt-auto mb-4 flex flex-col items-center space-y-6">
            <Link to="/favorites" className="group relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Heart size={18} className="text-gray-500" />
              </div>
              <div className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                Favorite
              </div>
            </Link>
            <Link to="/cart" className="group relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ShoppingCart size={18} className="text-gray-500" />
                <span className="absolute -top-1 -right-1 bg-[#F4A261] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  3
                </span>
              </div>
              <div className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                Coș cumpărături
              </div>
            </Link>
          </div>
        )}
      </div>

      <div
        className={`flex-1 ${
          isOpen ? "ml-[500px]" : "ml-20"
        } transition-all duration-500`}
      >
        <div
          className={`h-16 bg-white shadow-md flex items-center justify-between px-6 fixed top-0 ${
            isOpen ? "left-[500px]" : "left-20"
          } right-0 transition-all duration-500 z-0`}
        >
          <div className="relative">
            <Search className="absolute left-3 top-2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Caută animale, jucării, mâncare..."
              className="pl-10 pr-4 py-2 border rounded-xl w-72 focus:outline-none focus:ring-2 focus:ring-[#F4A261] transition-all"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/promotions"
                className="flex items-center text-gray-600 hover:text-[#F4A261] transition-colors"
              >
                <Star size={18} className="mr-1" />
                <span className="text-sm">Promoții</span>
              </Link>
              <Link
                to="/products"
                className="flex items-center text-gray-600 hover:text-[#F4A261] transition-colors"
              >
                <Package size={18} className="mr-1" />
                <span className="text-sm">Produse</span>
              </Link>
              <Link
                to="/loyalty"
                className="flex items-center text-gray-600 hover:text-[#F4A261] transition-colors"
              >
                <Award size={18} className="mr-1" />
                <span className="text-sm">Loialitate</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/favorites">
                <Heart
                  size={20}
                  className="text-gray-600 hover:text-[#F4A261] transition-colors"
                />
              </Link>
              <div className="relative">
                <Link to="/cart" className="block">
                  <ShoppingCart
                    size={22}
                    className="text-gray-600 hover:text-[#F4A261] transition-colors"
                  />
                  <span className="absolute -top-2 -right-2 bg-[#F4A261] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    3
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-3 ml-2">
                <span className="text-gray-700 font-medium text-sm">
                  Pet Lover
                </span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#F4A261] to-[#E76F51] flex items-center justify-center text-white shadow-md">
                  <PawPrint size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetShopNavbar;
