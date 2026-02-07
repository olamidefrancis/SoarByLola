import "./Men.css";
import one from "../../assets/Images/md1.jpeg";
import two from "../../assets/Images/md2.jpeg";

import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FiHeart } from "react-icons/fi";
import toast from "react-hot-toast";

import useEmblaCarousel from "embla-carousel-react";

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

  const [isMobileCarousel, setIsMobileCarousel] = useState(
    window.innerWidth < 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileCarousel(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    if (alreadyLiked && !productData[index].liked) {
      toast("Already in your wishlist ❤️", { duration: 1500 });
      return;
    }

    const updated = [...productData];
    updated[index].liked = !updated[index].liked;
    setProductData(updated);

    setLikes((prev) =>
      updated[index].liked
        ? [...prev, item]
        : prev.filter((like) => like.Title !== item.Title)
    );
  };

  const handleAddToBag = (index, item) => {
    const data = productData[index];

    if (!data.size) {
      toast.error("Please select a size before adding to bag 👕");
      return;
    }

    if (orders.some((o) => o.Title === item.Title)) return;

    setOrders((prev) => [
      ...prev,
      { ...item, size: data.size, measurement: data.measurement, quantity: 1 },
    ]);

    toast.success("Item added to your bag 🛍️");
  };

  return (
    <div className="bg-[#faf8f3] min-h-screen px-3 md:px-16 py-16 space-y-24">
      {products.map((item, i) => {
        const isInBag = orders.some((o) => o.Title === item.Title);
        const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

        return (
          <div key={i} className="flex flex-col gap-8">
            <div className="relative w-full overflow-hidden">
              {isMobileCarousel ? (
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {item.Picture.map((img, index) => (
                      <div
                        key={index}
                        className="flex-[0_0_100%] aspect-[3/4] bg-[#fdfaf5] flex items-center justify-center"
                      >
                        <img
                          src={img}
                          alt={item.Title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex w-full">
                  {item.Picture.map((img, index) => (
                    <div key={index} className="w-full h-[450px] relative">
                      <img
                        src={img}
                        alt={item.Title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* 🔥 PREMIUM GLASS PANEL (REDESIGNED) */}
              <div
                className="
                  flex flex-col w-full space-y-5 paddycon
                  backdrop-blur-xl
                  bg-gradient-to-br
                  from-[#f3dfd5]/90
                  via-[#e7cbbd]/85
                  to-[#d6b4a4]/80
                  border border-white/40
                  shadow-[0_20px_60px_rgba(120,80,60,0.25)]
                  text-[#2b1e1a]
                "
              >
                <div className="flex justify-between items-start">
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
                        ? "text-rose-500 fill-rose-500 scale-110"
                        : "text-[#3a2a24]"
                    }`}
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex gap-3 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeChange(i, size)}
                        className={`  flex justify-center align-center w-10 h-10 rounded-full border text-m paddy transition
                          ${
                            productData[i].size === size
                              ? "bg-[#3a2a24] text-white"
                              : "border-[#3a2a24]/30 text-[#3a2a24] hover:bg-[#3a2a24] hover:text-white"
                          }`}
                      >
                       <p> {size}</p>
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Enter measurement (optional)…"
                    value={productData[i].measurement}
                    onChange={(e) =>
                      handleMeasurement(i, e.target.value)
                    }
                    className="
                      w-full md:w-[40%] h-[50px] rounded-md px-3
                      bg-white/60 border border-[#3a2a24]/20
                      placeholder-[#5a4036]/60 text-xl paddy
                      focus:outline-none focus:border-[#3a2a24]
                    "
                  />

                  <button
                    onClick={() => handleAddToBag(i, item)}
                    disabled={isInBag}
                    className={`px-7 py-3 text-m uppercase tracking-widest rounded-md transition paddy
                      ${
                        isInBag
                          ? "bg-white/40 text-[#3a2a24]/40 cursor-not-allowed"
                          : "border border-[#3a2a24]/40 text-[#3a2a24] hover:bg-[#3a2a24] hover:text-white"
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
