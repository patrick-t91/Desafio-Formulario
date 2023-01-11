import { useState } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Select from "../Select/Select";
import "./Form.css";
const shortid = require("shortid");

const Form = ({ data }) => {
  const [formData, setFormData] = useState({});

  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = Object.values(formData);
    for (let value of values) {
      if (value.trim === "") {
        return;
      }  
    }
    // mandar data a la base de datos de firebase.
  };
  return (
    <form onSubmit={handleSubmit} className="mt-3 w-50 rounded-3 ">
            
      {data &&
        data.map((item) => (
          <div
            key={shortid.generate()}
            className={`d-flex flex-column text-center align-items-center justify-content-center m-4 pb-4 ${
              item.type === "submit" && "border-bottom-0"
            }`}
          >
            <Label {...item} />
            {item.type === "select" ? (
              <Select {...item} />
            ) : (
              <Input {...item} handleChange={handleChange} />
            )}
          </div>
        ))}
    </form>
  );
};

export default Form;
