import Image from "next/image"
import fondo from "public/assets/fondocomidas.webp"
import menuIcon from "public/assets/iconos/bar.png"

const BannerMenu = () => {
  return (
    <div style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      
      
    }} alt="bgcomidas" className={`w-full aspect-auto flex flex-col gap-2 content-center mt-5 mb-6 pt-24 pb-32 items-center bg-cover bg-center text-center `}>
    <div className="relative text-neutral-100 text-3xl flex mt-4 font-normal">NOMBRE DEL NEGOCIO</div>
    <div className="w-44 h-44 flex  bg-zinc-300 bg-opacity-50 rounded-full backdrop-blur-sm"></div>
   
    
    
    
    <div className="  relative text-center flex text-amber-400 mt-5 mb-6 text-sm font-normal ">SLOGAN</div>
    <button className="w-72 h-16 bg-opacity-95 rounded shadow border-2 text-center flex flex-wrap justify-center hover:text-amber-600 text-amber-400 text-xl font-normal hover:border-amber-600 border-amber-400"> <Image alt="icono menu" className="w-14 h-14 my-auto" src={menuIcon} />
    <p className="my-auto">IR AL MENÚ</p>
    </button>
    </div>
  )
}

export default BannerMenu