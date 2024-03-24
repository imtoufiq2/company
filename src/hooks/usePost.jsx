import { useState, useCallback } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests

export const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = useCallback(async (url, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, data);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error; // Rethrow the error so it can be caught by the calling function
    }
  }, []);

  return { postData, loading, error };
};
