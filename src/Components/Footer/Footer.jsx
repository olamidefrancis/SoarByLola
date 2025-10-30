import './Footer.css'
import React, { useState, useEffect } from "react";
import logo from '../../assets/Images/logo1.jpeg'

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
      <div className='flex flex-col'>
        <figure className='w-[full] h-[200px] flex items-center justify-center'>
            <img src={logo} alt="logo" className='w-[100px] h-[100px] rounded-full object-cover ' />
        </figure>

        <div className="flex w-full justify-center text-[13px] font-normal text-gray-500  ">
                        <p>&copy; <span id="copyright-year">{ new Date().getFullYear()} </span ><span className='font-[Dancing_Script,cursive] text-xl'>Soar_by_Lola</span>.  All Rights Reserved.</p>
        </div>

      </div>

     :

        <footer id="frame-footer" className="bg-neutral-200 flex justify-center pt-4">
        
          <div className="w-[80%] flex flex-col gap-y-8 items-center paddy sm:w-[80%] w-full">

            
            <nav className="grid grid-cols-4 gap-x-5 w-full">
              
            
              <section className="flex flex-col items-center">
                <div className="flex flex-col items-start gap-y-4">
                  <h2 className="mb-2.5  text-xl font-semibold uppercase text-gray-800">
                    About Us
                  </h2>
                  <ul className="flex flex-col list-none gap-3 p-0 w-full">
                    <li><a href="/about" className="text-[13px] font-normal text-gray-500 hover:text-gray-800">About Us</a></li>
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

            </nav>

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

// import './Footer.css'
// import React, { useState, useEffect } from "react";

// export default function Footer() {
//   const [logoOpen, setFooterLogo] = useState(false);

//   // Detect screen size on mount and resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 500) {
//         setFooterLogo(true);
//       } else {
//         setFooterLogo(false);
//       }
//     };

//     handleResize(); // run once on load
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Toggle manually if you also want a button to test
//   // const footerLogo = () => setFooterLogo(!logoOpen);

//   return (
//     <footer className="bg-gray-100 py-10 px-6">
//       {/* Optional toggle button for testing */}
//       {/* <button onClick={footerLogo} className="bg-blue-500 text-white px-3 py-1 rounded mb-4">Toggle</button> */}

//       {logoOpen ? (
//         <p className="text-center text-xl font-bold text-gray-800">LOGO</p>
//       ) : (
//         <nav className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 w-full text-left">
//           {/* ABOUT US */}
//           <section className="flex flex-col items-start">
//             <h2 className="mb-2.5 text-xl font-semibold uppercase text-gray-800">
//               About Us
//             </h2>
//             <ul className="flex flex-col gap-3">
//               <li>
//                 <a
//                   href="/about"
//                   className="text-[13px] font-normal text-gray-500 hover:text-gray-800"
//                 >
//                   About Us
//                 </a>
//               </li>
//             </ul>
//           </section>

//           {/* INFORMATION */}
//           <section className="flex flex-col items-start">
//             <h2 className="mb-2.5 text-xl font-semibold uppercase text-gray-800">
//               Information
//             </h2>
//             <ul className="flex flex-col gap-3">
//               <li>
//                 <a
//                   href="/terms"
//                   className="text-[13px] font-normal text-gray-500 hover:text-gray-800"
//                 >
//                   Terms &amp; Conditions
//                 </a>
//               </li>
//             </ul>
//           </section>

//           {/* ACCOUNT */}
//           <section className="flex flex-col items-start">
//             <h2 className="mb-2.5 text-xl font-semibold uppercase text-gray-800">
//               Account
//             </h2>
//             <ul className="flex flex-col gap-3">
//               <li>
//                 <a
//                   href="/customer/order-history"
//                   className="text-[13px] font-normal text-gray-500 hover:text-gray-800"
//                 >
//                   Order History
//                 </a>
//               </li>
//             </ul>
//           </section>

//           {/* SOCIAL */}
//           <section className="flex flex-col items-start">
//             <h2 className="mb-2.5 text-xl font-semibold uppercase text-gray-800">
//               Social
//             </h2>
//             <ul className="flex flex-col gap-3">
//               <li>
//                 <a
//                   href="https://www.instagram.com/shopsoar.co"
//                   className="text-[13px] font-normal text-gray-500 hover:text-gray-800"
//                 >
//                   Instagram
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.facebook.com/share/1Eiie1KBvj/?mibextid=wwXIfr"
//                   className="text-[13px] font-normal text-gray-500 hover:text-gray-800"
//                 >
//                   Facebook
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://x.com/wearsoar?s=21"
//                   className="text-[13px] font-normal text-gray-500 hover:text-gray-800"
//                 >
//                   X
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.tiktok.com/@wear_soar"
//                   className="text-[13px] font-normal text-gray-500 hover:text-gray-800"
//                 >
//                   TikTok
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://pin.it/5PTT11Ph3"
//                   className="text-[13px] font-normal text-gray-500 hover:text-gray-800"
//                 >
//                   Pinterest
//                 </a>
//               </li>
//             </ul>
//           </section>
//         </nav>
//       )}
//     </footer>
//   );
// }
