import { useState, useEffect } from "react";

const Header = () => {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen((prev) => !prev);
};
  // Estado para controlar si la imagen está visible
  const [isVisible, setIsVisible] = useState(true);

  // Estado para manejar el scroll del header
  const [isScrolled, setIsScrolled] = useState(false);

  // Función para manejar el clic en el botón
  const handleClick = () => {
    setIsVisible(false); // Cambia el estado a "false" para ocultar la imagen
  };

  // Detecta el scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
    className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? "bg-white bg-opacity-90" : "bg-transparent"
    }`}
  >
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-8">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="transition-all duration-500 ease-in-out transform hover:scale-105">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/earth.png" className="h-8" alt="Flowly Logo" />
            <span className="text-3xl font-bold sm:text-xl text-purple-500">
              Flowly
            </span>
          </a>
        </div>
  
        {/* Botón hamburguesa */}
        <div className="md:hidden absolute right-4 top-4">
  <button
    onClick={toggleMenu}
    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-sticky"
    aria-expanded="false"
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h18m-6-6h6m-6 12h6"
      />
    </svg>
  </button>
</div>

  
        {/* Botón derecho */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <button className="hidden md:block gradient-constant gradient-animated text-white font-bold py-2 px-4 rounded">
    Login
  </button>
</div>

  
        {/* Menú desplegable */}
        <div
  className={`${
    isMenuOpen ? "block" : "hidden"
  } w-full md:flex md:w-auto md:order-1`}
  id="navbar-sticky"
>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                LiveStreams
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
  </header>
  
  );
};





export default Header;
