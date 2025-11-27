import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Checkout.css";

function Checkout() {
  const { orders } = useContext(StoreContext);

  const subtotal = orders.reduce((total, item) => {
    return total + item.Price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-[#f2e6c8] flex justify-center py-14 px-4">
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

        {/* ================= LEFT SIDE - FORM ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

          <h2 className="text-3xl font-semibold tracking-wide mb-8 text-[#141414]">
            Checkout
          </h2>

          {/* BILLING DETAILS */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#141414]">Billing Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name"
                className="checkout-input" />
              <input type="text" placeholder="Last Name"
                className="checkout-input" />
            </div>

            <input type="email" placeholder="Email Address"
              className="checkout-input w-full" />
            <input type="tel" placeholder="Phone Number"
              className="checkout-input w-full" />
          </div>

          {/* DELIVERY */}
          <div className="space-y-6 mt-10">
            <h3 className="text-xl font-semibold text-[#141414]">Delivery Address</h3>

            <input type="text" placeholder="Street Address"
              className="checkout-input w-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="City"
                className="checkout-input" />
              <input type="text" placeholder="Postcode"
                className="checkout-input" />
            </div>

            <input type="text" placeholder="Country"
              className="checkout-input w-full" />
          </div>

          {/* PAYMENT */}
          <div className="space-y-6 mt-10">
            <h3 className="text-xl font-semibold text-[#141414]">Payment</h3>

            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Card Number"
                className="checkout-input w-full"
              />

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="checkout-input"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="checkout-input"
                />
              </div>
            </div>
          </div>

          {/* PLACE ORDER */}
          <button className="mt-10 w-full bg-[#141414] text-[#f2e6c8] py-4 rounded-xl tracking-widest text-lg uppercase hover:opacity-90 transition">
            Place Order
          </button>
        </div>

        {/* ================= RIGHT SIDE - ORDER SUMMARY ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 h-fit sticky top-10">

          <h3 className="text-xl font-semibold mb-6 text-[#141414]">
            Order Summary
          </h3>

          <div className="space-y-6 border-b pb-6 mb-6">
            {orders.map((item, index) => (
              <div key={index} className="flex justify-between items-center">

                <div className="flex items-center gap-4">
                  <img
                    src={item.Picture[0]}
                    alt={item.Title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-sm font-semibold uppercase">
                      {item.Title}
                    </h4>
                    <p className="text-xs">
                      {item.size 
                        ? item.size 
                        : item.measurement}
                    </p>
                  </div>
                </div>

                <span className="font-semibold">
                  £ {item.Price * item.quantity}
                </span>

              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total:</span>
            <span>£ {subtotal.toFixed(2)}</span>
          </div>

          {/* PAYMENT METHODS UI */}
          <div className="flex gap-3 justify-center mt-4 opacity-70 text-sm tracking-wide">
            <span>VISA</span>
            <span>MASTER</span>
            <span>AMEX</span>
            <span>PayPal</span>
            <span>Klarna</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

