import { useState, useCallback } from "react";
import axios from "axios";
import BASE_URL from "../utils/api";

export const useGet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getData = useCallback(async (endPoint) => {
    setLoading(true);
    setError(null);
    try {
      const url = BASE_URL + endPoint;
      const response = await axios.get(url);
      setLoading(false);
      setData(response.data);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error; // Rethrow the error so it can be caught by the calling function
    }
  }, []);

  return { getData, loading, error, data };
};
