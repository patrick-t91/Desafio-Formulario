import { useEffect, useState } from "react";
import "./Input.css";

const Input = ({
  type,
  label,
  name,
  required = false,
  handleChange,
  cleanForm,
  cleanFormFunction,
}) => {
  const [value, setValue] = useState("");

  const handleValue = ({ target }) => {
    cleanFormFunction(false);
    setValue(target.value);
    handleChange(target.name, target.value);
  };

  useEffect(() => {
    if (cleanForm) {
      setValue("");
    }
  }, [cleanForm]);

  return (
    <input
      type={type}
      name={name}
      required={required}
      onChange={handleValue}
      value={type === "submit" ? label : value}
      className={`border border-1 border-dark rounded-2 ${
        type === "submit" && "fw-bold"
      }`}
    />
  );
};

export default Input;
