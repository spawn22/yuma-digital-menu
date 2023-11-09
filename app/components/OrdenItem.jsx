'use client'
import { useEffect, useState } from "react";
import BotonCantidad from "./BotonCantidad";

const OrdenItem = ({elemento,totalParaPagar}) => {
const [cantidadProducto,setCantidadProducto]=useState(1)

  

  const handleCantidad=(e)=>{
    if (cantidadProducto!=0){
      if (e.target.name==='restar'){
        setCantidadProducto((prev)=>prev-1)
       
      }
      
    }
    if(e.target.name==='sumar'){
      setCantidadProducto((prev)=>prev+1)
    }
    
  }  
  useEffect(()=>{
    totalParaPagar(elemento,cantidadProducto)
  },[cantidadProducto]) 
  return (
    
      <div onClick={e=>console.log(elemento)} className="w-full py-4 bg-neutral-700 flex justify-between bg-opacity-95 text-[#F5F5F5] drop-shadow-md ">
        <p className="my-auto text-sm ml-1">{elemento.producto}</p>
        <p className="my-auto text-sm">${elemento.precio}</p>{" "}
        <div className="my-auto text-sm mr-1"><BotonCantidad handleCantidad={handleCantidad} cantidadProducto={cantidadProducto}/></div>
      </div>
   
  );
};

export default OrdenItem;
