import React, { useState } from "react";
import AddCategoryApp from "./components/AddCategory";
import GifGridApp from "./components/GifGrid";

const GifExpertApp = () => {
  // no lo hacemos de la siguiente manera a menos que el arr nunca vaya a cambiar, es decir que no vaya a agregar ni sacar categorias y necesite que react lo vuelva a renderizar.
  //   const categories = ["One Ponch", "Samuray X", "Dragon Ball"];
  //
  // en caso de necesitar que se vuelva  a renderizar lo hacemos con el hook useState
  //
  let initialValue = ["One Ponch"];
  const [categories, setCategories] = useState(initialValue);

  // no debemos mutar categories con .push. debemos usar el setCategories
  //   const handleApp = () => {
  //     //    el setCategories reemplaza el valor anterior del useState. por ende usamos el express operator para copiar el arr y agregar una categoria nueva
  //     // setCategories([...categories, "HunterXHunter"]);
  //     // la otra forma es con un callback en el setCategories
  //     setCategories((cats) => [...cats, "HunterXHunter"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategoryApp setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleApp}>Agregar</button> */}
      <ol>
        {categories.map((category, i) => (
          <GifGridApp key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
