import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./OrdersPage.css";

function OrdersPage() {
  const { orders } = useContext(StoreContext);

  const [selectedQuantity, setSelectedQuantity] = useState(
    Object.fromEntries(orders.map((_, i) => [i, 1]))
  );

  const handleQuantityAdd = (index) => {
    setSelectedQuantity((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
  };

  const handleQuantitySub = (index) => {
    setSelectedQuantity((prev) => ({
      ...prev,
      [index]: Math.max(1, prev[index] - 1),
    }));
  };

  return (
    <div className="min-h-screen bg-[#f2e6c8] flex justify-center py-12 px-4">
      <div className="w-full max-w-[800px] bg-[#f2e6c8] rounded-3xl shadow-2xl p-6 md:p-10">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1
            className="text-3xl md:text-4xl tracking-wide text-[#141414]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Orders
          </h1>
          <p className="text-sm text-[#141414]/70 mt-1">
            Track and manage your recent purchases.
          </p>
        </div>

        {/* ORDER LIST */}
        <ul className="space-y-6">
          {orders?.map((item, i) => (
            <li
              key={i}
              className="flex flex-col md:flex-row gap-6 p-5 rounded-2xl bg-white shadow-md border border-[#141414]/10"
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
              <div className="flex-1 flex flex-col justify-between">

                {/* TITLE */}
                <h2
                  className="text-xl tracking-wide text-[#141414] uppercase"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.Title}
                </h2>

                {/* SIZE + QTY */}
                <div className="flex flex-wrap items-center gap-6 mt-4 text-[#141414] text-sm">

                  <span>
                    Size: <span className="font-semibold">{item.size}</span>
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantitySub(i)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#141414] hover:bg-[#141414] hover:text-[#f2e6c8] transition"
                    >
                      −
                    </button>

                    <span className="font-medium min-w-[24px] text-center">
                      {selectedQuantity[i]}
                    </span>

                    <button
                      onClick={() => handleQuantityAdd(i)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#141414] hover:bg-[#141414] hover:text-[#f2e6c8] transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* PRICE */}
                <div className="mt-4 text-right">
                  <span className="text-lg font-semibold text-[#141414]">
                    £ {item.Price * selectedQuantity[i]}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrdersPage;
