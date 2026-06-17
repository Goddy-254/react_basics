import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            Error.throw("cannot fetch data");
          }
          return response.json(); //parsing
        })
        .then((data) => {
          setAllData(data);
          setLoader(false);
        })
        .catch((error) => {
          setError(error);
          setLoader(false);
        });
    }, 2000);
    console.log("use effect ran!!");
  }, [url]);

  return {allData,loading,error}
};

export default useFetch;
