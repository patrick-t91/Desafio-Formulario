import { getFirestore } from "../../firebase/client";
import { useEffect, useState } from "react";
import User from "../../components/User/User";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const DATA = getFirestore().collection("usuarios");
      const RESP = await DATA.get();
      const USERS = RESP.docs.map((element) => element.data());
      setUsers(USERS);
    }
    getData();
  }, [users]);

  return (
    <div className="d-flex flex-column align-items-center">
      <Header />
      {users &&
        users.map((user, index) => (
          <User {...user} index={index} key={index} />
        ))}
        <Link className="link" to={"/"}>Volver al formulario</Link>
    </div>
  );
};

export default Users;
