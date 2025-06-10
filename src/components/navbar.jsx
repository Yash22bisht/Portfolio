import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="font-mono bg-[rgba(174,85,177,0.2)] w-[92%] mx-auto rounded-[2rem]">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse justigy-start">
          <img src={logo} className="h-12" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
        </a>

        <div className="border-2 border-white rounded-full flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="border border-white text-xl font-bold text-white bg-[rgba(174,85,177,0.2)] hover:bg-[rgba(174,85,177,0.2)] focus:ring-4 focus:outline-none focus:ring-[#AE55B1] rounded-full px-4 py-2 text-center"
          >
            Contact
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="border border-white inline-flex items-center p-5 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          ></button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent border-white">
            <li>
              <a href="#" className="block py-2 px-3 text-2xl md:p-0 text-white rounded-sm">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-2xl md:p-0 text-white rounded-sm">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-2xl md:p-0 text-white rounded-sm">My Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-2xl md:p-0 text-white rounded-sm">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
