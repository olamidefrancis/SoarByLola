import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
  path:'/',
  element: <div>
                <Navbar/>
                <Hero/>
                <Carousel/>
                <Footer/>
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
