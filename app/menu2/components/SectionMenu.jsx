import React from 'react'
import Categorias from './Categorias'
import ListaProductos from './ListaProductos'

const SectionMenu = () => {
  return (
    <div>
      <div className='w-full justify-center m-auto h-full inline-flex'>
      <div className='ml-2'><Categorias/></div>  
        <ListaProductos/>
    </div>
    </div>
    
  )
}

export default SectionMenu