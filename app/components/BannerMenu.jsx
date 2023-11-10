import Image from "next/image";
import Link from "next/link";
import fondo from "public/assets/fondocomidas.webp";

import menuIcon from "public/assets/iconos/bar.png";

const BannerMenu = () => {
  return (
    <div className="w-full flex flex-col gap-2 content-center mt-5 mb-6 pt-24 pb-32 items-center text-center "  >
      
      <div className="relative text-neutral-100 text-3xl flex mt-4 font-normal">
        NOMBRE DEL NEGOCIO
      </div>
      <div className="w-44 h-44 flex drop-shadow-lg bg-zinc-300 bg-opacity-50 rounded-full backdrop-blur-sm">
        <Image
          priority={true}
          className="w-full aspect-auto object-cover object-center rounded-full"
          alt="logo de la empresa"
          src={fondo}
        />
      </div>

      <div className="  relative text-center flex text-[#F7AD1A] mt-5 mb-6 text-sm font-normal ">
        SLOGAN
      </div>
      <Link href={''} className="w-60 sm:w-72 bg-[#3C3C3C] mx-auto h-16 bg-opacity-95 rounded shadow border-2 text-center flex flex-wrap justify-center  text-[#F7AD1A] text-xl font-normal   transform transition-all  ring-[#F7AD1A] hover:ring-1 hover:scale-110 duration-300 ring-opacity-20 border-opacity-25 group-focus:border-2  hover:border-opacity-80 border-[#F7AD1A]">
        {" "}
        <Image
          alt="icono menu"
          className="w-14 h-14  aspect-auto my-auto"
          src={menuIcon}
        />
        <p className="my-auto">IR AL MENÚ</p>
      </Link>
    </div>
  );
};

export default BannerMenu;
