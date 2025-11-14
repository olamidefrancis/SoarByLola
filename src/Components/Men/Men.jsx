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

                    
                    <div className="pricecon flex flex-col md:flex-row bg-neutral-200 w-full paddy gap-6 rounded-md lato-thin">
                    {/* Product Info */}
                    <div className="flex gap-2 md:w-1/3 sm: justify-center">
                        
                        <h1 className="text-sm uppercase lato-thin">{items.Tile}</h1>
                    </div>

                    {/* Size Selector */}
                    <div className="sizes flex flex-col gap-4 md:w-1/3 items-center">
                        <h1 className="text-sm  text-center lato-thin">SELECT YOUR SIZE</h1>
                        <div className="standardprice flex flex-wrap justify-center gap-3">
                        {sizes.map((size, idx) => (
                            <h2
                            key={idx}
                            className="flex items-center justify-center w-8 h-8 rounded-[10%] text-[16px]  hover:bg-white cursor-pointer transition-colors"
                            >
                            {size}
                            </h2>
                        ))}
                        </div>
                    </div>

                    {/* Measurement Textarea */}
                    <div className="flex  gap-2 md:w-1/3   padit">
                        <textarea
                        name="measurement"
                        id="measurement"
                        rows={4}
                        className="lato-thin text-lg border border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent text-gray-800 resize-none w-full shadow-sm paddy "
                        placeholder="You can also enter your measurements here..."
                        />
                    </div>
                    </div>

               </div>
            )) }
       
      
       
    </div>
  );
}

export default Men;
