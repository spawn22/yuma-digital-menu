'use client'
import{ useState } from "react";
import OrdenItem from "./OrdenItem";
import Resumen from '../components/Resumen'



    const OrdenList = () => {
      const [subtotal,setSubTotal]=useState(0)
      
      const[orden,setOrden]=useState([{
          id:1,  
          producto:'burguer',
          precio:3,
          
          
        },
        {
          id:2,  
          producto:'burguer',
          precio:3,
          
          
        }])
      
        const totalParaPagar = (elemento, cantidadE) => {
          const index = orden.findIndex(item => item.id === elemento.id);
      
          
          const updatedOrden = [...orden];      
         
          updatedOrden[index].cantidad = cantidadE;

          if (cantidadE === 0) {
            updatedOrden.splice(index, 1);
          }
      
          const newSubtotal = updatedOrden.reduce((total, item) => total + item.precio * item.cantidad, 0)
      
          
          setSubTotal(newSubtotal);
          setOrden(updatedOrden);
        };
        
    
   
    
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

                <OrdenItem totalParaPagar={totalParaPagar} elemento={elemento} />
               
            </li>
        )}  
        </ul>)}
       

        <Resumen orden={orden} subtotal={subtotal} /> 
      
    </section>
  );
};

export default OrdenList;
