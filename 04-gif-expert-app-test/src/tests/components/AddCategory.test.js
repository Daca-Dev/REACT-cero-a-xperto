import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { AddCategory } from "../../components/AddCategory";

describe("Prueba del componente <AppCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("El valor del input debe de cambiar", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    // cambio del valor de simulate y le enviamos un objeto con los datos que usamos
    // en la función que es event.target.value
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear la información onSubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar setCategories y limpiar la caja de texto", () => {
    // cambio del valor del input
    const value = "Halo";
    wrapper.find("input").simulate("change", { target: { value } });

    // submit the form
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    // verify that the setCategories has been called
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes( 1 );
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

    // verify that the input value is empty
    expect(wrapper.find("input").prop("value")).toBe('');
  });
});
