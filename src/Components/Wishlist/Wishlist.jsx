import React from 'react'
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import './Wishlist.css'

const sizes = ["XS", "S", "M", "L", "XL"];

function Wishlist() {
  const { likes, setLikes, selectedSizes, setSelectedSizes, measurements, setMeasurements } = useContext(StoreContext);

  const [selectedQuantity, setSelectedQuantity] = useState(
    Object.fromEntries(likes.map((_, i) => [i, 1]))
  );

  //  SELECT SIZE BUTTON
  const handleSize = (itemIndex, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemIndex]: size,
    }));

    setLikes((prevLikes) =>
      prevLikes.map((item, i) =>
        i === itemIndex ? { ...item, size: size } : item
      )
    );
  };

  //  HANDLE CUSTOM MEASUREMENT INPUT
  const handleMeasurement = (itemIndex, value) => {
    setMeasurements((prev) => ({
      ...prev,
      [itemIndex]: value,
    }));

    setLikes((prevLikes) =>
      prevLikes.map((item, i) =>
        i === itemIndex ? { ...item, measurement: value } : item
      )
    );
  };

  //  ADD CUSTOM MEASUREMENT AS PRODUCT SIZE
  const addSpecifiedmeasurement = (itemIndex) => {
    const customSize = measurements[itemIndex];

    if (!customSize || customSize.trim() === "") {
      alert("Please enter a measurement first.");
      return;
    }

    // Update selectedSizes UI
    setSelectedSizes((prev) => ({
      ...prev,
      [itemIndex]: customSize,
    }));

    // Update the actual item inside likes[]
    setLikes((prevLikes) =>
      prevLikes.map((item, i) =>
        i === itemIndex ? { ...item, size: customSize } : item
      )
    );

    // Optional: Clear textarea after applying
    setMeasurements((prev) => ({
      ...prev,
      [itemIndex]: "",
    }));
  };

  //  Increase quantity
  const handleQuantityAdd = (index) => {
    setSelectedQuantity((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
  };

  //  Decrease quantity
  const handleQuantitySub = (index) => {
    setSelectedQuantity((prev) => ({
      ...prev,
      [index]: Math.max(1, prev[index] - 1),
    }));
  };

  //  Remove item
  const removeFromWish = (index) => {
    setLikes((prevLikes) => prevLikes.filter((_, i) => i !== index));

    setSelectedQuantity((prev) => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  return (
    <div className="w-100vw h-full flex justify-center ">
      <div className="w-full lg:max-w-[700px] ">
        <div
          id="cart-table-header"
          className="hidden lg:flex justify-between border border-rebrand-base-200 p-4"
        >
          <h2 className="font-rebrand-regular text-sm uppercase text-rebrand-base-100-contrast">
            Your items
          </h2>
        </div>

        <ul className="border-t border-rebrand-base-200 lg:border-none">
          {likes?.map((item, i) => (
            <div key={i}>
              <li className="flex gap-3 border-b border-rebrand-base-200 p-3 pb-4 lg:border-x">
                
                {/* IMAGE */}
                <a href="#" aria-hidden="true" tabIndex="-1"
                  className="aspect-[52/83] w-[104px] min-w-[104px] lg:w-28">
                  <img
                    loading="lazy"
                    alt="product"
                    className="transition-opacity duration-200 ease-in opacity-100 w-full"
                    src={item.Picture[0]}
                  />
                </a>

                {/* PRODUCT INFO */}
                <div className="w-full relative flex flex-col gap-y-1 padorder">
                  
                  <div className='flex justify-between w-full max-[500px]:gap-x-1 padwish'>
                    <p className="font-rebrand-light text-lg uppercase mb-2 text-rebrand-base-100-contrast">
                      {item.Title}
                    </p>

                    <div className="bg-gray-300 rounded-full w-10 h-10 flex justify-center max-[500px]:w-16 items-center">
                      <svg
                        onClick={() => removeFromWish(i)}
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24">
                        <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="flex justify-between font-rebrand-light text-lg text-rebrand-base-100-contrast padwishlistright w-full">

                    {/*  SIZE DISPLAY / PICKER */}
                    {item.size ? (
                      <span>Size: {item.size}</span>
                    ) : (
                      <div className='flex flex-col gap-y-1'>
                        <div className="flex justify-start gap-1">
                          {sizes.map((size, idx) => (
                            <h4
                              key={idx}
                              onClick={() => handleSize(i, size)}
                              className={`flex items-center justify-center w-8 h-8 rounded-[10%] text-[12px] 
                              cursor-pointer transition-colors ${
                                selectedSizes[i] === size
                                  ? "bg-black text-white"
                                  : "hover:bg-white"
                              }`}
                            >
                              {size}
                            </h4>
                          ))}
                        </div>

                        <textarea
                          rows={2}
                          value={measurements[i] || ""}
                          onChange={(e) => handleMeasurement(i, e.target.value)}
                          className="lato-thin text-lg border border-gray-400 rounded-lg paddy focus:outline-none focus:border-black"
                          placeholder="Or specify measurements here..."
                        />

                        {/* ✅ ADD CUSTOM SIZE BUTTON */}
                        <button
                          onClick={() => addSpecifiedmeasurement(i)}
                          className="bg-black text-white text-sm px-3 py-1 rounded mt-1 hover:bg-gray-800"
                        >
                          ADD SIZE
                        </button>
                      </div>
                    )}

                    <span className="mx-1 border-l h-[20px] border-rebrand-base-200"></span>

                    {/* QUANTITY */}
                    <span>Qty: {selectedQuantity[i]}</span>

                    <div className="qauntitysetter flex flex-col justify-center h-fit gap-3">
                      <div className="arrowx upx" onClick={() => handleQuantityAdd(i)}></div>
                      <div className="arrowx downx" onClick={() => handleQuantitySub(i)}></div>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div>
                    <span className="font-rebrand-regular text-lg tracking-normal text-rebrand-base-100-contrast">
                      £ {item.Price * selectedQuantity[i]}
                    </span>
                  </div>

                  <div className='absolute bottom-0 w-full flex justify-end left-0 padwish'>
                    <button className="bg-red-500 text-white rounded padwish">
                      ADD TO BAG
                    </button>
                  </div>

                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Wishlist;







 