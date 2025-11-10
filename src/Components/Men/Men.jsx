import React from 'react';
import './Men.css'
import one from '../../assets/Images/md1.jpeg';

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

            <div className="pricecon flex    w-full p-y-4">
                <div className="flex w-full  justify-between bg-red-500">
                    <div className="flex flex-col">

                        <p>Male JOGGERS</p>
                        <h1  className=" text-sm uppercase  mb-2">Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit </h1>
                    </div>

                    <div className="sizes flex">

                        <p>s</p>
                        <p>l</p>
                        <p>xl</p>
                    </div>

                    <div className="flex flex-col">

                        <p>Male JOGGERS</p>
                        <h1  className=" text-sm uppercase  mb-2">Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit </h1>
                    </div>

                </div >

            </div>
        </div>
    </div>
  );
}

export default Men;
