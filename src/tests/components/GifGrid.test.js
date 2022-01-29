import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGridApp from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("pruebas en el componente GifGrid", () => {
  const category = "los simpson";
  test("corroborar que recibo correctamente el componente", () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });

    const wrapper = shallow(<GifGridApp category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar items cuando se cargan imagenes con useFetchGif", () => {
    //
    const gifs = [
      {
        id: "asd",
        title: "title",
        url: "https://localhost/4200",
      },
      {
        id: "123",
        title: "title",
        url: "https://localhost/4200",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGridApp category={category} />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItemApp").length).toBe(gifs.length);
  });
});
