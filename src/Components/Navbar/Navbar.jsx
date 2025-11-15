import React, { useState } from 'react'
import { Link } from 'react-router'
import './Navbar.css'
import orderBasket from "../../assets/Images/icons8-order-cute-outline-96.png"
import profile from "../../assets/Images/icons8-account-96.png"
import wishlist from "../../assets/Images/icons8-love-96.png"
import logo from '../../assets/Images/logo1.jpeg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className='flexy'>
            <div className="companyName-personal flexy">
                <figure className='flex items-center justify-center figcon'>
                            <img src={logo} alt="logo" className='lolalogo' />
                 </figure>

                <div className="companyName-personal__companyName">
                    <h1 >SOAR_by_LOLA</h1>
                </div>

                {/* Hamburger icon for small screens */}
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? (
                        <span style={{ fontSize: "1.8rem", cursor: "pointer" }}
                            className='text-red-700'
                        >✕</span>
                    ) : (
                        <span style={{ fontSize: "1.8rem", cursor: "pointer" }}className='text-red-700'>☰</span>
                    )}
                </div>

                <div className="companyName-personal__personal flexy">
                    <div className="companyName-personal__personal__account flexyccgap">
                        <img src={profile} alt="account" style={{ width: "20px", height: "20px" }} />
                        <p className="text-[13px] font-normal text-gray-500 hover:text-red-600">ACCOUNT</p>
                    </div>

                    <div className="companyName-personal__personal__wishlist flexyccgap">
                        <img src={wishlist} alt="wishlist" style={{ width: "20px", height: "20px" }} />
                        <p className="text-[13px] font-normal text-gray-500 hover:text-red-600">WISHLIST</p>
                    </div>

                    <div className="companyName-personal__personal__order flexyccgap">
                        <img src={orderBasket} alt="order" style={{ width: "20px", height: "20px" }} />
                        <p className="text-[13px] font-normal text-gray-500 hover:text-red-600">ORDER</p>
                    </div>
                </div>
            </div>

            <div className="categories flexy">
                <Link to='/Orders'>WOMEN</Link>
                <Link to='/Men'>MEN</Link>
            </div>

            {/* Sidebar menu for mobile */}
            <div className={`mobile-menu-sidebar ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu__item">ACCOUNT</div>
                <div className="mobile-menu__item">WISHLIST</div>
                <div className="mobile-menu__item">ORDER</div>
                <Link to='/Orders' className="mobile-menu__item">WOMEN</Link>
                <Link to='/Men'  className="mobile-menu__item">MEN</Link>
            </div>
        </nav>
    )
}

export default Navbar
