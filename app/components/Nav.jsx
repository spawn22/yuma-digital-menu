import Image from "next/image"
import logoNav from "/public/assets/YUMA-logos_transparentenasdasd.webp"

const Nav = () => {
  return (
    <div className="w-full flex justify-between top-0 absolute bg-[#3C3C3C] shadow-md ">
    <div className="flex"><Image  alt="logo de YUMA" priority={true}  className="w-52 h-20  top-0 " src={logoNav} /></div>
    
            <div className="w-14 h-16 top-0 flex relative shadow-md mix-blend-normal rounded-sm mr-4">
            <div className="w-6 h-[0px] left-4 top-6 absolute shadow-sm border-2 border-[#F7AD1A]"></div>
            <div className="w-6 h-[0px] left-4 top-9 absolute shadow-sm border-2 border-[#F7AD1A]"></div>
            <div className="w-6 h-[0px] left-4 top-12 absolute shadow-sm border-2 border-[#F7AD1A]"></div>
            </div>
       
        
       
    </div>
  )
}

export default Nav