import './Hero.css'
import video1 from '../../assets/Images/WhatsApp Video 2025-10-23 at 20.32.53.mp4'
import video2 from '../../assets/Images/WhatsApp Video 2025-10-23 at 20.29.58.mp4'
import video3 from '../../assets/Images/WhatsApp Video 2025-10-23 at 20.33.44.mp4'

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden grid grid-cols-3 ">

      {/* VIDEO 1 */}
      <div className="relative overflow-hidden">
        <video 
          src={video1} 
          autoPlay 
          muted 
          loop 
          playsInline  
          className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
        />
      </div>

      {/* VIDEO 2 */}
      <div className="relative overflow-hidden">
        <video 
          src={video2} 
          autoPlay 
          muted 
          loop 
          playsInline  
          className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
        />
      </div>

      {/* VIDEO 3 */}
      <div className="relative overflow-hidden">
        <video 
          src={video3} 
          autoPlay 
          muted 
          loop 
          playsInline  
          className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 
          className="text-white text-3xl md:text-6xl tracking-[6px] mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          SOAR BY LOLA
        </h1>

        <p className="text-gray-200 text-sm md:text-lg tracking-widest max-w-md">
          Luxury. Simplicity. Confidence.
        </p>

        <button className="mt-8 px-6 py-2 border border-white text-white tracking-[3px] text-xs hover:bg-white hover:text-black transition">
          SHOP COLLECTION
        </button>
      </div>

    </div>
  )
}

export default Hero;
