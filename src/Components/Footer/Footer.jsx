import './Footer.css'
import React, { useState, useEffect } from "react";
import logo from '../../assets/Images/logo1.jpeg';
import { Link } from "react-router";

const Footer = () => {

  const [logoOpen, setFooterLogo] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setFooterLogo(!logoOpen);
      } else {
        setFooterLogo(logoOpen);
      }
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
<div>
    {logoOpen ? 
      <div className='flex flex-col bg-[#fdfaf5] gap-2'>
        <figure className='w-[full] h-[150px] flex items-center justify-center'>
            <img src={logo} alt="logo" className='w-[80px] h-[80px] rounded-full object-cover ' />
        </figure>

        <div className='flex justify-center w-full gap-4 hover:text-gray-800'>
          <Link to="/About" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">About Us</Link>
          
          <ul className="flex  list-none gap-4 p-0 ">
                    <li><a href="https://www.instagram.com/shopsoar.co?igsh=N2ZnenMzNW51N3Zw&utm_source=qr" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">Instagram</a></li>
                    <li><a href="  https://www.facebook.com/share/1Eiie1KBvj/?mibextid=wwXIfr" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">Facebook</a></li>
                    <li><a href="https://x.com/wearsoar?s=21" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">X</a></li>
                    <li><a href="https://www.tiktok.com/@wear_soar?_t=ZS-90txfj9ddGS&_r=1" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">TikTok</a></li>
                    <li><a href="https://pin.it/5PTT11Ph3" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">PIntrest</a></li>
          </ul>

        </div>

        <div className="flex w-full justify-center text-[13px] font-normal text-gray-500  ">
                        <p>&copy; <span id="copyright-year">{ new Date().getFullYear()} </span ><span className='font-[Dancing_Script,cursive] text-xl'>Soar_by_Lola</span>.  All Rights Reserved.</p>
        </div>

      </div>

     :

        <footer id="frame-footer" className="bg-[#fdfaf5] flex justify-center paddyx2">
        
          <div className="w-[80%] flex flex-col gap-y-8 items-center paddy sm:w-[80%] w-full bg-[#fdfaf5]">

            
            <div className="grid grid-cols-4 gap-x-5 w-full bg-[#fdfaf5]">
              
            
              <section className="flex flex-col items-center">
                <div className="flex flex-col items-start gap-y-4">
                  <h2 className="mb-2.5  text-xl font-semibold uppercase text-gray-800">
                    About Us
                  </h2>
                  <ul className="flex flex-col list-none gap-3 p-0 w-full">
                    <li><Link to="/About"  className="text-[13px] font-normal text-gray-500 hover:text-gray-800">About Us</Link></li>
                  </ul>
                </div>
              </section>

            
              <section className="flex flex-col items-center">
                <div className="flex flex-col items-start gap-y-4">
                  <h2 className="mb-2.5  text-xl font-semibold uppercase text-gray-800">
                    Information
                  </h2>
                  <ul className="flex flex-col list-none gap-3 p-0 w-full">
                    <li><a href="/terms" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">Terms &amp; Conditions</a></li>
                  
                  </ul>
                </div>
              </section>

            
              <section className="flex flex-col items-center">
                <div className="flex flex-col items-start gap-y-4">
                  <h2 className="mb-2.5  text-xl font-semibold uppercase text-gray-800">
                    Account
                  </h2>
                  <ul className="flex flex-col list-none gap-3 p-0 w-full">
                    <li><Link to="/History" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">Order History</Link></li>
                  </ul>
                </div>
              </section>

          
              <section className="flex flex-col items-center">
                <div className="flex flex-col items-start gap-y-4">
                  <h2 className="mb-2.5  text-xl font-semibold uppercase text-gray-800">
                    Social
                  </h2>
                  <ul className="flex flex-col list-none gap-3 p-0 w-full">
                    <li><a href="https://www.instagram.com/shopsoar.co?igsh=N2ZnenMzNW51N3Zw&utm_source=qr" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">Instagram</a></li>
                    <li><a href="  https://www.facebook.com/share/1Eiie1KBvj/?mibextid=wwXIfr" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">Facebook</a></li>
                    <li><a href="https://x.com/wearsoar?s=21" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">X</a></li>
                    <li><a href="https://www.tiktok.com/@wear_soar?_t=ZS-90txfj9ddGS&_r=1" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">TikTok</a></li>
                    <li><a href="https://pin.it/5PTT11Ph3" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">PIntrest</a></li>
                  </ul>
                </div>
              </section>

            </div>

            <div className="flex w-full justify-center text-[13px] font-normal text-gray-500  ">
                    <p>&copy; <span id="copyright-year">{ new Date().getFullYear()} </span ><span className='font-[Dancing_Script,cursive] text-xl'>Soar_by_Lola</span>.  All Rights Reserved.</p>
            </div>

        
          </div>

          
        </footer>

        

    }



</div>   
  )
}

export default Footer












