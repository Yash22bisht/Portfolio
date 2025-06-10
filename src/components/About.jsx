import profile from "../assets/profile.png";
export const About = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-start bg-[#1B0032] relative overflow-hidden">
      {/* Glowing floating blobs */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-pink-500 rounded-full blur-xl opacity-70 animate-pulse" />
      <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse" />
      <div className="absolute bottom-10 left-1/2 w-4 h-4 bg-pink-300 rounded-full blur-md opacity-40 animate-pulse" />

      {/* Main Frame */}
      <div
        className="w-64 h-64 flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(circle at top, #ff9966, #ff5e62)",
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
          boxShadow: "0 0 25px rgba(255, 105, 180, 0.6)",
        }}
      >
        <img
          src={profile}
          alt="Your Photo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    </div>
  )
}
