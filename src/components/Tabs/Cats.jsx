import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  Heart,
  ShoppingCart,
  Star,
  X,
  PawPrint,
  Package,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// Sample cat background image - replace with your actual image path
import CatBgImage from "../../assets/images/CatBgImage.jpg";
// Sample product images - replace with your actual image paths
import CatFood1 from "../../assets/images/CatFood1.jpg";
import CatFood2 from "../../assets/images/CatFood2.jpg";
import CatToy1 from "../../assets/images/CatToy1.jpg";
import CatToy2 from "../../assets/images/CatToy2.jpg";
import CatBed1 from "../../assets/images/CatBed1.jpg";
import CatBed2 from "../../assets/images/CatBed2.jpg";

const Cats = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeFilters, setActiveFilters] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [animateProducts, setAnimateProducts] = useState([]);

  useEffect(() => {
    // Staggered animation for products
    const timeoutId = setTimeout(() => {
      const items = [];
      for (let i = 0; i < visibleProducts; i++) {
        setTimeout(() => {
          items.push(i);
          setAnimateProducts([...items]);
        }, i * 100);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [visibleProducts, selectedCategory]);

  // Filter categories
  const categories = [
    { id: "all", name: "Toate Produsele" },
    { id: "food", name: "Mâncare", icon: Package },
    { id: "toys", name: "Jucării", icon: PawPrint },
    { id: "beds", name: "Paturi și Perne", icon: PawPrint },
    { id: "accessories", name: "Accesorii", icon: PawPrint },
  ];

  // Filter options
  const filterOptions = [
    {
      name: "Branduri",
      options: ["Royal Canin", "Whiskas", "Purina", "Hill's", "Brit"],
    },
    {
      name: "Preț",
      options: ["Sub 50 Lei", "50-100 Lei", "100-200 Lei", "Peste 200 Lei"],
    },
    {
      name: "Rating",
      options: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐"],
    },
  ];

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Royal Canin Indoor",
      category: "food",
      image: CatFood1,
      price: 129.99,
      oldPrice: 149.99,
      rating: 4.8,
      reviews: 124,
      new: true,
      description: "Mâncare premium pentru pisici care stau în casă",
    },
    {
      id: 2,
      name: "Jucărie Interactivă Fluture",
      category: "toys",
      image: CatToy1,
      price: 45.99,
      rating: 4.5,
      reviews: 56,
      description: "Jucărie interactivă pentru stimularea pisicii tale",
    },
    {
      id: 3,
      name: "Pat Premium Moale",
      category: "beds",
      image: CatBed1,
      price: 179.99,
      oldPrice: 210.99,
      rating: 4.9,
      reviews: 83,
      description: "Pat ultra-moale pentru odihna perfectă a pisicii",
    },
    {
      id: 4,
      name: "Purina Pro Plan Adult",
      category: "food",
      image: CatFood2,
      price: 89.99,
      rating: 4.6,
      reviews: 92,
      description: "Hrană uscată bogată în nutrienți esențiali",
    },
    {
      id: 5,
      name: "Șoricel Electronic",
      category: "toys",
      image: CatToy2,
      price: 59.99,
      rating: 4.3,
      reviews: 47,
      description: "Jucărie electronică ce simulează mișcările unui șoricel",
    },
    {
      id: 6,
      name: "Iglu Confortabil",
      category: "beds",
      image: CatBed2,
      price: 145.99,
      oldPrice: 169.99,
      rating: 4.7,
      reviews: 72,
      new: true,
      description: "Iglu călduroas pentru pisici care adoră intimitatea",
    },
    // More products could be added here
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Toggle filter
  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Load more products
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 3, filteredProducts.length));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header with Cat Background */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CatBgImage}
            alt="Pisici"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="flex items-center text-gray-300 text-sm mb-2">
            <span>Acasă</span>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-white">Pisici</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Produse pentru Pisici
          </h1>
          <p className="text-gray-200 max-w-lg">
            Descoperă selecția noastră premium de hrană, jucării și accesorii
            pentru prietenul tău felin.
          </p>

          {/* Stats badges */}
          <div className="flex mt-4 space-x-4">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
              <PawPrint size={18} className="text-[#FF6B6B] mr-2" />
              <span className="text-white text-sm">Peste 200 produse</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
              <Star size={18} className="text-[#F9C80E] mr-2" />
              <span className="text-white text-sm">Top calitate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center ${
                selectedCategory === category.id
                  ? "bg-[#FF6B6B] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.icon && <category.icon size={16} className="mr-2" />}
              {category.name}
            </button>
          ))}
        </div>

        {/* Filters and Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 bg-white rounded-2xl shadow-md p-5 h-fit">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800 flex items-center">
                <Filter size={18} className="mr-2" />
                Filtre
              </h3>
              {activeFilters.length > 0 && (
                <button
                  className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
                  onClick={() => setActiveFilters([])}
                >
                  Resetează
                </button>
              )}
            </div>

            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Filtre active:</p>
                <div className="flex flex-wrap gap-2">
                  {activeFilters.map((filter) => (
                    <div
                      key={filter}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center"
                    >
                      {filter}
                      <button
                        className="ml-1 hover:text-red-500"
                        onClick={() => toggleFilter(filter)}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Filter sections */}
            <div className="space-y-4">
              {filterOptions.map((filterGroup) => (
                <div
                  key={filterGroup.name}
                  className="border-b border-gray-100 pb-4"
                >
                  <h4 className="font-medium text-gray-700 mb-2">
                    {filterGroup.name}
                  </h4>
                  <div className="space-y-2">
                    {filterGroup.options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-gray-900"
                      >
                        <input
                          type="checkbox"
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-[#FF6B6B] focus:ring-[#FF6B6B]"
                          checked={activeFilters.includes(option)}
                          onChange={() => toggleFilter(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Special promo card */}
            <div className="mt-6 bg-gradient-to-br from-[#FF6B6B] to-[#FF9671] rounded-xl p-4 text-white">
              <h4 className="font-semibold mb-2">Promo Pisici</h4>
              <p className="text-xs text-white/90 mb-3">
                Obține 15% reducere la toată mâncarea pentru pisici până la
                sfârșitul lunii!
              </p>
              <button className="text-xs bg-white text-[#FF6B6B] px-3 py-1 rounded-full font-medium flex items-center">
                Aplică cuponu
                <ArrowRight size={12} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl shadow-sm p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <PawPrint size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-1">
                  Nu am găsit produse
                </h3>
                <p className="text-gray-500 text-sm text-center max-w-md">
                  Ne pare rău, nu sunt produse care să corespundă filtrelor
                  selectate. Încercați să resetați filtrele.
                </p>
                <button
                  className="mt-4 bg-[#FF6B6B] text-white px-4 py-2 rounded-lg hover:bg-[#ff5252] transition-colors"
                  onClick={() => setActiveFilters([])}
                >
                  Resetează filtrele
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts
                    .slice(0, visibleProducts)
                    .map((product, index) => (
                      <div
                        key={product.id}
                        className={`bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform ${
                          animateProducts.includes(index)
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                      >
                        {/* Product image with actions */}
                        <div className="relative h-56 overflow-hidden group">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />

                          {/* Overlay with quick actions */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-end">
                            <div className="flex space-x-2 p-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                              <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100">
                                <Heart size={16} className="text-gray-700" />
                              </button>
                              <button className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center hover:bg-[#ff5252]">
                                <ShoppingCart
                                  size={16}
                                  className="text-white"
                                />
                              </button>
                            </div>
                          </div>

                          {/* Tags (new, discount) */}
                          <div className="absolute top-3 left-3 flex gap-2">
                            {product.new && (
                              <span className="bg-[#45B7D1] text-white text-xs px-2 py-1 rounded">
                                Nou
                              </span>
                            )}
                            {product.oldPrice && (
                              <span className="bg-[#FF6B6B] text-white text-xs px-2 py-1 rounded">
                                -
                                {Math.round(
                                  (1 - product.price / product.oldPrice) * 100
                                )}
                                %
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Product details */}
                        <div className="p-4">
                          <h3 className="font-medium text-gray-800 mb-1">
                            {product.name}
                          </h3>

                          <p className="text-gray-500 text-sm mb-2">
                            {product.description}
                          </p>

                          {/* Ratings */}
                          <div className="flex items-center mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={
                                    i < Math.floor(product.rating)
                                      ? "text-[#F9C80E] fill-[#F9C80E]"
                                      : "text-gray-300"
                                  }
                                  strokeWidth={0}
                                />
                              ))}
                            </div>
                            <span className="text-gray-500 text-xs ml-1">
                              ({product.reviews})
                            </span>
                          </div>

                          {/* Price */}
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-lg font-bold text-gray-800">
                                {product.price.toFixed(2)} Lei
                              </span>
                              {product.oldPrice && (
                                <span className="text-sm text-gray-400 line-through ml-2">
                                  {product.oldPrice.toFixed(2)} Lei
                                </span>
                              )}
                            </div>
                            <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition-colors">
                              Detalii
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Load more button */}
                {visibleProducts < filteredProducts.length && (
                  <div className="flex justify-center mt-8">
                    <button
                      className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all flex items-center"
                      onClick={loadMoreProducts}
                    >
                      Încarcă mai multe produse
                      <ChevronDown size={18} className="ml-2" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="bg-white mt-16 py-12">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#141124] to-[#2a1a3a] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Vrei oferte speciale pentru pisica ta?
              </h3>
              <p className="text-gray-300 max-w-md">
                Înscrie-te la newsletter și primește reduceri exclusive și
                sfaturi pentru îngrijirea pisicii tale.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Adresa ta de email"
                  className="px-4 py-3 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                />
                <button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                  Abonează-te
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cats;
