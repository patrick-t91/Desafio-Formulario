import { useEffect, useState } from "react";
import axios from 'axios';


export const useFetch = (database) => {
  const [data, setData] = useState(null);

  const fetchData = async (database) => {
    try {
      const res = await axios.get(database);
      setData(res.data.items);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchData(database);
  }, [database]);

  return { data };
};
