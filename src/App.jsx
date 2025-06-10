import { Navbar } from "./components/navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";

function App() {
  return (
    <div className="mx-auto">
      <div className="relative h-full w-full pt-4 pl-24 bg-[#14001B]">
        <div class="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 
              w-[600px] h-[600px] rounded-full 
              bg-[#85148A] opacity-50 blur-[150px] z-0">
        </div>
        <Navbar className="mb-2"/>
        <Hero className="ml-4"/>   
        <About className="ml-4 mt-4"/>
      </div>
    </div>
  )
}

export default App;