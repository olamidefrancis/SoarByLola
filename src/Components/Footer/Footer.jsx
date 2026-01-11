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
                    <li><a href="/customer/order-history" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">Order History</a></li>
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

















// import React, { useState, useEffect } from "react"
// import logo from "../../assets/Images/logo1.jpeg"

// export default function Footer() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 500)

//   useEffect(() => {
//     const resize = () => setIsMobile(window.innerWidth <= 500)
//     window.addEventListener("resize", resize)
//     return () => window.removeEventListener("resize", resize)
//   }, [])

//   return (
//     <footer className="w-full bg-[#fdfaf5] border-t border-[#e5e2dc]">

//       {/* ================= MOBILE VIEW ================= */}
//       {isMobile ? (
//         <div className="flex flex-col items-center justify-center py-14 gap-6 px-4">

//           <img
//             src={logo}
//             alt="Soar by Lola"
//             className="w-28 h-28 rounded-full object-cover shadow-lg border border-[#e5e2dc]"
//           />

//           <h1 className="text-lg tracking-[3px] font-semibold text-[#141414]">
//             SOAR BY LOLA
//           </h1>

//           <div className="flex gap-6 text-sm text-[#5a5a5a]">
//             <a href="#" className="hover:text-[#b8903e] transition">Instagram</a>
//             <a href="#" className="hover:text-[#b8903e] transition">Facebook</a>
//             <a href="#" className="hover:text-[#b8903e] transition">X</a>
//           </div>

//           <p className="text-xs text-[#5a5a5a] mt-3">
//             © {new Date().getFullYear()} Soar by Lola
//           </p>
//         </div>
//       ) : (

//       /* ================= DESKTOP VIEW ================= */
//       <div className="w-full px-4 md:px-16 lg:px-32 py-16">

//         {/* Logo Section */}
//         <div className="flex flex-col items-center mb-16">
//           <img
//             src={logo}
//             alt="Soar by Lola"
//             className="w-24 h-24 rounded-full shadow-md border border-[#e5e2dc]"
//           />

//           <h2 className="mt-4 text-xl tracking-[4px] text-[#141414]">
//             SOAR BY LOLA
//           </h2>
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm text-[#5a5a5a]">

//           {/* About */}
//           <div>
//             <h3 className="text-[#141414] font-semibold tracking-wider mb-5">ABOUT</h3>
//             <ul className="space-y-3">
//               <li><a className="hover:text-[#b8903e]" href="#">Our Story</a></li>
//             </ul>
//           </div>

//           {/* Info */}
//           <div>
//             <h3 className="text-[#141414] font-semibold tracking-wider mb-5">INFO</h3>
//             <ul className="space-y-3">
//               <li><a className="hover:text-[#b8903e]" href="#">Terms & Conditions</a></li>
//             </ul>
//           </div>

//           {/* Account */}
//           <div>
//             <h3 className="text-[#141414] font-semibold tracking-wider mb-5">ACCOUNT</h3>
//             <ul className="space-y-3">
//               <li><a className="hover:text-[#b8903e]" href="#">Order History</a></li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div>
//             <h3 className="text-[#141414] font-semibold tracking-wider mb-5">SOCIAL</h3>
//             <ul className="space-y-3">
//               <li><a className="hover:text-[#b8903e]" href="#">Instagram</a></li>
//               <li><a className="hover:text-[#b8903e]" href="#">Facebook</a></li>
//               <li><a className="hover:text-[#b8903e]" href="#">X</a></li>
//               <li><a className="hover:text-[#b8903e]" href="#">TikTok</a></li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Area */}
//         <div className="mt-14 border-t border-[#e5e2dc] pt-6 text-center text-xs text-[#5a5a5a]">
//           © {new Date().getFullYear()}  
//           <span className="text-[#141414] ml-1">Soar by Lola</span>. All rights reserved.
//         </div>

//       </div>
//       )}

//     </footer>
//   )
// }

