import './Label.css'

const Label = ({ name, label, type }) => {
  return <label htmlFor={name} className="mb-2">{type !== "submit" && label}</label>;
};

export default Label;
