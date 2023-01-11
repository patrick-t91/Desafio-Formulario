import Option from "../Option/Option";
import './Select.css'

const shortid = require("shortid");

const Select = ({ name, options }) => {
  return (
    <select name={name}>
      {options.map((item) => (
        <Option key={shortid.generate()} {...item} />
      ))}
    </select>
  );
};

export default Select;
