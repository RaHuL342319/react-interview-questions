import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

  useEffect(() => {
     async function getDetails() {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await res.json();
      setFinalData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
    getDetails();
  }, [url]);

  return { finalData, loading, error };
}
