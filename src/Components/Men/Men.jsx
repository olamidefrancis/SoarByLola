import React from 'react';
import './Men.css'
import one from '../../assets/Images/md1.jpeg';

// const catalog=[
//     {

//     }

// ]

const sizes =[
    "XS","S", "M","L","XL"
]

function Men() {
  return (
    <div className="h-full flex flex-col overflow-hidden">
        <div className="flex  flex-col w-full gap-y-6">

            <div className="flex  w-full" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                <div
                role="group"
                aria-roledescription="slide"
                aria-label="Slide 1 of 5"
                className="min-w-0 relative lg:flex-[0_0_25%] flex-[0_0_40%] flex-col"
                >
                <img
                    alt="Men outfit image 1"
                    loading="eager"
                    width="740"
                    height="1180"
                    decoding="async"
                    className="mx-auto"
                    src={one}
                />

                
                </div>

                <div
                role="group"
                aria-roledescription="slide"
                aria-label="Slide 2 of 5"
                className="min-w-0 relative lg:flex-[0_0_25%] flex-[0_0_40%]"
                >
                <img
                    alt="Men outfit image 2"
                    loading="eager"
                    width="740"
                    height="1180"
                    decoding="async"
                    className="mx-auto"
                    style={{ color: 'transparent' }}
                    src={one}
                />
                </div>

                <div
                role="group"
                aria-roledescription="slide"
                aria-label="Slide 3 of 5"
                className="min-w-0 relative lg:flex-[0_0_25%] flex-[0_0_40%]"
                >
                <img
                    alt="Men outfit image 3"
                    loading="eager"
                    width="740"
                    height="1180"
                    decoding="async"
                    className="mx-auto"
                    style={{ color: 'transparent' }}
                    src={one}
                />
                </div>

                <div
                role="group"
                aria-roledescription="slide"
                aria-label="Slide 4 of 5"
                className="min-w-0 relative lg:flex-[0_0_25%] flex-[0_0_40%]"
                >
                <img
                    alt="Men outfit image 4"
                    loading="lazy"
                    width="740"
                    height="1180"
                    decoding="async"
                    className="mx-auto"
                    style={{ color: 'transparent' }}
                    src={one}
                />
                </div>

                <div
                role="group"
                aria-roledescription="slide"
                aria-label="Slide 5 of 5"
                className="min-w-0 relative lg:flex-[0_0_25%] flex-[0_0_40%]"
                >
                <img
                    alt="Men outfit image 5"
                    loading="lazy"
                    width="740"
                    height="1180"
                    decoding="async"
                    className="mx-auto"
                    style={{ color: 'transparent' }}
                    src={one}
                />
                </div>
            </div>

            <div className="pricecon flex bg-neutral-200 w-full p-y-4">
                <div className="flex w-full justify-between  paddy">
                    <div className="flex flex-col gap-y-2">

                        <p>Male JOGGERS</p>
                        <h1  className=" text-sm uppercase  mb-2">Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit </h1>
                    </div>

                    <div className="sizes flex flex-col w-[33.3%] gap-y-6">
                        <div className=" flex w-[full] justify-center ">
                              <h1>SELECT YOUR SIZE</h1>
                        </div>

                        <div className="standardprice flex w-[full]      justify-center gap-x-10" >
                            {
                                sizes.map((sizes,i)=>(
                                
                                        <h2 className="flex items-center justify-center w-[20px] h-[20px]  rounded-[10%] text-[16px] hover:bg-white transition-colors" key={i}>
                                                {sizes}
                                            </h2>
                                ))
                            }
                        </div>
                      
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h2>YOU CAN SPECIFY YOUR MEASUREMENT</h2>

                        <textarea name="measurement" id="measurement"
                            rows="4" cols="50" className="border focus:outline-none   rounded-[10px] paddy
                            focus:ring-2 focus:ring-[gray-800 ] focus:border-transparent text-gray-800 resize-none shadow-sm
                            "
                            
                        >
                            
                        </textarea>

                    </div>

                </div >

            </div>
        </div>

       
    </div>
  );
}

export default Men;
