import './Footer.css'

const Footer = () => {
  return (


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

    
  )
}

export default Footer
