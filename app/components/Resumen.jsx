


const Resumen = ({orden,subtotal}) => {
  
  const cargos=0;

  return (
    <section className='md:w-[60%] w-[95%] h-auto rounded-sm flex relative bg-[#3C3C3C] flex-col gap-2 content-start border border-dashed border-[#F7AD1A] mt-5 mb-6 pt-16 pb-20 text-center'>
      <h2 className='text-[#F7AD1A] absolute top-0 right-0 left-0 mt-2 text-2xl mx-auto font-normal h-1  text-center'>RESUMEN</h2>
      
    <div className='text-[#F5F5F5] text-left flex flex-col '>
     <div className="text-left flex flex-col border-b-[1px] border-[#F7AD1A] ml-2 mr-2 pb-2 border-dashed">

     {orden.length>0&&(
        orden.map(item=>
          <div key={item.id} className=' my-auto text-[#F7AD1A] inline-flex justify-between ' >{item.producto}<p className='flex mr-3'>x{item.cantidad}u</p></div>
          )
      )}

     </div>
    <div className=' my-auto ml-2 inline-flex justify-between mr-2' >Subtotal: <p className='flex mr-3'>${subtotal}</p></div>
    <div className='my-auto  inline-flex justify-between ml-2 mr-2'>Cargos: <p className='flex mr-3'>${cargos}</p></div>
    <div className='mt-3 border-t-[1px] border-[#F7AD1A] pt-2 border-dashed inline-flex justify-between ml-2 mr-2'>TOTAL: <p className='flex  mr-3'>${subtotal-cargos}</p></div>
    </div>
    </section>
  )
}

export default Resumen
