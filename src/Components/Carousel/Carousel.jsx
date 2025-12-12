import React, { useEffect, useCallback } from 'react'

import one from '../../assets/Images/md1.jpeg'
import two from '../../assets/Images/md2.jpeg'

import useEmblaCarousel from 'embla-carousel-react'
import './Carousel.css'

const collections= [
  [one,one,one,one],
  [two,two,two,two]
]

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
      <div className=" flex flex-col justify-center mb-8 h-[100px] featuredpad">
        <h2
          className="text-2xl md:text-4xl tracking-[4px] "
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          FEATURED COLLECTION
        </h2>
        <p className="text-m text-gray-500 mt-2 tracking-wide">
          Carefully selected with love
        </p>
      </div>

      {/* CAROUSEL */}
    <div className="embla relative w-full mx-auto">
  
      <div className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
        
        <div className="embla__container flex w-full">
          
          {collections.map((group, groupIndex) => (
            <div 
              key={`group-${groupIndex}`} 
              className="embla__slide flex-[0_0_100%] w-full px-4"
            >

              <div className="flex w-full ">
                {group.slice(0, 4).map((pixs, pixInd) => (
                  <div 
                    key={`image-${groupIndex}-${pixInd}`} 
                    className="relative overflow-hidden rounded-m shadow-lg bg-[#fdfaf5] group flex-1"
                  >
                    <img 
                      src={pixs}
                      alt={`collection-${pixInd}`}
                      className="w-full h-[300px] md:h-[400px] object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

       {/* ARROWS */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-6 pointer-events-none">
          
          <button
            onClick={scrollPrev}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 shadow-xl border border-gray-200 
                      flex items-center justify-center text-xl font-bold 
                      hover:bg-[#d62828] hover:text-white transition-all"
          >
            ❮
          </button>

          <button
            onClick={scrollNext}
            className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 shadow-xl border border-gray-200 
                      flex items-center justify-center text-xl font-bold 
                      hover:bg-[#d62828] hover:text-white transition-all"
          >
            ❯
          </button>

        </div>

    </div>




    </div>
  )
}

export default Carousel
