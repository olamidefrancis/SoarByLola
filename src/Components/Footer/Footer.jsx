import './Footer.css'

const Footer = () => {
  return (
    // <footer className="bg-white dark:bg-gray-900 w-full">
    //   <div className="mx-auto w-full  p-4 py-6 lg:py-8 flex flex-col gap-8 items-center " > 
    //     {/* gap-8 = 2rem row gap */}

    //     <div className="md:flex md:justify-center w-full ">
        
          
    //       <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 w-full">
    //         <div>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
    //           <ul className="text-gray-500 dark:text-gray-400 font-medium">
    //             <li className="mb-4">
    //               <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
    //             </li>
    //             <li>
    //               <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
    //             </li>
    //           </ul>
    //         </div>

    //         <div>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
    //           <ul className="text-gray-500 dark:text-gray-400 font-medium">
    //             <li className="mb-4">
    //               <a href="https://github.com/themesberg/flowbite" className="hover:underline">Github</a>
    //             </li>
    //             <li>
    //               <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
    //             </li>
    //           </ul>
    //         </div>

    //         <div className='flex  items-center flex-col'>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
    //           <ul className="text-gray-500 dark:text-gray-400 font-medium">
    //             <li className="mb-4">
    //               <a href="#" className="hover:underline">Privacy Policy</a>
    //             </li>
    //             <li>
    //               <a href="#" className="hover:underline">Terms &amp; Conditions</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>

    //     <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

    //     <div className="sm:flex sm:items-center sm:justify-between">
    //       <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
    //         © 2025 <a href="#" className="hover:underline">Your Company™</a>. All Rights Reserved.
    //       </span>
    //       <div className="flex mt-4 sm:justify-center sm:mt-0">
    //         {/* Social Icons */}
    //         <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    //           <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    //             <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
    //           </svg>
    //           <span className="sr-only">Facebook page</span>
    //         </a>

    //         <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
    //           <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
    //             <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3..." />
    //           </svg>
    //           <span className="sr-only">Discord</span>
    //         </a>
    //       </div>
    //     </div>
        //  bg-rebrand-accent-100
    //   </div>
    // </footer>
    <footer id="frame-footer" className="grid gap-5  pb-5 lg:px-5 lg:pb-6 lg:pt-16 bg-red-500">
        <nav class="mx-auto grid grid-flow-col grid-cols-[repeat(auto-fit,minmax(max-content,1fr))] gap-x-16">

                {/* <section>
                    <h2 class="mb-2.5 font-rebrand-light text-sm uppercase text-rebrand-accent-100-contrast">Let Us Help You</h2>
                    <ul class="grid list-none gap-3 p-0">
                        <li class="max-w-36"><a href="/faq" id="1" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Help</a></li>
                        <li class="max-w-36"><a href="/returns-policy" id="2" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Returns</a></li>
                        <li class="max-w-36"><a href="/size-guide" id="3" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Size Guide</a></li>
                        <li class="max-w-36"><a href="/delivery-information" id="4" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Delivery</a></li>
                        <li class="max-w-36"><a href="/royalty" id="380" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Royalty</a></li>
                        <li class="max-w-36"><a href="/giftcards" id="6" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Gift Cards</a></li>
                        <li class="max-w-36"><a href="/clearpay" id="8" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Clearpay</a></li>
                        <li class="max-w-36"><a href="/klarna" id="9" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Klarna</a></li>
                        <li class="max-w-36"><a href="/paypal" id="10" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">PayPal</a></li>
                    </ul>
                </section> */}
            <section className='flex flex-col items-center'>
            <h2 class="mb-2.5 font-rebrand-light text-sm uppercase text-rebrand-accent-100-contrast">
                About Us
            </h2>
            <ul class="flex flex-col items-center list-none gap-3 p-0 w-full">
                <li><a href="/about" id="11" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">About Us</a></li>
                <li><a href="/diversity" id="13" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Diversity</a></li>
                <li><a href="/students" id="15" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Students &amp; Graduates</a></li>
                <li><a href="/essential-workers-discount" id="16" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Essential Workers Discount</a></li>
                <li><a href="https://www.debenhamsgroup.com/sustainability/company-policies/#modern-slavery-statements" id="19" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Modern Slavery Statement</a></li>
            </ul>
            </section>

            <section className='flex flex-col items-center'>
            <h2 class="mb-2.5 font-rebrand-light text-sm uppercase text-rebrand-accent-100-contrast">
                Information
            </h2>
            <ul class="flex flex-col items-center list-none gap-3 p-0 w-full">
                <li><a href="/terms" id="21" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Terms &amp; Conditions</a></li>
                <li><a href="/privacy-policy" id="22" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Privacy Policy</a></li>
                <li><a href="/site-map" id="23" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Sitemap</a></li>
                <li><a href="/plt-app-info" id="311" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">App Info</a></li>
            </ul>
            </section>

            <section className='flex flex-col items-center'>
            <h2 class="mb-2.5 font-rebrand-light text-sm uppercase text-rebrand-accent-100-contrast">
                My Account
            </h2>
            <ul class="flex flex-col items-center list-none gap-3 p-0 w-full">
                <li><a href="/customer/order-history" rel="nofollow" id="25" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Order History</a></li>
                <li><a href="/faq" id="26" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Track My Order</a></li>
                <li><a href="/refer-a-friend" id="28" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Refer A Friend</a></li>
                <li><a href="/cookies" id="382" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Cookies</a></li>
            </ul>
            </section>

            <section className='flex flex-col items-center'>
            <h2 class="mb-2.5 font-rebrand-light text-sm uppercase text-rebrand-accent-100-contrast">
                Social
            </h2>
            <ul class="flex flex-col items-center list-none gap-3 p-0 w-full">
                <li><a href="https://instagram.com/prettylittlething" id="312" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Instagram</a></li>
                <li><a href="https://facebook.com/OfficialPLT" id="313" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">Facebook</a></li>
                <li><a href="https://twitter.com/OfficialPLT" id="314" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">X</a></li>
                <li><a href="https://tiktok.com/share/user/6590702127344386054" id="315" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">TikTok</a></li>
                <li><a href="https://youtube.com/user/prettylittlethingtv" id="316" class="font-rebrand-light text-xs capitalize text-rebrand-base-400 hover:underline">YouTube</a></li>
            </ul>
            </section>

        </nav>
    </footer>
  )
}

export default Footer
