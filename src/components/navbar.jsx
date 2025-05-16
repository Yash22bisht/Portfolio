export const Navbar = () => {
    return (
    <nav className=" font-mono bg-white w-[90%] mx-auto rounded-4xl border-gray-200 dark:bg-gradient-to-l from-[#37173C] to-[#4C2251]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-xl font-bold text-white bg-[#B157B5] hover:bg-[#B157B5] focus:ring-4 focus:outline-none focus:ring-[#B157B5] font-bold rounded-4xl  px-4 py-2 text-center dark:bg-[#B157B5] dark:hover:bg-[#B157B5] dark:focus:ring-blue-800">Contact</button>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-5 w-[100px] h-5 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#36123E] dark:bg-gray-800 md:dark:bg-[#36123E] dark:border-gray-700">
                        <li>
                        </li>
                            <a href="#" className="block py-2 px-3 text-xl md:p-0 text-white rounded-sm md: md:text-blue-700 md:dark:text-white">Home</a>
                        <li>
                            <a href="#" className="block py-2 px-3 text-xl md:p-0 text-white rounded-sm md: md:text-blue-700 md:dark:text-white">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-xl md:p-0 text-white rounded-sm md: md:text-blue-700 md:dark:text-white">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}