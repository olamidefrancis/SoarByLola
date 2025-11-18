import React from 'react'
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import './Wishlist.css'

function Wishlist() {
    const { likes } = useContext(StoreContext);

  
  const [selectedQuantity, setSelectedQuantity] = useState(
    Object.fromEntries(likes.map((_, i) => [i, 1]))
  );

  // Increase quantity
  const handleQuantityAdd = (index) => {
    setSelectedQuantity((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
  };

  // Decrease quantity (prevent going below 1)
  const handleQuantitySub = (index) => {
    setSelectedQuantity((prev) => ({
      ...prev,
      [index]: Math.max(1, prev[index] - 1),
    }));
  };

  return (
    <div className="w-full lg:max-w-[700px]">

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
            <div  key={i}> 

                <li
                 
                  className="flex gap-3 border-b border-rebrand-base-200 p-3 pb-4 lg:border-x"
                >
                  {/* IMAGE */}
                  <a
                    href="#"
                    aria-hidden="true"
                    tabIndex="-1"
                    className="aspect-[52/83] w-[104px] min-w-[104px] lg:w-28"
                  >
                    <img
                      loading="lazy"
                      alt="product"
                      className="transition-opacity duration-200 ease-in opacity-100 w-full"
                      src={item.Picture[0]}
                    />
                  </a>

                  {/* PRODUCT INFO */}
                  <div className="w-full relative flex flex-col gap-y-1 padorder ">
                    <div className='flex justify-between w-full '>
                      <p className="font-rebrand-light text-lg uppercase mb-2 text-rebrand-base-100-contrast">
                        {item.Title}
                      </p>

                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
                            <path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
                        </svg>

                    </div>

                      <div className="flex gap-x-2 font-rebrand-light text-lg text-rebrand-base-100-contrast">
                        <span>Size: {item.size}</span>

                        <span className="mx-1 border-l h-[20px] border-rebrand-base-200"></span>

                        <span>Qty: {selectedQuantity[i]}</span>

                        {/* QUANTITY ARROWS */}
                        <div className="qauntitysetter flex flex-col justify-center gap-1 ">
                          <div className="arrow up" onClick={() => handleQuantityAdd(i)}></div>
                          <div className="arrow down" onClick={() => handleQuantitySub(i)}></div>
                        </div>
                      </div>
                      {/* PRICE */}
                      {selectedQuantity[i] > 1 ?
                        <div className="flex flex-col justify-between ">
                          <span className="font-rebrand-regular text-lg tracking-normal text-rebrand-base-100-contrast">
                            £ {item.Price * selectedQuantity[i] }
                          </span>
                        </div>:
                        <div className="flex flex-col justify-between">
                          <span className="font-rebrand-regular text-lg tracking-normal text-rebrand-base-100-contrast">
                            £ {item.Price}
                          </span>
                        </div>
                        }

                        <div className=' absolute bottom-0 w-full flex justify-end  left-0 padwish '>
                         <button className="bg-red-500 text-white rounded padwish ">
                             ADD TO BAG
                        </button>

                        </div>
                  </div>

                </li>

                
            </div>

          ))}
        </ul>
    </div>
  );
}
export default Wishlist
