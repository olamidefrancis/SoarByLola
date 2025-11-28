import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Checkout.css";

function Checkout() {
  const { orders } = useContext(StoreContext);

  const subtotal = orders.reduce((total, item) => {
    return total + item.Price * item.quantity;
  }, 0);

  return (
   
      <div className="w-full flex flex-col md:flex-row gap-3 paddycheck bg-[#f2e6c8] min-h-screen md:justify-center flex-[1,1]">

        {/* LEFT SIDE - ORDER SUMMARY */}
        <div className=" relative bg-white rounded-xl shadow-xl p-8  h-fit paddycheck flex flex-col gap-8 flex-1">

          <h3 className="text-xl font-semibold mb-6 text-[#141414]">
            Order Summary
          </h3>

          <div className="space-y-6 border-b pb-6 mb-6">
            {orders.map((item, index) => (
              <div key={index} className="flex justify-between items-center">

                <div className="flex items-center  gap-4">
                  <img
                    src={item.Picture[0]}
                    alt={item.Title}
                    className="w-40 h-40 object-cover rounded-md paddycheck "
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

        {/* RIGHT SIDE - FORM */}
        <div className=" relative flex flex-col gap-2 rounded-xl shadow-xl paddycheck flex-1 bg-white">
          <div className="flex flex-col gap-10 ">

              <h2 className="text-3xl font-semibold tracking-wide mb-8 text-[#141414]">
                Checkout
              </h2>

              {/* BILLING DETAILS */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-semibold text-[#141414]">Billing Details</h3>

                <div className="flex flex-col md:flex-row  gap-8  text-xl">
                  <input type="text" placeholder="First Name"
                    className="checkout-input flex-1" />
                  <input type="text" placeholder="Last Name"
                    className="checkout-input flex-1" />
                </div>

                <input type="email" placeholder="Email Address"
                  className="checkout-input w-full text-xl" />
                <input type="tel" placeholder="Phone Number"
                  className="checkout-input w-full text-xl" />
              </div>

              {/* DELIVERY */}
              <div className="flex flex-col gap-6 text-xl">
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
              <div className="flex flex-col gap-6 text-xl">
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
          </div>

          <button class="absolute mt-10 w-full max-w-sm bg-[#141414] text-[#f2e6c8] py-4 rounded-xl tracking-widest text-lg uppercase hover:opacity-90 transition paddycheck md:bottom-10 left-1/2 -translate-x-1/2 bottom-0">
          Place Order
          </button>
         
        </div>

        
      </div>

  );
}

export default Checkout;

