"use client";

import { useState } from "react";
import pizza from "../../public/assets/iconos/pizza.png";
import burger from "../../public/assets/iconos/burger.png";
import salad from "../../public/assets/iconos/salad.png";
import soda from "../../public/assets/iconos/soda.png";
import postre from "../../public/assets/iconos/ice-cream-cup.png";
import Image from "next/image";
const data = [
  {
    name: "Pizzas",
    image: pizza,
  },
  {
    name: "Hamburguesas",
    image: burger,
  },
  {
    name: "Ensaladas",
    image: salad,
  },
  {
    name: "Gaseosas",
    image: soda,
  },
  {
    name: "Postres",
    image: postre,
  },
];

function SectionCategories() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="sidebar fixed left-0 top-24  md:w-72 lg:w-80 flex flex-col justify-between">
      <h1 className="text-lg sm:text-2xl md:text-3xl sm:ml-0 md:ml-1  lg:ml-4 mb-4 underline text-[#F7AD1A] px-5">
        Secciones
      </h1>
      <ul className="space-y-5 sm:space-y-8 md:space-y-8 lg:space-y-5 p-4">
        {data.map((item, index) => (
          <li key={item.name} className="flex flex-col  items-center mr-36">
            <button
              className={`flex flex-col items-center `}
              onClick={() => setSelected(index)}
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
              />
              <p className={`text-xs sm:text-sm md:text-base ${
                selected === index
                  ? "ring-2 underline-[#F7AD1A] decoration-solid underline"
                  : ""
              } text-[#F7AD1A]`}>
                {item.name}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SectionCategories;
