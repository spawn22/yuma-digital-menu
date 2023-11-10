import Link from "next/link";

import { useRef, useState } from "react";


const BotonHamburguesa = () => {
   
    
  const [navMobile, setNavMobile] = useState(false);
  const handleNav = () => {
    if (navMobile) {
      setNavMobile(false);
    }
    if (!navMobile) {
        setNavMobile(true);
      }
  };
  
  return (
    <section className="relative w-1/5 flex my-auto items-center justify-center  content-center  flex-col">
      <div
        onClick={handleNav}
        className="  w-14  h-16 flex relative drop-shadow-md mix-blend-normal rounded-sm"
      >
        <button className={`relative ${navMobile ? "group" : "group-only:"}`}>
          <div  className="relative flex overflow-hidden items-center justify-center rounded-md w-[56px] h-[50px] transform transition-all ring-0 border-t-[#66DB3C] border-b-[#EE103F] border-r-[#93346E] border-l-[#3267BB] hover:border-4  group-focus:border-4 border-opacity-70 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div  className="bg-[#F7AD1A]  h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
              <div className="bg-[#F7AD1A]  h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
              <div  className="bg-[#F7AD1A]  h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
              <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div className="absolute bg-[#F7AD1A] h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div className="absolute bg-[#F7AD1A] h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {navMobile && (
        <div className="flex  w-full justify-center items-center content-center text-center">
          <ul>
            <li>
              <div className="sm:flex w-full  place-content-center md:flex-col m-auto flex-1  md:w-1/3 flex-wrap items-center content-center">
               
                <div className="flex  justify-center items-center content-center flex-1 m-auto">
                  <Link
                    href={''}
                    className={
                      
                         " rounded-sm items-center duration-300 hover:bg-yellow-600 font-medium bg-yellow-500 border-0 py-1 px-3 m-1"
                    }
                  >
                    volver
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default BotonHamburguesa;
