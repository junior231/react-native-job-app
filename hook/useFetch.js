import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  // create local states
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // create options object
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  // fetch data from rapidAPI endpoint
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  // fetchData at least once everytime fn is invoked
  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, error, isLoading, refetchData };
};

export default useFetch;
