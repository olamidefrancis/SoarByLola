import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./History.css";

function History() {
  const { history } = useContext(StoreContext);

  if (!history || history.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f2e6c8]">
        <h2 className="text-xl tracking-widest text-[#141414]">
          No order history yet
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2e6c8] px-4 md:px-16 py-14 space-y-12 padh">
      <h1 className="text-3xl font-semibold tracking-widest text-[#141414] uppercase">
        Order History
      </h1>

      {history.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-xl shadow-xl p-16 space-y-6 paddhis"
        >
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:justify-between gap-2 border-b pb-4">
            <p className="text-lg text-gray-500">
              Ordered on: <span className="font-medium">{order.date}</span>
            </p>
            <p className="text-lg font-semibold text-[#141414]">
              Total: £{order.total.toFixed(2)}
            </p>
          </div>

          {/* ITEMS */}
          <div className="space-y-6">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center border-b last:border-none pb-4"
              >
                <img
                  src={item.Picture[0]}
                  alt={item.Title}
                  className="w-[150px] h-auto rounded-lg shadow"
                />

                <div className="flex-1">
                  <h3 className="uppercase font-semibold text-[#141414]">
                    {item.Title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.size || item.measurement}
                  </p>
                  <p className="text-lg text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="font-semibold  text-m text-[#141414]">
                  £{item.Price * item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
