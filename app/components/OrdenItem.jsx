import React from "react";
import BotonCantidad from "./BotonCantidad";

const OrdenItem = ({elemento}) => {
    
  return (
    
      <div className="w-full py-4 bg-neutral-700 flex justify-between bg-opacity-95 text-[#F5F5F5] drop-shadow-md ">
        <p className="my-auto text-sm ml-1">{elemento.producto}</p>
        <p className="my-auto text-sm">${elemento.precio}</p>{" "}
        <div className="my-auto text-sm mr-1"><BotonCantidad/></div>
      </div>
   
  );
};

export default OrdenItem;
