import React from "react";
import OrdenItem from "./OrdenItem";
import Resumen from '../components/Resumen'
const item={producto:'burguer',
                precio:3,}
    const orden=[item,item,item,item]


    const OrdenList = () => {
    
  return (
    <section className='"w-full flex flex-col gap-2 content-center mt-5 mb-6 pt-24 pb-32 items-center text-center'>
      <h2 className="text-amber-400 text-2xl my-auto font-normal relative text-center">
        ORDEN
      </h2>
      <div className="w-full rounded-t-lg bg-zinc-800 flex justify-between py-3 bg-opacity-95 text-[#F5F5F5] drop-shadow-md ">
        <p className="my-auto ml-1">PRODUCTO</p>
        <p className="my-auto">PRECIO</p>
        <p className="my-auto mr-1">CANTIDAD</p>
      </div>
      {orden.length>0&&(<ul className=" w-full flex gap-2 flex-col">
        
        
        {orden.map((elemento,i)=>
            <li key={i}>
                <OrdenItem elemento={elemento}/>
            </li>
        )}
        </ul>)}

        <Resumen/> 
      
    </section>
  );
};

export default OrdenList;
