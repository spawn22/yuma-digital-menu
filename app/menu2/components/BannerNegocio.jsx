import React from 'react'
import fondo from "../../../public/assets/fondocomidas.webp"
import Image from 'next/image'

const BannerNegocio = () => {
  return (
    <div className="w-full  flex  content-center mt-5 mb-6 justify-between md:justify-center md:gap-2 pb-1 items-center text-center "  >
       <div className="w-[100px] mx- h-[100px] md:w-44 md:h-44 flex drop-shadow-lg bg-zinc-300 bg-opacity-50 rounded-full backdrop-blur-sm">
      <Image
        priority={true}
        className="w-full aspect-auto object-cover  drop-shadow-lg object-center rounded-full "
        alt="logo de la empresa"
        src={fondo}
      />
    </div>
    <div className="relative mr-2 drop-shadow-xl text-[#f5f5f5] text-3xl flex mt-4 font-normal">
      NOMBRE DEL NEGOCIO
    </div>
   
    </div>
  )
}

export default BannerNegocio