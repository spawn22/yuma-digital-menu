import Image from "next/image"
import logoNav from "/public/assets/YUMA-logos_transparentenasdasd.webp"
import BotonHamburguesa from "./BotonHamburguesa"

const Nav = () => {
  return (
    <div className="w-full flex justify-between top-0 absolute bg-[#3C3C3C] shadow-md ">
    <div className="flex"><Image  alt="logo de YUMA" priority={true}  className="w-52 h-20  top-0 " src={logoNav} /></div>
    
        
       <BotonHamburguesa/>
    </div>
  )
}

export default Nav