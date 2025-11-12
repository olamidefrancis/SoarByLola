import React from 'react';
import './Men.css'
import one from '../../assets/Images/md1.jpeg';

const catalog=[
   {Picture:[one,one,one,one],
    Tile: "Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit"
   },

    {Picture:[one,one,one,one],
    Tile: "Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit"
   },

    {Picture:[one,one,one,one],
    Tile: "Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit"
   },


]

const sizes =[
    "XS","S", "M","L","XL"
]

function Men() {
  return (
    <div className="h-full flex flex-col overflow-hidden">
          
        
     

            {catalog.map((items,i)=>(
                <div className="flex  flex-col w-full gap-y-6 ">
                    {/* <div className="flex  w-full" style={{ transform: 'translate3d(0px, 0px, 0px)' }} key={i}>
                        
                            {
                                items.Picture.map((items,ix)=>(
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
                                            src={items}
                                            key={ix}
                                        />
                                 </div>
                                ))
                            }
                    </div> */}

                    <div className="flex w-full overflow-x-auto gap-4 py-2"key={i}>
                            {items.Picture.map((img, i) => (
                            <div
                                key={i}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${i + 1} of ${items.Picture.length}`}
                                className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[23%] lg:w-[23%] flex-col"
                                >
                                <img
                                    alt={`Men outfit image ${i + 1}`}
                                    loading="eager"
                                    decoding="async"
                                    src={img}
                                    className="w-full h-auto rounded-md object-cover"
                                />
                           </div>
                                ))}
                     </div>

                    <div className="pricecon flex bg-neutral-200 w-full p-y-4">
                        <div className="flex w-full justify-between  paddy">
                            <div className="flex flex-col gap-y-2">

                                <p>Male JOGGERS</p>
                                <h1  className=" text-sm uppercase  mb-2">{items.Tile} </h1>
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
            )) }
       
      
       
    </div>
  );
}

export default Men;
