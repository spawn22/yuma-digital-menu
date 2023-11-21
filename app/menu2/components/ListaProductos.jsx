
import Card from './Card';
import veggie from "../../../public/assets/veggie.jpg";
import triple from "../../../public/assets/triple.jpg";
import classic from "../../../public/assets/classic.webp";

const data = [
  {
    nombre: "Hamburguesa Clásica",
    imagen: classic,
    descripcion:
      "Hamburguesa con carne de res, lechuga, tomate, cebolla, pepinillos y salsa especial.",
    precio: 8.99,
    disponible: true,
  },
  {
    nombre: "Hamburguesa Triple Carne",
    imagen: triple,
    descripcion:
      "Hamburguesa con pechuga de pollo a la parrilla, lechuga, tomate, cebolla y mayonesa.",
    precio: 7.99,
    disponible: true,
  },
  {
    nombre: "Hamburguesa Vegana",
    imagen: veggie,
    descripcion:
      "Hamburguesa con una deliciosa hamburguesa de verduras, lechuga, tomate, cebolla y salsa de yogur.",
    precio: 9.99,
    disponible: false,
  },
  {
    nombre: "Hamburguesa Clásica",
    imagen: classic,
    descripcion:
      "Hamburguesa con carne de res, lechuga, tomate, cebolla, pepinillos y salsa especial.",
    precio: 8.99,
    disponible: true,
  },
  {
    nombre: "Hamburguesa Triple Carne",
    imagen: triple,
    descripcion:
      "Hamburguesa con pechuga de pollo a la parrilla, lechuga, tomate, cebolla y mayonesa.",
    precio: 7.99,
    disponible: true,
  },
  {
    nombre: "Hamburguesa Vegana",
    imagen: veggie,
    descripcion:
      "Hamburguesa con una deliciosa hamburguesa de verduras, lechuga, tomate, cebolla y salsa de yogur.",
    precio: 9.99,
    disponible: false,
  },
  {
    nombre: "Hamburguesa Clásica",
    imagen: classic,
    descripcion:
      "Hamburguesa con carne de res, lechuga, tomate, cebolla, pepinillos y salsa especial.",
    precio: 8.99,
    disponible: true,
  },
  {
    nombre: "Hamburguesa Triple Carne",
    imagen: triple,
    descripcion:
      "Hamburguesa con pechuga de pollo a la parrilla, lechuga, tomate, cebolla y mayonesa.",
    precio: 7.99,
    disponible: true,
  },
  {
    nombre: "Hamburguesa Vegana",
    imagen: veggie,
    descripcion:
      "Hamburguesa con una deliciosa hamburguesa de verduras, lechuga, tomate, cebolla y salsa de yogur.",
    precio: 9.99,
    disponible: false,
  },
  {
    nombre: "Hamburguesa Vegana",
    imagen: veggie,
    descripcion:
      "Hamburguesa con una deliciosa hamburguesa de verduras, lechuga, tomate, cebolla y salsa de yogur.",
    precio: 9.99,
    disponible: false,
  },
  {
    nombre: "Hamburguesa Clásica",
    imagen: classic,
    descripcion:
      "Hamburguesa con carne de res, lechuga, tomate, cebolla, pepinillos y salsa especial.",
    precio: 8.99,
    disponible: true,
  },
  {
    nombre: "Hamburguesa Triple Carne",
    imagen: triple,
    descripcion:
      "Hamburguesa con pechuga de pollo a la parrilla, lechuga, tomate, cebolla y mayonesa.",
    precio: 7.99,
    disponible: true,
  },
];
const ListaProductos = () => {
  return (
    <div className='w-3/4 my-4 shadow-lg  relative flex flex-wrap pb-20 pt-2 text-[#F5F5F5] scroll-m-0  justify-center gap-5'>
       <h2 className="text-center flex justify-center underline text-2xl text-[#F7AD1A]">MENÚ</h2>
       <section className='flex justify-center gap-5 flex-wrap'>
       {data.map((item, index) => (
        <Card key={index} item={item} index={index}/>
      ))}
       </section>
      
    </div>
  )
}

export default ListaProductos