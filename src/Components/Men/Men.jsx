import "./Men.css";
import one from "../../assets/Images/md1.jpeg";
import two from "../../assets/Images/md2.jpeg";

import { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FiHeart } from "react-icons/fi";

const products = [
  {
    Picture: [one, two, one, two],
    Title: "Black Double Layer Slinky Bodysuit",
    Price: 123,
  },
  {
    Picture: [two, one, two, one],
    Title: "Modern Tailored Menswear",
    Price: 200,
  },
  {
    Picture: [one, two, one, two],
    Title: "Minimal Comfort Set",
    Price: 150,
  },
];

const sizes = ["XS", "S", "M", "L", "XL"];

function Men() {
  const { setOrders, setLikes } = useContext(StoreContext);

  const [productData, setProductData] = useState(
    products.map(() => ({
      size: "M",
      measurement: "",
      liked: false,
    }))
  );

  const handleSizeChange = (index, size) => {
    const updated = [...productData];
    updated[index].size = size;
    setProductData(updated);
  };

  const handleMeasurement = (index, value) => {
    const updated = [...productData];
    updated[index].measurement = value;
    setProductData(updated);
  };

  const handleLike = (index, item) => {
    const updated = [...productData];
    const isLiked = !updated[index].liked;
    updated[index].liked = isLiked;
    setProductData(updated);

    setLikes((prev) => {
      if (isLiked) return [...prev, item];
      return prev.filter((like) => like.Title !== item.Title);
    });
  };

  const handleAddToBag = (index, item) => {
    const data = productData[index];

    setOrders((prev) => [
      ...prev,
      {
        ...item,
        size: data.size,
        measurement: data.measurement,
        quantity: 1,
      },
    ]);
  };

  return (
    <div className="bg-[#faf8f3] min-h-screen px-4 md:px-16 py-16 space-y-24">

      {products.map((item, i) => (

        <div key={i} className="flex flex-col gap-8">

          {/* IMAGE STRIP */}
          <div className="relative w-full rounded-2xl overflow-hidden">

            {/* IMAGE ROW */}
            <div className="grid grid-cols-4 w-full">
              {item.Picture.map((img, index) => (
                <div key={index} className="w-full h-[450px]">
                  <img
                    src={img}
                    alt={item.Title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* PREMIUM GLASS PANEL */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md text-white px-6 py-5 space-y-4">

              {/* TOP BAR */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-sm tracking-widest uppercase font-light">
                    {item.Title}
                  </h2>
                  <p className="text-lg font-light mt-1">
                    £{item.Price}
                  </p>
                </div>

                <FiHeart
                  onClick={() => handleLike(i, item)}
                  className={`text-2xl cursor-pointer transition ${
                    productData[i].liked
                      ? "text-red-500 fill-red-500 scale-110"
                      : "text-white"
                  }`}
                />
              </div>

              {/* CONTROLS BAR */}
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">

                {/* SIZE SELECT */}
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(i, size)}
                      className={`px-3 py-1 text-xs border rounded-sm transition ${
                        productData[i].size === size
                          ? "bg-white text-black"
                          : "border-white/40 hover:bg-white hover:text-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* MEASUREMENTS */}
                <div className="w-full md:w-[40%]">
                  <input
                    type="text"
                    placeholder="Custom measurements..."
                    value={productData[i].measurement}
                    onChange={(e) => handleMeasurement(i, e.target.value)}
                    className="w-full bg-black/40 text-white placeholder-white/60 border border-white/30 p-2 text-sm focus:outline-none focus:border-white"
                  />
                </div>

                {/* ADD TO BAG */}
                <button
                  onClick={() => handleAddToBag(i, item)}
                  className="px-6 py-2 text-sm uppercase tracking-widest border border-white/40 hover:bg-white hover:text-black transition"
                >
                  Add to Bag
                </button>

              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Men;
