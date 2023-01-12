import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextComponent = ({ children }) => {
  const [formData, setFormData] = useState({});

  const handleFormData = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const data = {
    formData,
    handleFormData,
  };

  return <FormContext.Provider value={{formData, handleFormData}}>{children}</FormContext.Provider>;
};
