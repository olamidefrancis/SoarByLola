import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Images/logo1.jpeg";
import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { orders, likes } = useContext(StoreContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">

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
            <div className="w-8 h-8 rounded-full bg-[#e6d2ad] flex items-center justify-center">
              <FiUser className="text-[#141414] text-[15px]" />
            </div>

            <p className="text-[13px] font-medium text-[#141414] hover:text-[#d62828] transition">
              ACCOUNT
            </p>
          </div>

          {/* WISHLIST */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#e6d2ad] flex items-center justify-center">
                <FiHeart className="text-[#141414] text-[15px]" />
              </div>

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
              <div className="w-8 h-8 rounded-full bg-[#e6d2ad] flex items-center justify-center">
                <FiShoppingBag className="text-[#141414] text-[15px]" />
              </div>

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
              BAG
            </Link>
          </div>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden" onClick={toggleMenu}>
          <span className="text-3xl font-bold text-[#d62828] cursor-pointer">
            {menuOpen ? <h2>X</h2> : <h2>☰</h2>}
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

      {/* DARK OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-[280px] transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(214, 40, 40, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: "#ffffff",
          padding: "24px",
        }}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end">
          <span
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold text-white cursor-pointer hover:text-gray-200 transition"
          >
            ✕
          </span>
        </div>

        <div className="flex flex-col gap-6 mt-8">

          <Link to="/Orders" className="flex items-center gap-2 text-lg font-medium text-white">
            <FiUser className="text-xl" />
            ACCOUNT
          </Link>

          <Link to="/Wishlist" className="flex items-center gap-2 text-lg font-medium text-white">
            <FiHeart className="text-xl" />
            WISHLIST
            {likes.length >= 1 && (
              <span className="bg-white text-[#d62828] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {likes.length}
              </span>
            )}
          </Link>

          <Link to="/Orders" className="flex items-center gap-2 text-lg font-medium text-white">
            <FiShoppingBag className="text-xl" />
            BAG
            {orders.length >= 1 && (
              <span className="bg-white text-[#d62828] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {orders.length}
              </span>
            )}
          </Link>

          <div className="mt-6 border-t border-white/30 pt-4 flex flex-col gap-4">
            <Link to="/Men" className="text-lg text-white">WOMEN</Link>
            <Link to="/Men" className="text-lg text-white">MEN</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
