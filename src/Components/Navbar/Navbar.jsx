import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router";
import "./Navbar.css";
import orderBasket from "../../assets/Images/icons8-order-cute-outline-96.png";
import profile from "../../assets/Images/icons8-account-96.png";
import wishlist from "../../assets/Images/icons8-love-96.png";
import logo from "../../assets/Images/logo1.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { orders, likes } = useContext(StoreContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 ">

      {/* MAIN HEADER */}
      <div className="flex items-center justify-between px-4 py-3 md:px-10 bg-[#f2e6c8] navpad">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <figure>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[50px] w-[50px] rounded-full object-cover shadow"
              />
            </Link>
          </figure>

          <h1
            className="text-sm md:text-lg tracking-[3px]"
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#141414",
            }}
          >
            SOAR_BY_LOLA
          </h1>
        </div>

        {/* ICON BAR */}
        <div className="hidden md:flex items-center gap-6">

          {/* ACCOUNT */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={profile} alt="account" className="w-[20px] h-[20px]" />
            <p className="text-[13px] font-medium text-[#141414] hover:text-[#d62828] transition">
              ACCOUNT
            </p>
          </div>

          {/* WISHLIST */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <img src={wishlist} alt="wishlist" className="w-[20px] h-[20px]" />

              {likes.length >= 1 && (
                <span className="absolute -top-2 -right-2 bg-[#d62828] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {likes.length}
                </span>
              )}
            </div>

            <Link
              to="/Wishlist"
              className="text-[13px] font-medium text-[#141414] hover:text-[#d62828] transition"
            >
              WISHLIST
            </Link>
          </div>

          {/* ORDERS */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <img src={orderBasket} alt="order" className="w-[20px] h-[20px]" />

              {orders.length >= 1 && (
                <span className="absolute -top-2 -right-2 bg-[#d62828] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {orders.length}
                </span>
              )}
            </div>

            <Link
              to="/Orders"
              className="text-[13px] font-medium text-[#141414] hover:text-[#d62828] transition"
            >
              ORDER
            </Link>
          </div>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden" onClick={toggleMenu}>
          <span className="text-2xl font-bold text-[#d62828] cursor-pointer">
            {menuOpen ? "✕" : "☰"}
          </span>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className="bg-[#fdfaf5] border-t border-gray-200 py-2 flex justify-center gap-10 h-[30px] navpad">
        <Link
          to="/Men"
          className="text-lg tracking-[2px] font-medium text-[#141414] hover:text-[#d62828] transition"
        >
          WOMEN
        </Link>
        <Link
          to="/Men"
          className="text-lg tracking-[2px] font-medium text-[#141414] hover:text-[#d62828] transition "
        >
          MEN
        </Link>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[280px] transform transition-transform navpad duration-300 ${
          menuOpen ? "translate-x-0 navpad" : "translate-x-full navpad"
        }`}
        style={{
          background: "#ffffff",
          color: "#141414",
          padding: "24px",
          boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="flex flex-col gap-6 mt-10">
          <Link to="/Orders" className="text-lg font-medium">
            ACCOUNT
          </Link>

          <Link to="/Wishlist" className="flex items-center gap-2 text-lg font-medium">
            WISHLIST
            {likes.length >= 1 && (
              <span className="bg-[#d62828] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {likes.length}
              </span>
            )}
          </Link>

          <Link to="/Orders" className="flex items-center gap-2 text-lg font-medium">
            ORDER
            {orders.length >= 1 && (
              <span className="bg-[#d62828] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {orders.length}
              </span>
            )}
          </Link>

          <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col gap-4">
            <Link to="/Men" className="text-lg">WOMEN</Link>
            <Link to="/Men" className="text-lg">MEN</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
