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

  // 🔹 Detect <400px
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
    const isLiked = !updated[index].liked;
    updated[index].liked = isLiked;
    setProductData(updated);

    setLikes((prev) => {
      if (isLiked) {
        toast.success("Added to wishlist 💖", { duration: 1500 });
        return [...prev, item];
      } else {
        toast("Removed from wishlist ❌", { duration: 1500 });
        return prev.filter((like) => like.Title !== item.Title);
      }
    });
  };

  const handleAddToBag = (index, item) => {
    const data = productData[index];

    if (!data.size) {
      toast.error("Please select a size before adding to bag 👕", {
        duration: 1800,
      });
      return;
    }

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

    toast.success("Item added to your bag 🛍️");
  };

  return (
    <div className="bg-[#faf8f3] min-h-screen px-3 md:px-16 py-16 space-y-24">
      {products.map((item, i) => {
        const isInBag = orders.some(
          (orderItem) => orderItem.Title === item.Title
        );

        // 🔹 Embla per product
        const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

        const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
        const scrollNext = () => emblaApi && emblaApi.scrollNext();

        return (
          <div key={i} className="flex flex-col gap-8">
            {/* IMAGE STRIP */}
            <div className="relative w-full overflow-hidden">

              {isMobileCarousel ? (
                <div className="relative w-full overflow-hidden">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex w-full">
                      {item.Picture.map((img, index) => (
                        <div
                          key={index}
                          className="relative flex-[0_0_100%] bg-[#fdfaf5]"
                        >
                          <img
                            src={img}
                            alt={item.Title}
                            className="w-full h-[300px] object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CAROUSEL NAV */}
                  <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-4 pointer-events-none">
                    <button
                      onClick={scrollPrev}
                      className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-lg"
                    >
                      ❮
                    </button>
                    <button
                      onClick={scrollNext}
                      className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-lg"
                    >
                      ❯
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center align-center w-full">
                  {item.Picture.map((img, index) => (
                    <div
                      key={index}
                      className="w-full h-[350px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative"
                    >
                      <img
                        src={img}
                        alt={item.Title}
                        className="w-full h-full object-cover shadow-lg bg-[#fdfaf5]"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  ))}
                </div>
              )}

              {/* GLASS PANEL */}
              <div className="flex flex-col w-full bg-black/60 backdrop-blur-md text-white space-y-5 paddycon">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-sm font-semibold tracking-widest uppercase">
                      {item.Title}
                    </h2>
                    <p className="text-xl font-semibold mt-1">£{item.Price}</p>
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

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-10">
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

                  <div className="w-full md:w-[40%]">
                    <input
                      type="text"
                      placeholder="Enter measurement (optional)…"
                      value={productData[i].measurement}
                      onChange={(e) => handleMeasurement(i, e.target.value)}
                      className="w-full bg-black/35 border border-white/30 p-3 rounded-md text-md md:text-lg placeholder-white/60 focus:outline-none focus:border-white h-[50px] paddy"
                    />
                  </div>

                  <button
                    onClick={() => handleAddToBag(i, item)}
                    disabled={isInBag}
                    className={`px-7 py-3 text-sm uppercase tracking-widest border rounded-md transition paddy
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
