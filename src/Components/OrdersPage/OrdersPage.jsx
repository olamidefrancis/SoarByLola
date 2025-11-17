import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./OrdersPage.css";

function OrdersPage() {
  const { orders } = useContext(StoreContext);

  
  const [selectedQuantity, setSelectedQuantity] = useState(
    Object.fromEntries(orders.map((_, i) => [i, 1]))
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

        {orders?.map((item, i) => (
          <li
            key={i}
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
            <div className="w-full  flex flex-col gap-y-1 padorder">
                <p className="font-rebrand-light text-lg uppercase mb-2 text-rebrand-base-100-contrast">
                  {item.Title}
                </p>

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
                {selectedQuantity[i] > 1 ?<div className="flex flex-col justify-between ">
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
             </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersPage;
