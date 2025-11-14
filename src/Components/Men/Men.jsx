import React, { useState } from "react";
import "./Men.css";
import one from "../../assets/Images/md1.jpeg";
import two from "../../assets/Images/md2.jpeg";

const catalog = [
  {
    Picture: [one, one, one, one],
    Tile: "Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit",
  },
  {
    Picture: [two, two, two, two],
    Tile: "Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit",
  },
];

const sizes = ["XS", "S", "M", "L", "XL"];

function Men() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [measurement, setMeasurement] = useState("");
  const [orders, setOrders] = useState([]);

  const handleSubmit = (item) => {
    if (!selectedSize && measurement.trim() === "") {
      alert("Please select a size or enter your measurements.");
      return;
    }

    const newOrder = {
      Picture: item.Picture,
      size: selectedSize || measurement,
    };

    setOrders((prev) => [...prev, newOrder]);

    
    setSelectedSize(null);
    setMeasurement("");
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {catalog.map((item, i) => (
        <div className="flex flex-col w-full gap-y-6" key={i}>
         
          <div className="flex w-full overflow-x-auto gap-4 py-2">
            {item.Picture.map((img, idx) => (
              <div
                key={idx}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${item.Picture.length}`}
                className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[23%] lg:w-[23%] flex-col"
              >
                <img
                  src={img}
                  alt={`Men outfit image ${idx + 1}`}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            ))}
          </div>

          
          <div className="pricecon flex flex-col md:flex-row bg-neutral-200 w-full paddy gap-6 rounded-md lato-thin">
           
            <div className="flex gap-2 md:w-1/3 justify-center">
              <h1 className="text-sm uppercase lato-thin">{item.Tile}</h1>
            </div>

          
            <div className="sizes flex flex-col gap-4 md:w-1/3 items-center">
              <h1 className="text-sm text-center lato-thin">SELECT YOUR SIZE</h1>
              <div className="standardprice flex flex-wrap justify-center gap-3">
                {sizes.map((size, idx) => (
                  <h2
                    key={idx}
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-center w-8 h-8 rounded-[10%] text-[16px] 
                      cursor-pointer transition-colors ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "hover:bg-white"
                      }`}
                  >
                    {size}
                  </h2>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 md:w-1/3 padit">
              <textarea
                name="measurement"
                rows={4}
                value={measurement}
                onChange={(e) => setMeasurement(e.target.value)}
                className="lato-thin text-lg border border-gray-400 rounded-lg p-3 
                  focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent 
                  text-gray-800 resize-none w-full shadow-sm paddy "
                placeholder="You can also enter your measurements here..."
              />

              <button
                className="submit bg-red-500 text-white py-2 rounded-md"
                onClick={() => handleSubmit(item)}
              >
                Submit
              </button>
            </div>
          </div>

         
        </div>
      ))}



         

          {orders.length > 0 && (
            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Your Orders</h2>

              {orders.map((order, index) => (
                <div key={index} className="flex flex-col gap-2 border p-3 rounded-md">
                 
                  <div className="flex gap-3 overflow-x-auto">
                    {order.Picture.map((img, id) => (
                      <img
                        key={id}
                        src={img}
                        alt={`order-img-${id}`}
                        className="w-24 h-24 object-cover rounded"
                      />
                    ))}
                  </div>

                
                  <p className="text-sm text-gray-700">
                    <strong>Size/Measurement:</strong> {order.size}
                  </p>
                </div>
              ))}
            </div>
          )}

         
    </div>
  );
}

export default Men;
