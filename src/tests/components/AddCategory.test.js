import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import AddCategoryApp from "../../components/AddCategory";

describe("pruebas en el componente AddCategory", () => {
  // jest.fn() reemplaza ()=>{}
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategoryApp setCategories={setCategories} />);
  const input = wrapper.find("input");
  const form = wrapper.find("form");
  const value = "hola mundo";

  beforeEach(() => {
    //   se llama el jest.clearAllMocks para limpiar los mocks
    jest.clearAllMocks();
    wrapper = shallow(<AddCategoryApp setCategories={setCategories} />);
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar la caja de texto", () => {
    // al simular el evento onchange envio como segundo argmumento el evento, par aobtener el valor tengo que envarle el target y value tal como lo utilizo en el AddCategory.js con e.target.value
    input.simulate("change", { target: { value: value } });
  });
  test("no debe postear la informacion on submit", () => {
    form.simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test("debe llamar el setCat4egories y limpiar la caja de texto", () => {
    // simular el inputchange
    wrapper
      .find("input")
      .simulate("change", { target: { value: "hola mundo" } });
    // simular el submit del form
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // llamar el setcategories
    expect(setCategories).toHaveBeenCalled();
    // tambien podemos usar el tohavebeencalledtimes para indicar la cantidad de veces que se se deberia haber llamado
    expect(setCategories).toHaveBeenCalledTimes(1);
    // para corroborar que se haya llamado con cualquier tipo de funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // el value del input debe estar vacio
    expect(input.prop("value")).toBe("");
  });
});
