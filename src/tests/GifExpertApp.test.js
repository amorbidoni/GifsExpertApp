import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("pruebas sobre el componente GifExpertApp", () => {
  test("corroborar si se recibe la informacion correcta", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar una lista de categorias", () => {
    const categories = ["one ponch", "dragon ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGridApp").length).toBe(categories.length);
  });
});
