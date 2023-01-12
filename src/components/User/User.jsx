import "./User.css";

const User = ({ Nombre, Correo, FechaNacimiento, Pais, index }) => {
  return (
    <div className="user-container w-50">
      <h1>Usuario Nro. {index}</h1>
      <p>Nombre: {Nombre}</p>
      <p>Correo electrónico: {Correo}</p>
      <p>Fecha de nacimiento: {FechaNacimiento}</p>
      <p>País de origen: {Pais}</p>
    </div>
  );
};

export default User;
