import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import './Cloths.css'
import one from '../../assets/Images/md1.jpeg'
import two from '../../assets/Images/md2.jpeg'

function Cloths() {
  const sectionRef = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="w-full  py-24 px-6 md:px-20 overflow-hidden clothpad"
    >

      <div className={`flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>

        {/* TEXT SIDE */}
        <div className="flex-1 max-w-xl gap-2">
          <p className="text-lg tracking-[5px] text-[#d62828] mb-4 uppercase">
            New Release
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-[#141414] leading-tight">
            Crafted For Presence
          </h2>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            These pieces are built with structure, intention and luxury.  
            Fashion that speaks without trying too hard.
          </p>

          <div className=" text-xl tracking-widest hover:text-white transition-all duration-300 flex gap-3 justify-start clothpadt">
            <Link
          to="/Men"
          className="text-xl tracking-[2px] font-medium text-[#141414] hover:text-[#d62828] transition"
        >
          WOMEN
        </Link>
        <Link
          to="/Men"
          className="text-xl tracking-[2px] font-medium text-[#141414] hover:text-[#d62828] transition "
        >
          MEN
        </Link>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex-1 relative flex justify-center items-center">

          {/* Main Image Reveal */}
          <div className={`transition-all duration-[1400ms] ease-out delay-200   flex flex-col md:flex-row gap-2 
            ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <img 
              src={one} 
              alt="Main Look" 
              className="w-[320px] max-w-[400px] h-[400px] object-contain shadow-2xl"
            />


            <img 
              src={two} 
              alt="Main Look" 
              className="w-[320px] max-w-[400px] h-[400px] object-contain shadow-2xl"
            />
          </div>

          {/* Floating Image Reveal */}
          {/* <div className={`absolute bottom-[-40px] right-[-5px] hidden md:block
            transition-all duration-[1400ms] delay-500
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <img 
              src={two} 
              alt="Detail Look" 
              className="w-[200px] h-[400px] object-cover border border-white shadow-xl"
            />
          </div> */}

        </div>

      </div>
    </section>
  )
}

export default Cloths
