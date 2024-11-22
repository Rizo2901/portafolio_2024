import React, { useState } from "react";

const ContentIndex = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [areCardsVisible, setAreCardsVisible] = useState(false);

  const handleImageClick = () => {
    setIsImageVisible(false);
    setTimeout(() => {
      setAreCardsVisible(true);
    }, 500); // Sincronizado con la animación
  };

  return (
    <div
    className="flex items-center justify-center min-w-full min-h-screen relative z-10"
  >
   {isImageVisible && (
  <div
    className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center cursor-pointer transition-transform transform scale-100 hover:scale-110"
    onClick={handleImageClick}
    style={{
      backgroundImage: "url('/top-section-bg.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h2 className="text-4xl font-bold text-white bg-opacity-50 p-4 rounded-lg">
      Bienvenido a Flowly
    </h2>
    <button
      className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg shadow-lg hover:scale-105 transition-transform relative overflow-hidden"
      style={{ animation: "shadowMove 3s infinite" }}
    >
      <span className="relative z-10">Ingresar</span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-lg" />
    </button>
  </div>
)}

  
    {areCardsVisible && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-screen">
        {[1, 2, 3, 4].map((card, index) => (
          <div
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-fadeIn"
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tecnología {card}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Aquí puedes explorar más sobre tecnología y tendencias.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Leer más
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default ContentIndex;
