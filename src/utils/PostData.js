import { getFirestore } from "../firebase/client";

export const postData = (nombre, correo, fechaNacimiento, pais) => {
  const dataBase = getFirestore();
  const userData = {
    Nombre: nombre,
    Correo: correo,
    FechaNacimiento: fechaNacimiento,
    Pais: pais,
  };
  dataBase
    .collection("usuarios")
    .add(userData)
};
