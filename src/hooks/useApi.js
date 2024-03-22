import { useState, useEffect, useRef } from "react";
const baseUrl = process.env.REACT_APP_BASE_URL;
const useApi = (endPoint, method, requestData) => {
  let url = baseUrl + endPoint;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const cache = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let response;
        const cacheKey = `${url}-${method}-${JSON.stringify(requestData)}`;

        if (cache.current[cacheKey]) {
          setData(cache.current[cacheKey]);
          setLoading(false);
          return;
        }

        if (method === "GET") {
          response = await fetch(url);
        } else if (method === "POST" || method === "PUT") {
          response = await fetch(url, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          });
        } else if (method === "DELETE") {
          response = await fetch(url, { method });
        }

        const responseData = await response.json();
        setData(responseData);
        cache.current[cacheKey] = responseData;
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, requestData]);

  // Function to clear cache for specific request for the given exiration time  .
  const clearCache = () => {
    const cacheKey = `${url}-${method}-${JSON.stringify(requestData)}`;
    delete cache.current[cacheKey];
  };

  return { loading, error, data, clearCache };
};

export default useApi;
// import { useState, useEffect, useRef } from "react";

// const baseUrl = process.env.REACT_APP_BASE_URL;

// const useApi = (endPoint, method, requestData) => {
//   let url = baseUrl + endPoint;

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);
//   const cache = useRef({});

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       let response;
//       const cacheKey = `${url}-${method}-${JSON.stringify(requestData)}`;

//       if (cache.current[cacheKey]) {
//         setData(cache.current[cacheKey]);
//         setLoading(false);
//         return;
//       }

//       if (method === "GET") {
//         response = await fetch(url);
//       } else if (method === "POST" || method === "PUT") {
//         response = await fetch(url, {
//           method,
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestData),
//         });
//       } else if (method === "DELETE") {
//         response = await fetch(url, { method });
//       }

//       const responseData = await response.json();
//       setData(responseData);
//       cache.current[cacheKey] = responseData;
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearCache = () => {
//     const cacheKey = `${url}-${method}-${JSON.stringify(requestData)}`;
//     delete cache.current[cacheKey];
//   };

//   return { loading, error, data, fetchData, clearCache };
// };

// export default useApi;
