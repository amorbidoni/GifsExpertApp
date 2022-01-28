import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategoryApp = ({ setCategories }) => {
  // el usestate lo dejamos conun string vacio para evitar el error de enviarle al input un value null
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategoryApp.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategoryApp;
