import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGridItemApp from "../../components/GifGridItem";

describe("debe mostrar el compobnente GifGridItem correctamente", () => {
  const title = "Titulo del Componente";
  const url = "http://url";
  const wrapper = shallow(<GifGridItemApp title={title} url={url} />);
  test("debe mostrar el contenido correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe teneer un parrafo con el title recibido en prop", () => {
    const parrafo = wrapper.find("p");
    expect(parrafo.text().trim()).toBe(title);
  });
  test("debe tener la imagen igual a url y alt de props", () => {
    //   seleccionamos el elemento html con find. en caso de tener mas de una img, lo podemos buscar con clases o id. o con .at(index);
    const img = wrapper.find("img");
    // agregamos .html() para ver el componente html con sus propiedades
    // console.log(img.html());
    // enzyme tambien nos da la posibilidad de analziar las propiedades del elemento html con .props(), esto nos devuelve un objeto con las mismas. tambien lo podemos llamar enviando en el argumetno la propiedad especifica que necesito .prop('src') en este caso seria prop en singular, tambien lo puedop llamar como cualquier objeto .props().src
    // console.log(img.props())

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe tener la clase animate__animated", () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("animate__animated")).toBe(true);
  });
});
