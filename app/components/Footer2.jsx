import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import logoFoot from "public/assets/YUMA-logos_transparentenasdasd.webp"
import faceLogo from "public/assets/iconos/fb.svg";
import igLogo from "public/assets/iconos/ig.svg";
import xLogo from "public/assets/iconos/icons8-twitterx-48.svg";
const Footer2 = () => {
  return (
    <section>

<div className="w-full py-1 shadow-inner bottom-0 left-0 right-0  bg-[#3C3C3C]  fixed justify-between flex-wrap flex">
      <div className="text-center w-1/3 flex-wrap flex-grow text-zinc-100 text-opacity-70 ">
        
        <Image alt="logo YUMA landing" priority={true} className="w-[9.5rem]  aspect-auto " src={logoFoot} />
      </div>
      <div className="text-amber-400  text-xs flex-wrap  flex-grow bottom-0 fixed text-center w-full font-normal">© 2023 YUMA. Todos los derechos reservados</div>
      <div className="w-1/3 flex justify-end flex-wrap  flex-grow fle gap-2  mr-4">
        <div className="w-10 my-auto h-10">
          <Image className=" w-full h-full my-auto" alt="logo fb" src={faceLogo} />
        </div>
        <div className="w-10 my-auto h-10">
          <Image className="w-full h-full my-auto" alt="logo ig" src={igLogo} />
        </div>
        <div className="w-10 my-auto h-10">
         <Link href={''}> <Image className=" w-full h-full my-auto scale-125" alt="logo x" src={xLogo} /></Link> 
        </div>
      </div>
      
  
    </div>
    
    </section>

  )
}

export default Footer2