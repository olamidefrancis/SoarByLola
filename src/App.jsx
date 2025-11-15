import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Cloths from './Components/Clothclassification/Cloths'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
import Men from './Components/Men/Men'
import OrdersPage from './Components/OrdersPage/OrdersPage'
import { createBrowserRouter, RouterProvider } from "react-router"

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
 }

 
 
])

function App() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default App
