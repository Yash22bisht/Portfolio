import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from "./components/navbar.jsx";

function App() {
  return (
    <div >
      <div className="relative h-screen w-screen pt-7 pl-24 bg-[#14001B]">
        <div class="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 
              w-[600px] h-[600px] rounded-full 
              bg-[#85148A] opacity-50 blur-[150px] z-0">
        </div>
        <Navbar />

        <div className="cont w-full h-full flex">
          <div className="leftCont w-1/2 h-full ">
            <h2 className='text-white'>welcome to my world</h2>
          </div>
          <div className="rightCont w-1/2 h-full ">

          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
