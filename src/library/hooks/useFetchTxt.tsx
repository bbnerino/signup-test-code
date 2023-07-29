import { useEffect, useState } from "react";

const useTxtData = (url: string) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(url)
          .then((response) => response.text())
          .then((text) => {
            const data = text.split("\n");
            setData(data);
            setLoading(false);
          });
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
export default useTxtData;
