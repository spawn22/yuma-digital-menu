import Image from "next/image";
import logoYumaPalabra from "public/assets/YUMA-logos_transparentenasdasd-solo_yuma.png";
import faceLogo from "public/assets/iconos/fb.svg";
import igLogo from "public/assets/iconos/ig.svg";
import xLogo from "public/assets/iconos/icons8-twitterx-48.svg";

const Footer = () => {
  return (
    <div className="w-full py-5 shadow-md bottom-0 left-0 right-0 border-t-[1px] border-solid border-amber-400 bg-[#3C3C3C] fixed justify-between  inline-flex">
      <div className="text-center w-2/4 flex  text-zinc-100 text-opacity-70 ">
        <p className="content-center text-xs ml-2 font-normal my-auto align-middle items-center">DESARROLLADO POR</p>{" "}
        <Image alt="logo YUMA landing" priority={false} className="w-24 h-9 " src={logoYumaPalabra} />
      </div>

      <div className="w-1/4 flex justify-end gap-2  mr-4">
        <div className="w-10 my-auto h-10">
          <Image className=" w-full h-full my-auto" alt="logo fb" src={faceLogo} />
        </div>
        <div className="w-10 my-auto h-10">
          <Image className="w-full h-full my-auto" alt="logo ig" src={igLogo} />
        </div>
        <div className="w-10 my-auto h-10">
          <Image className=" w-full h-full my-auto scale-125" alt="logo x" src={xLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
