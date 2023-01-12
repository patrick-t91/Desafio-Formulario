import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Select from "../Select/Select";
import "./Form.css";
import { postData } from "../../utils/PostData";

const Form = ({ data }) => {
  const [formData, setFormData] = useState({ country_of_origin: "argentina" });
  const [cleanForm, setCleanForm] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleChange = (prop, value) => {
    setFormData({ ...formData, [prop]: value });
  };

  const cleanFormFunction = (value) => {
    setCleanForm(value);
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
    let { full_name, email, birth_date, country_of_origin } = formData;
    postData(full_name, email, birth_date, country_of_origin);

    // Limpiar formulario y mostrar link a usuarios
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });
    cleanFormFunction(true);
    setShowButton(true);
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <form onSubmit={handleSubmit} className="mt-3 w-50 rounded-3 ">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className={`d-flex flex-column text-center align-items-center justify-content-center m-4 pb-4 ${
                item.type === "submit" && "border-bottom-0"
              }`}
            >
              <Label {...item} />
              {item.type === "select" ? (
                <Select {...item} handleChange={handleChange} />
              ) : (
                <Input
                  {...item}
                  handleChange={handleChange}
                  cleanForm={cleanForm}
                  cleanFormFunction={cleanFormFunction}
                />
              )}
            </div>
          ))}
      </form>
      {showButton && <Link className="link" to={"/users"}>Mostrar los usuarios</Link>}
    </div>
  );
};

export default Form;
