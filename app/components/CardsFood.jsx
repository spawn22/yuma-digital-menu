import Image from "next/image";
import veggie from "../../public/assets/veggie.jpg";
import triple from "../../public/assets/triple.jpg";
import classic from "../../public/assets/classic.webp";
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

function CardsFood() {
  return (
    <div className="flex flex-wrap  ml-24 sm:ml-32 sm:gap-0   md:ml-40 lg:ml-36 mb-36 max-[475px]:ml-24 max-[645px]:gap-0   justify-center gap-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-4 m-2 flex flex-col mt-24  bg-neutral-700 shadow-md rounded-lg w-64"
        >
          <Image
            src={item.imagen}
            alt={item.nombre}
            className="w-60 h-40 object-cover rounded-t-lg"
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
      ))}
    </div>
  );
}

export default CardsFood;
