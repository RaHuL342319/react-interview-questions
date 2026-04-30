import { useEffect, useState, useCallback } from "react";

export default function useFetch(url, retryTime = 0) {
  const [finalData, setFinalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDetails = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

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
  }, [url]);

  // Initial + URL change fetch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getDetails();
  }, [getDetails]);

  // Retry logic (only if retryTime > 0)
  useEffect(() => {
    if (!retryTime) return;

    const interval = setInterval(() => {
      getDetails();
    }, retryTime * 1000);

    return () => clearInterval(interval);
  }, [retryTime, getDetails]);

  return { finalData, loading, error };
}