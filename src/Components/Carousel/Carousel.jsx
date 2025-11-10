import React from 'react'

import three from '../../assets/Images/md_gru.jpeg'
import one from '../../assets/Images/md1.jpeg'
import two from '../../assets/Images/md2.jpeg'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import './Carousel.css'


const Carousel=()=> {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="control">

        <div className="embla" >
              <div className="embla__viewport" ref={emblaRef}>
                  <div className="embla__container">

                          <div className="embla__slide h-[400px] "> 
                                <figure >
                                  <img src={one} alt="four"  className='object-cover '/>
                                </figure> 

                          </div>

                            <div className="embla__slide"> 
                                <figure>
                                  <img src={two} alt="four" />
                                </figure> 

                          </div>

                         <div className="embla__slide"> 
                                <figure>
                                  <img src={three} alt="four" />
                                </figure> 

                         </div>


                          
                  </div>

              </div> 

              

              <div className="arrows">
                            <button className="embla__prev " onClick={scrollPrev}>
                                {"<"}
                            </button>
                            <button className="embla__next " onClick={scrollNext}>
                              {">"}
                            </button>

              </div>
        </div>
   </div>
  )
}


export default Carousel

