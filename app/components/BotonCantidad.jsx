import React from 'react'

const BotonCantidad = () => {
  return (
    <div>
      <div className="flex items-center">
    <button
      type="button"
      className="h-5 w-5 bg-[#E51515] rounded-l-sm text-[#3C3C3C] justify-center font-semibold text-4xl text-center items-center content-center flex m-auto hover:opacity-75"
    >
      &minus;
    </button>

    <input
      type='text'
      id="Quantity"
      readOnly={true}
      value="1"
      className="h-5 w-8  bg-[#C5C5C5] bg-opacity-30 text-[#F5F5F5] text-center"
    />

    <button
      type="button"
      className="h-5 w-5 bg-[#F7AD1A] rounded-r-sm text-[#3C3C3C] justify-center font-semibold text-4xl text-center items-center content-center flex transition hover:opacity-75"
    >
     +
    </button>
  </div>
    </div>
  )
}

export default BotonCantidad
