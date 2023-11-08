import React from 'react'

const Resumen = () => {
  return (
    <section className='w-[95%] h-auto rounded-sm flex relative bg-[#3C3C3C] flex-col gap-2 content-start border border-dashed border-[#F7AD1A] mt-5 mb-6 pt-16 pb-20 text-center'>
      <h2 className='text-[#F7AD1A] absolute top-0 right-0 left-0 mt-2 text-2xl mx-auto font-normal h-1  text-center'>RESUMEN</h2>
      
    <div className='text-[#F5F5F5] text-left flex flex-col'>
    <div className=' my-auto ml-2 inline-flex justify-between mr-2' >Subtotal: <p className='flex mr-3'>{'$1'}</p></div>
    <div className='my-auto  inline-flex justify-between ml-2 mr-2'>Cargos: <p className='flex mr-3'>{'$0'}</p></div>
    <div className='mt-3 border-t-[1px] border-[#F7AD1A] pt-2 border-dashed inline-flex justify-between ml-2 mr-2'>TOTAL: <p className='flex  mr-3'>{'$0'}</p></div>
    </div>
    </section>
  )
}

export default Resumen
