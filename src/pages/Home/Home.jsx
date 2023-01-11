import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import { useFetch } from "../../hooks/useFetch";

const database = "database/db.json";

const Home = () => {
  const { data } = useFetch(database);

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center">
        {data && <Form data={data} />}
      </div>
    </>
  );
};

export default Home;
