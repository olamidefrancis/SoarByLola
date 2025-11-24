import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Wishlist.css";

const sizes = ["XS", "S", "M", "L", "XL"];

function Wishlist() {
  const { likes, setLikes, selectedSizes, setSelectedSizes, measurements, setMeasurements } =
    useContext(StoreContext);

  const [selectedQuantity, setSelectedQuantity] = useState(
    Object.fromEntries(likes.map((_, i) => [i, 1]))
  );

  const handleSize = (itemIndex, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemIndex]: size,
    }));

    setLikes((prevLikes) =>
      prevLikes.map((item, i) =>
        i === itemIndex ? { ...item, size } : item
      )
    );
  };

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

  const addSpecifiedmeasurement = (itemIndex) => {
    const customSize = measurements[itemIndex];

    if (!customSize || customSize.trim() === "") {
      alert("Please enter your measurements first.");
      return;
    }

    setSelectedSizes((prev) => ({
      ...prev,
      [itemIndex]: customSize,
    }));

    setLikes((prevLikes) =>
      prevLikes.map((item, i) =>
        i === itemIndex ? { ...item, size: customSize } : item
      )
    );

    setMeasurements((prev) => ({
      ...prev,
      [itemIndex]: "",
    }));
  };

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

  const removeFromWish = (index) => {
    setLikes((prevLikes) => prevLikes.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#f2e6c8] flex justify-center py-12 px-4  ">
      <div className="w-full max-w-[900px] bg-[#f2e6c8] rounded-3xl shadow-2xl p-6 md:p-10 gap-y-2">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1
            className="text-3xl md:text-4xl tracking-wide text-[#141414]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Wishlist
          </h1>
          <p className="text-sm text-[#141414]/70 mt-1">
            Curated pieces, saved just for you.
          </p>
        </div>

        {/* LIST */}
        <ul className="space-y-6 ">
          {likes.map((item, i) => (
            <li
              key={i}
              className="flex flex-col md:flex-row gap-6 p-5 rounded-2xl bg-white shadow-md border border-[#141414]/10"
            >
              {/* IMAGE */}
              <div className="w-[140px] mx-auto md:mx-0">
                <img
                  src={item.Picture[0]}
                  alt={item.Title}
                  className="w-full h-auto rounded-lg object-cover shadow-sm"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between padwish">

                {/* TITLE + REMOVE */}
                <div className="flex justify-between items-start padwishlistright">
                  <h2
                    className="text-xl tracking-wide text-[#141414] uppercase"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.Title}
                  </h2>

                  <button
                    onClick={() => removeFromWish(i)}
                    className="text-xl text-[#d62828] hover:scale-110 transition"
                  >
                    ✕
                  </button>
                </div>

                {/* SIZE + QTY */}
                <div className="flex flex-wrap gap-6 mt-4 items-start">

                  {/* SIZE */}
                  <div>
                    {item.size ? (
                      <p className="text-sm text-[#141414]">
                        Size: <span className="font-semibold">{item.size}</span>
                      </p>
                    ) : (
                      <div className="space-y-2 flex flex-col gap-y-2">
                        <div className="flex gap-3">
                          {sizes.map((size, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSize(i, size)}
                              className={`w-9 h-9 rounded-full border text-sm transition-all
                                ${selectedSizes[i] === size
                                  ? "bg-[#141414] text-[#f2e6c8]"
                                  : "border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#f2e6c8]"
                                }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>

                        <textarea
                          rows={2}
                          value={measurements[i] || ""}
                          onChange={(e) => handleMeasurement(i, e.target.value)}
                          className="w-full border border-[#141414]/30 rounded-lg p-2 text-sm focus:outline-none focus:border-[#141414] padwish"
                          placeholder="Custom measurements..."
                        />

                        <button
                          onClick={() => addSpecifiedmeasurement(i)}
                          className="text-lg bg-[#141414] text-[#f2e6c8] px-3 py-1 rounded-full hover:opacity-90 padwish"
                        >
                          Apply Measurement
                        </button>
                      </div>
                    )}
                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantitySub(i)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#141414] text-sm hover:bg-[#141414] hover:text-[#f2e6c8]"
                    >
                      −
                    </button>

                    <span className="font-medium text-[#141414]">
                      {selectedQuantity[i]}
                    </span>

                    <button
                      onClick={() => handleQuantityAdd(i)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#141414] text-sm hover:bg-[#141414] hover:text-[#f2e6c8]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* PRICE + CTA */}
                <div className="flex justify-between items-center mt-6">
                  <p className="text-lg font-semibold text-[#141414]">
                    £ {item.Price * selectedQuantity[i]}
                  </p>

                  <button className="bg-[#d62828] text-[#f2e6c8] px-5 py-2 rounded-full text-sm tracking-wide hover:scale-[1.02] transition padwish">
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;
