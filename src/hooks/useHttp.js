import { useCallback, useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async (configData, applyData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(configData.url, {
        method: configData.method ? configData.method : "GET",
        headers: configData.headers ? configData.headers : {},
        body: configData.body ? JSON.stringify(configData.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      const data = await response.json();

      const docs = await data.docs;

      const total = data.total;

      console.log(data, docs);

      applyData(docs, total);
    } catch (err) {
      console.log(err || "Something went wrong. Sorry, please try again!");
    }

    setLoading(false);
  }, []);

  return { isLoading: loading, error: error, getData: getData };
};

export default useHttp;
