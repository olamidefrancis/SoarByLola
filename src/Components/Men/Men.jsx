import "./Men.css";
import one from "../../assets/Images/md1.jpeg";
import two from "../../assets/Images/md2.jpeg";

import { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FiHeart } from "react-icons/fi";
import toast from "react-hot-toast";

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
  const { setOrders, setLikes, likes, orders } = useContext(StoreContext);

  const [productData, setProductData] = useState(
    products.map(() => ({
      size: null,
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
    const alreadyLiked = likes.some(
      (likedItem) => likedItem.Title === item.Title
    );

    //  Toast 
    if (alreadyLiked && !productData[index].liked) {
      toast("Already in your wishlist ❤️",{duration: 1500});
      return;
    }

    const updated = [...productData];
    const isLiked = !updated[index].liked;
    updated[index].liked = isLiked;
    setProductData(updated);

    setLikes((prev) => {
      if (isLiked) {
        toast.success("Added to wishlist 💖",{duration: 1500});
        return [...prev, item];
      } else {
        toast("Removed from wishlist ❌",{duration: 1500});
        return prev.filter((like) => like.Title !== item.Title);
      }
    });
  };

  const handleAddToBag = (index, item) => {
    const data = productData[index];

    const alreadyInBag = orders.some(
      (orderItem) => orderItem.Title === item.Title
    );

    if (alreadyInBag) return;

    setOrders((prev) => [
      ...prev,
      {
        ...item,
        size: data.size,
        measurement: data.measurement,
        quantity: 1,
      },
    ]);

    // ✅ Toast when added to bag
    toast.success("Item added to your bag 🛍️");
  };

  return (
    <div className="bg-[#faf8f3] min-h-screen px-3 md:px-16 py-16 space-y-24">

      {products.map((item, i) => {
        const isInBag = orders.some(
          (orderItem) => orderItem.Title === item.Title
        );

        return (
          <div key={i} className="flex flex-col gap-8">

            {/* IMAGE STRIP */}
            <div className="relative w-full overflow-hidden">

              <div className="grid grid-cols-4 w-full">
                {item.Picture.map((img, index) => (
                  <div
                    key={index}
                    className="w-full h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                  >
                    <img
                      src={img}
                      alt={item.Title}
                      className="w-full h-full object-cover shadow-xl"
                    />
                  </div>
                ))}
              </div>

              {/* GLASS PANEL */}
              <div className=" flex flex-col w-full bg-black/60 backdrop-blur-md text-white  space-y-5 paddycon">

                {/* TITLE + PRICE + LIKE */}
                <div className="flex justify-between items-start ">
                  <div>
                    <h2 className="text-sm font-semibold tracking-widest uppercase">
                      {item.Title}
                    </h2>
                    <p className="text-xl font-semibold mt-1">
                      £{item.Price}
                    </p>
                  </div>

                  <FiHeart
                    onClick={() => handleLike(i, item)}
                    className={`text-3xl cursor-pointer transition ${
                      productData[i].liked
                        ? "text-red-500 fill-red-500 scale-110"
                        : "text-white"
                    }`}
                  />
                </div>

                {/* CONTROLS */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-10 ">

                  {/* SIZE SELECTION */}
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeChange(i, size)}
                        className={`w-9 h-9 text-xs border rounded-full tracking-wide transition
                          ${
                            productData[i].size === size
                              ? "bg-white text-black"
                              : "border-white/40 text-white hover:bg-white hover:text-black"
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
                      placeholder="Enter measurement (optional)…"
                      value={productData[i].measurement}
                      onChange={(e) => handleMeasurement(i, e.target.value)}
                      className="w-full bg-black/35 border border-white/30 p-3 rounded-md text-md md:text-lg placeholder-white/60 focus:outline-none focus:border-white h-[50px]"
                    />
                  </div>

                  {/* ADD TO BAG BUTTON */}
                  <button
                    onClick={() => handleAddToBag(i, item)}
                    disabled={isInBag}
                    className={`px-7 py-3 text-sm uppercase tracking-widest border rounded-md transition
                      ${
                        isInBag
                          ? "border-white/20 text-white/50 cursor-not-allowed bg-black/40"
                          : "border-white/40 hover:bg-white hover:text-black text-white"
                      }`}
                  >
                    {isInBag ? "Already in Bag" : "Add to Bag"}
                  </button>

                </div>
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
}

export default Men;
