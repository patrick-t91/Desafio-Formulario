import { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ type, label, name, required = false, handleChange }) => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (type === "submit") {
      setText(label);
    }
  }, [type, label]);

  const handleValue = ({ target }) => {
    setValue(target.value);
    handleChange({target});
  };
  return (
    <input
      type={type}
      name={name}
      required={required}
      onChange={handleValue}
      value={type === "submit" ? text : value}
      className={`border border-1 border-dark rounded-2 ${
        type === "submit" && "fw-bold"
      }`}
    />
  );
};

export default Input;
