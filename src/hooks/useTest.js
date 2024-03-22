import { useState, useEffect, useRef, useCallback } from "react";
const baseUrl = process.env.REACT_APP_BASE_URL;
// Custom hook to fetch data from an API
function useFetchData(url) {
  let mainUrl = baseUrl + url;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ref = useRef(false);
  // Function to fetch data
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(mainUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [mainUrl]);

  // Fetch data on component mount
  useEffect(() => {
    if (ref.current) {
      fetchData();
    }
    ref.current = true;
  }, [fetchData]);

  // Return data, loading state, error, and the fetch function
  return { data, loading, error, fetchData };
}

export default useFetchData;
