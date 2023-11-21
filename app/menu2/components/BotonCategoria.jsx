"use client";
import Image from "next/image";

const BotonCategoria = ({ item, index, setSelected, selected }) => {
  
  return (
    <li key={item.name} className="flex flex-col backdrop-blur-sm  mb-4">
      <button
        className={` flex-col min-w-min shadow-lg backdrop-blur-sm shadow-[#00000063] hover:"shadow-md 
         hover:shadow-[#f7ad1a6c] transform duration-200 hover:cursor-pointer flex  
         aspect-auto justify-center py-2 rounded-md items-center  ${
          selected === index ? "shadow-md shadow-[#f7ad1a6c] border border-[#f7ad1a95]" : "border border-[#f7ad1a00]"
        }`}
        onClick={() => setSelected(index)}
      >
        <Image
          src={item.image}
          alt={item.name}
          className="min-w-6 max-h-[100px] w-9 h-9
         min-h-6 md:w-14 md:h-14 max-w-[100px] object-cover"
        />
        <p
          className={`text-sm sm:text-sm md:text-base  text-[#F7AD1A] ${
            selected === index ? "underline" : ""
          }`}
        >
          {item.name}
        </p>
      </button>
    </li>
  );
};

export default BotonCategoria;
