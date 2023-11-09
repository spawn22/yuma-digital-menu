

const BotonCantidad = ({cantidadProducto,handleCantidad}) => {
  

  
  return (
    <div>
      <div className="flex items-center">
    <button
      onClick={(e)=>{handleCantidad(e)}}
      name='restar'
      type="button"
      className="h-5 w-5 bg-[#E51515] rounded-l-sm text-[#3C3C3C] justify-center font-semibold text-4xl text-center items-center content-center flex m-auto hover:opacity-75"
    >
      &minus;
    </button>

    <input
      type='text'
       readOnly={true}
      value={cantidadProducto}
      className="h-5 w-8  bg-[#C5C5C5] bg-opacity-30 text-[#F5F5F5] text-center"
    />

    <button
      type="button"
      name='sumar'
      onClick={(e)=>handleCantidad(e)}
      className="h-5 w-5 bg-[#F7AD1A] rounded-r-sm text-[#3C3C3C] justify-center font-semibold text-4xl text-center items-center content-center flex transition hover:opacity-75"
    >
     +
    </button>
  </div>
    </div>
  )
}

export default BotonCantidad
