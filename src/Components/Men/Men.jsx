import "./Men.css";
import one from "../../assets/Images/md1.jpeg";
import two from "../../assets/Images/md2.jpeg";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const catalog = [
  {
    Picture: [one, one, one, one],
    Title: "Black Double Layer Slinky Cowl Neck Long Sleeve Bodysuit",
    Price: 123
  },
  {
    Picture: [two, two, two, two],
    Title: "Men wears",
    Price: 200
  },
];

const sizes = ["XS", "S", "M", "L", "XL"];

function Men() {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [measurements, setMeasurements] = useState({});
  const { orders, setOrders, likes, setLikes } = useContext(StoreContext);
  const [likedItems, setLikedItems] = useState({});

  // Handle selecting size per item
  const handleSize = (itemIndex, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemIndex]: size,
    }));
  };

  // Handle measurement per item
  const handleMeasurement = (itemIndex, value) => {
    setMeasurements((prev) => ({
      ...prev,
      [itemIndex]: value,
    }));
  };

  // Submit order
  const handleSubmit = (item, itemIndex) => {
    const selectedSize = selectedSizes[itemIndex];
    const measurement = measurements[itemIndex] || "";

    if (!selectedSize && measurement.trim() === "") {
      alert("Please select a size or enter your measurements.");
      return;
    }

    const newOrder = {
      Picture: item.Picture,
      size: selectedSize || measurement,
      Price: item.Price,
      Title: item.Title
    };

    setOrders((prev) => [...prev, newOrder]);

    // Reset only this item’s selections
    setSelectedSizes((prev) => ({ ...prev, [itemIndex]: null }));
    setMeasurements((prev) => ({ ...prev, [itemIndex]: "" }));
  };

  // Likes
const handleLikes = (itemIndex, item) => {
  const isLiked = !likedItems[itemIndex];

  // 1. update local liked state
  setLikedItems((prev) => ({
    ...prev,
    [itemIndex]: isLiked,
  }));

  // 2. update global likes separately
  setLikes((prevLikes) => {
    if (isLiked) {
      // ADD like only if it doesn't exist
      if (!prevLikes.some((like) => like.Title === item.Title)) {
        return [
          ...prevLikes,
          {
            Picture: item.Picture,
            size: selectedSizes[itemIndex] || measurements[itemIndex] || "",
            Title: item.Title,
            Price: item.Price,
          },
        ];
      }
      return prevLikes;
    } 
    
    // REMOVE if unliked
    return prevLikes.filter((like) => like.Title !== item.Title);
  });
};



  return (
    <div className="h-full flex flex-col overflow-hidden">
      {catalog.map((item, i) => (
        <div className="flex flex-col w-full gap-y-6" key={i}>

          {/* IMAGES */}
          <div className="flex w-full overflow-x-auto gap-4 py-2">
            {item.Picture.map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[23%] lg:w-[23%] flex-col">
                <img src={img} className="w-full h-auto rounded-md object-cover" />
              </div>
            ))}
          </div>

          {/* PRODUCT CARD */}
          <div className="pricecon flex flex-col md:flex-row bg-neutral-200 w-full paddy gap-6 rounded-md lato-thin">

            {/* TITLE + LIKE */}
            <div className="flex flex-col gap-6 md:w-1/3 ">
              <h1 className="text-sm uppercase lato-thin">{item.Title}</h1>
              <i
                className={`${
                  likedItems[i]
                    ? "fa-solid fa-heart fa-2xl text-red-500"
                    : "fa-regular fa-heart fa-xl text-[#202122]"
                } cursor-pointer`}
                onClick={() => handleLikes(i, item)}
              ></i>

              {/* PRICE */}
              <div className="price">
                <h2 className="text-2xl"> {`£ ${item.Price}`}</h2>
              </div>
            </div>

            {/* SIZES */}
            <div className="sizes flex flex-col gap-4 md:w-1/3 items-center">
              <h1 className="text-sm text-center lato-thin">SELECT YOUR SIZE</h1>
              <div className="standardprice flex flex-wrap justify-center gap-3">
                {sizes.map((size, idx) => (
                  <h2
                    key={idx}
                    onClick={() => handleSize(i, size)}
                    className={`flex items-center justify-center w-8 h-8 rounded-[10%] text-[16px] 
                      cursor-pointer transition-colors ${
                        selectedSizes[i] === size
                          ? "bg-black text-white"
                          : "hover:bg-white"
                      }`}
                  >
                    {size}
                  </h2>
                ))}
              </div>
            </div>

            {/* MEASUREMENT + SUBMIT */}
            <div className="flex flex-col gap-2 md:w-1/3 padit">
              <textarea
                rows={4}
                value={measurements[i] || ""}
                onChange={(e) => handleMeasurement(i, e.target.value)}
                className="lato-thin text-lg border border-gray-500  rounded-lg p-3 focus:outline-none focus:border-black focus:ring-1 "
                placeholder="You can also enter your measurements here..."
              />

              <button
                className="submit bg-red-500 text-white py-2 text-lg lato-thin h-[20px]"
                onClick={() => handleSubmit(item, i)}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ORDERS */}
      {/* {orders.length > 0 && (
        <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Your Orders</h2>

          {orders.map((orders, index) => (
            <div key={index} className="flex flex-col gap-2 border p-3 rounded-md">
              <div className="flex gap-3 overflow-x-auto">
                
                  <img  src={orders.Picture[index]} className="w-24 h-24 object-cover rounded" />
                
              </div>
              <div className="sizename flex gap-x-2">

                  <p className="text-sm text-gray-700">
                    <strong>Size/Measurement:</strong> {orders.size}
                  </p>
                  <h2 className="text-2xl"> {`$ ${orders.Price}`}</h2>

              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default Men;
