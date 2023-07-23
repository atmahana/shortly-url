import { useState } from "react";

const useHttp = (longUrl) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clickHandler = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${longUrl}`
      );
      const data = await res.json();
      if (!data.ok) {
        setError({ errorCode: data.error_code, errorMessage: data.error });
      } else {
        console.log(data);

        await db.shorturls.add({
          oriUrl: data.result.original_link,
          longUrl: data.result.full_short_link,
          shortUrl: data.result.short_link,
        });
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    clickHandler,
  };
};

export default useHttp;
