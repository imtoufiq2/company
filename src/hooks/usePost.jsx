// import { useState, useCallback } from "react";
// import axios from "axios";
// import BASE_URL from "../utils/api";

// export const usePost = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const postData = useCallback(async (endPoint, data) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const url = BASE_URL + endPoint;
//       const response = await axios.post(url, data);
//       setLoading(false);
//       return response;
//     } catch (error) {
//       setLoading(false);
//       setError(error);
//       throw error; // Rethrow the error so it can be caught by the calling function
//     }
//   }, []);

//   return { postData, loading, error };
// };
import { useState, useCallback } from "react";
import axios from "axios";
import BASE_URL from "../utils/api";

export const usePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = useCallback(async (endPoint, data, token = null) => {
    setLoading(true);
    setError(null);

    try {
      const url = BASE_URL + endPoint;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const response = await axios.post(url, data, { headers });

     
      setLoading(false);
      return response;
    } catch (error) {
      console.log("--------", error);
      setLoading(false);
      setError(error);
      throw error; // Rethrow the error so it can be caught by the calling function
    }
  }, []);

  return { postData, loading, error };
};


