import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Navbar} from "./components/navbar.jsx";

function App() {
  return (
    <div >
      <div className=" h-screen w-screen bg-[#14001B]">
        <Navbar/>
      </div>
    </div>
  )
}

export default App;
