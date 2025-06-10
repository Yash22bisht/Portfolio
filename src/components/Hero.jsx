import logo from "../assets/avatar2.png";
import insta from "../assets/instagram-logo.svg";
import linkedin from "../assets/linkedin-logo.svg";
import github from "../assets/github-logo.svg";
export const Hero = () => {
  return (
    <div className="cont w-full h-screen flex items-center justify-between bg-transparent mx-14 -mt-20">
          {/* Left Side - Text */}
          <div className="leftCont w-1/2 text-left space-y-4 p-35">
            <p className="uppercase text-sm tracking-widest text-white/80">
              Welcome to my world ✨
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Hi,<span className="text-purple-400 font-semibold"> I'm</span> Ritesh Kumar
            </h1>
            <h2 className="text-5xl sm:text-6xl font-bold">
              <span className="text-fuchsia-600">Full Stack</span> <span className="text-white">Developer</span>
            </h2>
            <p className="text-white/70 text-lg sm:text-lg max-w-md">
              Passionate full-stack developer, I craft secure, efficient, and scalable digital solutions.
              I transform ideas into responsive, user-focused applications with robust backend systems and seamless frontend experiences.
            </p>
            <div className="flex w-full justify-start space-x-4 rtl:space-x-reverse">
              <button type="button" className="border border-white text-xl font-bold text-white bg-[rgba(174,85,177,0.2)] 
                        hover:bg-white hover:text-black 
                        focus:ring-4 focus:outline-none focus:ring-[#AE55B1] 
                        rounded-full px-6 py-3 mt-4 transition-colors duration-200"
              onClick={() => window.open("https://github.com/Rite9717", "_blank")}
            >My Projects</button>

            <button type="button" className="border border-white text-xl font-bold text-white bg-[rgba(174,85,177,0.2)] 
                        hover:bg-white hover:text-black 
                        focus:ring-4 focus:outline-none focus:ring-[#AE55B1] 
                        rounded-full px-6 py-3 mt-4 transition-colors duration-200"
              onClick={() => window.open("https://github.com/Rite9717", "_blank")}
            >Download CV</button>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse mt-6">
              <a href="https://www.instagram.com/rite_261?igsh=bzdubzNhbW1rcGM2" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white bg-white text-black "
                aria-label="Facebook"
              >
                <img src={insta} alt="Instagram" className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/rite261" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white bg-white text-black"
                aria-label="Facebook"
              >
                <img src={linkedin} alt="Instagram" className="h-8 w-8" />
              </a>
              <a href="https://github.com/Rite9717" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white bg-white text-black"
                aria-label="Facebook"
              >
                <img src={github} alt="Instagram" className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div className="relative w-fit p-50">
            <div className="absolute inset-0 mr-4 rounded-full bg-white opacity-10 blur-2xl scale-110 z-0"></div>
            <img src={logo} alt="hero" className="relative z-10 w-100 h-auto rounded-full" />
          </div>

        </div>
  )
}