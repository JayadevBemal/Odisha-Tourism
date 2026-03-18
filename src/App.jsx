import { Outlet,useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useEffect } from "react"

function App() {
  
   const location = useLocation()
    useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
    <Navbar></Navbar>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default App
