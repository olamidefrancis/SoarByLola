import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import './OrdersPage.css'

function OrdersPage() {
  const { orders } = useContext(StoreContext);

  return (
    <div className="w-full lg:max-w-[700px]">
      
      {/* Header */}
      <div
        id="cart-table-header"
        className="hidden lg:flex justify-between border border-rebrand-base-200 p-4"
      >
        <h2 className="font-rebrand-regular text-sm uppercase text-rebrand-base-100-contrast">
          Your items
        </h2>
      </div>

      {/* Orders List */}
      <ul className="border-t border-rebrand-base-200 lg:border-none">

        {orders?.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 border-b border-rebrand-base-200 p-3 pb-4 lg:border-x"
          >

           
            <a
              
              href= '#'
              // {item.url}
              aria-hidden="true"
              tabIndex="-1"
              className="aspect-[52/83] w-[104px] min-w-[104px] lg:w-28"
            >
              <div className="relative">
                <img
                  loading="lazy"
                  alt='imagesso'
                  className="transition-opacity duration-200 ease-in opacity-100 w-full"
                  src={item.Picture[0]}   // <= 🔥 YOUR IMAGE GOES HERE
                />
              </div>
            </a>
          
            {/* PRODUCT IMAGE */}

            {/* PRODUCT INFO */}
            <div className="w-full">
              <div className="mb-2">
                <p
                  className="font-rebrand-light text-lg uppercase text-rebrand-base-100-contrast"
                >
                  {item.Title}
                </p>
              </div>

              <div className=" flex gap-x-2 font-rebrand-light text-lg text-rebrand-base-100-contrast lg:text-lg">
                <span>Size: {item.size}</span>
                <span className="mx-1 border-l h-[20px] border-rebrand-base-200"></span>
                <span>Qty: 
                  1
                  {/* {item.qty}*/}
                </span> 
                <div className="qauntitysetter flex flex-col justify-center gap-1 p-4">
                  <div className="arrow up"></div>
                  <div className="arrow down"></div>
                </div>

              </div>
            </div>

            {/* PRICE & OPTIONS */}
            <div className="flex flex-col items-end justify-between">
              <div className="lg:hidden">
                <button type="button" aria-label="Open options" className="p-2">
                  <ThreeDotsIcon />
                </button>
              </div>

              <div className="hidden lg:block">
                <button
                  className="p-2"
                  type="button"
                  aria-label="Open options"
                >
                  <ThreeDotsIcon />
                </button>
              </div>

              {/* PRICE */}
               <div className="lg:text-center font-rebrand-bold flex w-max flex-col items-end justify-between">
               
                <span className="lg:mt-2 lg:block">
                  <span className="font-rebrand-regular text-xs tracking-normal text-rebrand-base-100-contrast">
                    {`£ ${item.Price}`}
                  </span>

                  {/* {item.discount && (
                    <span className="font-rebrand-regular text-xs uppercase tracking-normal text-rebrand-base-100-contrast">
                      ({item.discount}% off)
                    </span>
                  )} */}
                </span>
              </div> 

            </div>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default OrdersPage;

// Small icon extracted to keep JSX clean
function ThreeDotsIcon() {
  return (
    <svg width="4" height="14" fill="currentColor" aria-hidden="true">
      <path d="M2.25 10c-.46 0-.9.18-1.24.51C.68 10.84.5 11.29.5 11.75c0 .46.18.9.51 1.23c.33.33.78.52 1.24.52c.46 0 .91-.19 1.24-.52c.33-.33.51-.77.51-1.23c0-.46-.18-.9-.51-1.23c-.33-.33-.78-.52-1.24-.52zM2.25 5c-.46 0-.91.18-1.24.51C.68 5.84.5 6.29.5 6.75c0 .46.18.91.51 1.24c.33.33.78.51 1.24.51c.46 0 .91-.18 1.24-.51c.33-.33.51-.78.51-1.24c0-.46-.18-.91-.51-1.24C3.16 5.18 2.71 5 2.25 5zM4 1.75c0-.46-.18-.91-.51-1.24C3.16.18 2.71 0 2.25 0C1.79 0 1.34.18 1.01.51C.68.84.5 1.29.5 1.75c0 .46.18.91.51 1.24C1.34 3.32 1.79 3.5 2.25 3.5c.46 0 .91-.18 1.24-.51c.33-.33.51-.78.51-1.24z" />
    </svg>
  );
}

 // <div>
    //   <h1>Your Orders</h1>

    //   {orders.map((order, i) => (
    //     <div key={i}>
    //       <p>Size: {order.size}</p>

    //       {order.Picture.map((img, id) => (
    //         <img key={id} src={img} width={70} />
    //       ))}
    //     </div>
    //   ))}
    // </div>