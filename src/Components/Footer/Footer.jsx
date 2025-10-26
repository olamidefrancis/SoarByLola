import './Footer.css'

const Footer = () => {
  return (

    // <footer id="frame-footer" className="">
    //     <div className="bg-red-500 flex justify-center p-16 ">
    //         <nav className="grid grid-cols-4 gap-x-5 w-[20%] border border-yellow-400">

                    
    //             <section className='flex flex-col items-center'>
    //                     <div className='flex flex-col items-start'>
                        
    //                         <h2 className="mb-2.5 font-rebrand-light text-sm uppercase text-rebrand-accent-100-contrast">
    //                             About Us
    //                         </h2>

    //                         <ul className="flex flex-col  list-none gap-3 p-0 w-full">
    //                             <li><a href="/about" id="11" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">About Us</a></li>
    //                             <li><a href="/diversity" id="13" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Diversity</a></li>
    //                             <li><a href="/students" id="15" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Students &amp; Graduates</a></li>
    //                             <li><a href="/essential-workers-discount" id="16" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Essential Workers Discount</a></li>
    //                             <li><a href="https://www.debenhamsgroup.com/sustainability/company-policies/#modern-slavery-statements" id="19" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Modern Slavery Statement</a></li>
    //                         </ul>
    //                     </div>
                    
    //             </section>

    //             <section className='flex flex-col items-center'>
    //                 <div className='flex flex-col items-start'>
    //                     <h2 className="mb-2.5 font-rebrand-light text-sm uppercase text-rebrand-accent-100-contrast">
    //                         Information
    //                     </h2>
    //                     <ul className="flex flex-col list-none gap-3 p-0 w-full">
    //                         <li><a href="/terms" id="21" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Terms &amp; Conditions</a></li>
    //                         <li><a href="/privacy-policy" id="22" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Privacy Policy</a></li>
    //                         <li><a href="/site-map" id="23" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Sitemap</a></li>
    //                         <li><a href="/plt-app-info" id="311" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">App Info</a></li>
    //                     </ul>

    //                 </div>
    //             </section>

    //             <section className='flex flex-col items-center'>
    //                 <div className='flex flex-col items-start'>
    //                     <h2 class="mb-2.5 font-rebrand-light text-sm uppercase text-rebrand-accent-100-contrast">
    //                         My Account
    //                     </h2>
    //                     <ul class="flex flex-col list-none gap-3 p-0 w-full">
    //                         <li><a href="/customer/order-history" rel="nofollow" id="25" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Order History</a></li>
    //                         <li><a href="/faq" id="26" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Track My Order</a></li>
    //                         <li><a href="/refer-a-friend" id="28" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Refer A Friend</a></li>
    //                         <li><a href="/cookies" id="382" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Cookies</a></li>
    //                     </ul>

    //                 </div>
    //             </section>

    //             <section className='flex flex-col items-center'>
    //                 <div className='flex flex-col items-start'>

    //                     <h2 className="mb-2.5 font-rebrand-light text-xl uppercase text-rebrand-accent-100-contrast">
    //                         Social
    //                     </h2>
    //                     <ul className="flex flex-col list-none gap-3 p-0 w-full">
    //                         <li><a href="https://instagram.com/prettylittlething" id="312" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Instagram</a></li>
    //                         <li><a href="https://facebook.com/OfficialPLT" id="313" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Facebook</a></li>
    //                         <li><a href="https://twitter.com/OfficialPLT" id="314" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">X</a></li>
    //                         <li><a href="https://tiktok.com/share/user/6590702127344386054" id="315" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">TikTok</a></li>
    //                         <li><a href="https://youtube.com/user/prettylittlethingtv" id="316" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">YouTube</a></li>
    //                     </ul>
    //                 </div>
    //             </section>

    //         </nav>

    //     </div>
    // </footer>

<footer id="frame-footer" className="bg-neutral-200 flex justify-center  pt-4">
  {/* Parent div = 60% width of footer */}
  <div className="w-[80%] flex justify-center paddy">
    {/* Nav occupies full width of parent */}
    <nav className="grid grid-cols-4 gap-x-5 w-full">
      
      {/* Section 1 */}
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-start gap-y-4">
          <h2 className="mb-2.5 font-rebrand-light text-xl uppercase text-rebrand-accent-100-contrast">
            About Us
          </h2>
          <ul className="flex flex-col list-none gap-3 p-0 w-full">
            <li><a href="/about" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">About Us</a></li>
            <li><a href="/diversity" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Diversity</a></li>
            <li><a href="/students" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Students &amp; Graduates</a></li>
            <li><a href="/essential-workers-discount" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Essential Workers Discount</a></li>
            <li><a href="https://www.debenhamsgroup.com/sustainability/company-policies/#modern-slavery-statements" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Modern Slavery Statement</a></li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-start gap-y-4">
          <h2 className="mb-2.5 font-rebrand-light text-xl uppercase text-rebrand-accent-100-contrast">
            Information
          </h2>
          <ul className="flex flex-col list-none gap-3 p-0 w-full">
            <li><a href="/terms" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Terms &amp; Conditions</a></li>
            <li><a href="/privacy-policy" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Privacy Policy</a></li>
            <li><a href="/site-map" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Sitemap</a></li>
            <li><a href="/plt-app-info" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">App Info</a></li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-start gap-y-4">
          <h2 className="mb-2.5 font-rebrand-light text-xl uppercase text-rebrand-accent-100-contrast">
            My Account
          </h2>
          <ul className="flex flex-col list-none gap-3 p-0 w-full">
            <li><a href="/customer/order-history" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Order History</a></li>
            <li><a href="/faq" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Track My Order</a></li>
            <li><a href="/refer-a-friend" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Refer A Friend</a></li>
            <li><a href="/cookies" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Cookies</a></li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-start gap-y-4">
          <h2 className="mb-2.5 font-rebrand-light text-xl uppercase text-rebrand-accent-100-contrast">
            Social
          </h2>
          <ul className="flex flex-col list-none gap-3 p-0 w-full">
            <li><a href="https://instagram.com/prettylittlething" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Instagram</a></li>
            <li><a href="https://facebook.com/OfficialPLT" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com/OfficialPLT" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">X</a></li>
            <li><a href="https://tiktok.com/share/user/6590702127344386054" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">TikTok</a></li>
            <li><a href="https://youtube.com/user/prettylittlethingtv" className="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">YouTube</a></li>
          </ul>
        </div>
      </section>

    </nav>
  </div>
</footer>

    
  )
}

export default Footer
