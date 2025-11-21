import React, { useEffect, useCallback } from 'react'

import three from '../../assets/Images/md_gru.jpeg'
import one from '../../assets/Images/md1.jpeg'
import two from '../../assets/Images/md2.jpeg'

import useEmblaCarousel from 'embla-carousel-react'
import './Carousel.css'

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="w-full bg-[#fdfaf5] py-16">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h2
          className="text-2xl md:text-4xl tracking-[4px]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          FEATURED COLLECTION
        </h2>
        <p className="text-sm text-gray-500 mt-2 tracking-wide">
          Carefully selected with love
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="embla relative w-full mx-auto px-4">
        
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container w-full">

            {/* SLIDE 1 */}
            <div className="embla__slide">
              <div className="relative overflow-hidden rounded-xl shadow-lg group">

                <img 
                  src={one} 
                  alt="look one" 
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

                
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

               <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src={two} 
                  alt="look two" 
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

            </div>

            {/* SLIDE 2 */}
            <div className="embla__slide">
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src={two} 
                  alt="look two" 
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

            {/* SLIDE 3 */}
            <div className="embla__slide">
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img 
                  src={three} 
                  alt="look three" 
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

          </div>
        </div>

        {/* ARROWS */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-4 pointer-events-none">
          
          <button
            onClick={scrollPrev}
            className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-lg font-bold hover:bg-[#d62828] hover:text-white transition"
          >
            ❮
          </button>

          <button
            onClick={scrollNext}
            className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-lg font-bold hover:bg-[#d62828] hover:text-white transition"
          >
            ❯
          </button>

        </div>

      </div>
    </div>
  )
}

export default Carousel
