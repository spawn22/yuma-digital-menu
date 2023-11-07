'use client'

import { useEffect, useState } from "react"
import BannerMenu from "../components/BannerMenu.jsx"
import Footer from "../components/Footer.jsx"
import Nav from "../components/Nav.jsx"

const page = () => {
  
  const [navMobile, setNavMobile] = useState(false);
  
  const handleNav = () => {
    if (navMobile) {
      setNavMobile(false);
    } 
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setNavMobile(true)
      }
      else {
        setNavMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    

<div style= {{ backgroundImage: `${navMobile?"url('/assets/fondocomidas1.png')":"url('/assets/fondocomidas2.png')"}`,
  }} className="bg-blend-multiply bg-inherit w-full aspect-auto bg-no-repeat bg-cover bg-center flex flex-col">
    
    <Nav/>
    
    
    <BannerMenu/>
   
   
    
    <Footer/>
    
</div>

  )
  
}

export default page