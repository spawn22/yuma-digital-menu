import React from 'react'
import Image from 'next/image';
const Card = ({item,index}) => {
  return (
    
        
        <div
          key={index}
          className="p-4 m-2 flex flex-col bg-neutral-700 shadow-md rounded-md hover:scale-105 w-64"
        >
          <Image
            src={item.imagen}
            alt={item.nombre}
            className="w-60 h-40 object-cover rounded-t-md"
          />
          <h2 className="text-xl font-bold mt-2 mb-2">{item.nombre}</h2>
          <p className="text-sm mb-2">{item.descripcion}</p>
          <div className="flex justify-between items-end mt-auto">
            <span className="text-sm">
              {item.disponible ? "Disponible" : "No Disponible"}
            </span>
            <span className="text-lg font-bold"><span className="text-[#F7AD1A] mr-1">$</span>{item.precio}</span>
          </div>
        </div>
     
    
  )
}

export default Card