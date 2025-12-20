import { useContext, useMemo } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./OrdersPage.css";
import { Link } from "react-router";

function OrdersPage() {
  const { orders, setOrders } = useContext(StoreContext);

  //  INCREASE QUANTITY
  const handleQuantityAdd = (index) => {
    setOrders(prevOrders =>
      prevOrders.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //  DECREASE QUANTITY
  const handleQuantitySub = (index) => {
    setOrders(prevOrders =>
      prevOrders.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  //  REMOVE ITEM
  const handleOrderRemoval = (itemIndex) => {
    setOrders(prevOrders => prevOrders.filter((_, i) => i !== itemIndex));
  };

  //  SUBTOTAL
  const subtotal = useMemo(() => {
    return orders.reduce((total, item) => {
      return total + item.Price * item.quantity;
    }, 0);
  }, [orders]);

  return (
    <div className="min-h-screen bg-[#f2e6c8] flex justify-center py-12 px-4 checkpad">
      <div className="w-full max-w-[1000px] bg-[#f2e6c8] rounded-3xl shadow-2xl p-6 md:p-10">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1
            className="text-3xl md:text-4xl tracking-wide text-[#141414]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Bag
          </h1>
          <p className="text-sm text-[#141414]/70 mt-1">
            Review your items before checkout.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">

          {/* LEFT: ORDER LIST */}
          <ul className="space-y-6">
            {orders?.map((item, i) => (
              <li
                key={i}
                className="flex flex-col md:flex-row gap-6 p-5 rounded-2xl bg-white shadow-md border border-[#141414]/10 padorder"
              >
                {/* IMAGE */}
                <div className="w-[130px] mx-auto md:mx-0">
                  <img
                    src={item.Picture[0]}
                    alt={item.Title}
                    className="w-full h-auto rounded-lg object-cover shadow-sm"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1 flex flex-col justify-between gap-y-1">

                  {/* TITLE + REMOVE */}
                  <div className="flex justify-between">
                    <h2
                      className="text-xl tracking-wide text-[#141414] uppercase font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.Title}
                    </h2>

                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#141414] hover:bg-[#d62828] hover:text-[#f2e6c8] hover:border-[#d62828] transition text-xl cursor-pointer"
                      onClick={() => handleOrderRemoval(i)}
                    >
                      <p>X</p>
                    </div>
                  </div>

                  {/* SIZE + QTY */}
                  <div className="flex flex-wrap items-center gap-6 mt-4 text-[#141414] font-semibold">

                    <span className="text-xl">
                      Size:{" "}
                      <span className="font-semibold padorder">
                        {item.size && item.measurement
                          ? item.measurement
                          : item.size || item.measurement}
                      </span>
                    </span>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantitySub(i)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#141414] hover:bg-[#141414] hover:text-[#f2e6c8] transition"
                      >
                        <p className="text-2xl">-</p>
                      </button>

                      <span className="font-medium min-w-[24px] text-center text-2xl">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleQuantityAdd(i)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#141414] hover:bg-[#141414] hover:text-[#f2e6c8] transition"
                      >
                        <p className="text-2xl">+</p>
                      </button>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="mt-4 flex justify-start">
                    <span className="text-xl font-semibold text-[#141414]">
                      £ {item.Price * item.quantity}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* RIGHT: CHECKOUT PANEL */}
          <div className="bg-white shadow-xl border border-[#141414]/10 rounded-2xl p-6 h-[20vh] sticky top-10 padorder flex flex-col gap-4 justify-center">

            <h3 className="text-xl font-semibold text-[#141414] mb-4 tracking-wide">
              Order Details
            </h3>

            {/* SUBTOTAL */}
            <div className="flex justify-between text-lg font-semibold text-[#141414] mb-6">
              <span>Subtotal:</span>
              <span>£ {subtotal.toFixed(2)}</span>
            </div>

            {/* CHECKOUT BUTTON */}
            <Link
              to="/Login"
              className="block w-full text-center bg-[#141414] text-[#f2e6c8] py-3 rounded-xl text-lg tracking-wide hover:opacity-90 transition"
            >
              CHECKOUT
            </Link>

            {/* PAYMENT ICONS */}
            <div className="flex gap-3 justify-center mt-5 opacity-60 text-xs">
              <span>VISA</span>
              <span>MASTER</span>
              <span>PayPal</span>
              <span>Klarna</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
