import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Cloths from './Components/Clothclassification/Cloths'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
import Men from './Components/Men/Men'
import OrdersPage from './Components/OrdersPage/OrdersPage'
import Wishlist from './Components/Wishlist/Wishlist'
import { createBrowserRouter, RouterProvider } from "react-router"
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login'
import About from './Components/About/About'
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
  path:'/',
  element: <div>
                <Navbar/>
                <Hero/>
                <Cloths/>
                <Carousel/> 
                <Footer/>
              
           </div>,
  errorElement: <div>404 Page not found</div>
 },

 {
  path:'/Men',
  element: <div>
                <Navbar/>
                <Toaster position="top-right" reverseOrder={false} />
                <Men/>
           </div>,
  errorElement: <div>404 Page not found</div>
 },

 {
  path:'/Orders',
  element: <div>
                <Navbar/>
                <OrdersPage/>
           </div>,
  errorElement: <div>404 Page not found</div>
 },
 {
  path:'/Wishlist',
  element: <div>
                <Navbar/>
                <Toaster position="top-right" reverseOrder={false} />
                <Wishlist/>
           </div>,
  errorElement: <div>404 Page not found</div>
 },
  {
  path:'/Checkout',
  element: <div>
                <Navbar/>
                <Checkout/>
           </div>,
  errorElement: <div>404 Page not found</div>
 },

 {
  path:'/Login',
  element: <div>
                <Navbar/>
                 <Login/> 
           </div>,
  errorElement: <div>404 Page not found</div>
 },

  {
  path:'/About',
  element: <div>
                <Navbar/>
                 <About/> 
           </div>,
  errorElement: <div>404 Page not found</div>
 }


 
 
])

function App() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default App
