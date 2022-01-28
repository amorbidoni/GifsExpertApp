import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGif } from "../helpers/getGifs";
import GifGridItemApp from "./GifGridItem";
// { useState, useEffect }
const GifGridApp = ({ category }) => {
  //   para llamar la fguncion getGif usamos el hook useEffect ya que de otra manera vuelve a llamar la peticion http cada vez que hago click en el boton.
  //   el useEffect recibe como primer argumento una funcion segundo argumento un arreglo de dependencias. si no cargo ninguna dependencia y dejo el arreglo vacio el useEffect se dispara una sola vez.
  //* lo trasladamos al useEffect al custom hook
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   getGif(category).then((img) => setImages(img));
  // }, [category]);

  //custom hook

  //  podemos renombrar una key de un objeto en la desestructuracion con :nombreNuevo; en este caso renombramos data:images para que tenga mas sentido en este componente

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h1 class=" animate__animated animate__fadeInUp">{category}</h1>
      {loading && <p>Cargando...</p>}
      <div className="card__grid  animate__animated animate__fadeInUp">
        {images.map((img) => (
          <GifGridItemApp key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGridApp;
