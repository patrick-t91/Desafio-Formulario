import { useState } from "react";
import Option from "../Option/Option";
import "./Select.css";

const Select = ({ name, options, handleChange }) => {
  const [country, setCountry] = useState(options[0].value);

  const handleValue = ({ target }) => {
    setCountry(target.value);
    handleChange(target.name, target.value);
  };

  return (
    <select name={name} value={country} onChange={handleValue}>
      {options.map((item, index) => (
        <Option key={index} {...item} />
      ))}
    </select>
  );
};

export default Select;
