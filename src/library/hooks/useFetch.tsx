import { useEffect, useState } from "react";

type Method = "GET" | "POST" | "PUT" | "DELETE";

const useFetch = (api: string, method: Method = "GET", body?: Object) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(api);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [api]);

  return { data, loading, error };
};
export default useFetch;
