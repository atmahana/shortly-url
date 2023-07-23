import { forwardRef, useState, useRef } from "react";
import useHttp from "../../hooks/use-http";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

const Input = forwardRef(function (
  { onChange, inputValue, onClick, isLoading },
  ref
) {
  return (
    <div className="absolute w-full -top-20 lg:-top-1/3 bg-secondary-500 bg-shorten-mobile md:bg-shorten-desktop bg-no-repeat bg-right-top md:bg-center md:bg-cover p-6 lg:p-16 flex flex-wrap lg:flex-nowrap gap-4 lg:gap-6 rounded-[10px]">
      <input
        ref={ref}
        type="text"
        name="input"
        placeholder="Shorten a link here..."
        className="h-12 lg:h-16 w-full lg:w-4/5 rounded-lg px-4 lg:px-8 lg:text-xl"
        onChange={onChange}
        value={inputValue}
      />
      <button
        onClick={onClick}
        className="bg-primary-500 hover:bg-primary-200 h-12 lg:h-16 w-full lg:w-1/5 rounded-lg text-white font-bold lg:text-xl"
      >
        {isLoading ? "Generating..." : "Shorten It!"}
      </button>
    </div>
  );
});

function Result() {
  const results = useLiveQuery(() => db.shorturls.toArray());
  
  return (
    <ul className="flex flex-col gap-4 lg:text-xl pt-36 lg:pt-22">
      {results?.map((result, index) => (
        <li
          key={result.id}
          className="bg-white rounded-lg lg:flex lg:justify-between lg:items-center divide-y-2"
        >
          <p className="p-[18px] whitespace-nowrap text-ellipsis overflow-hidden">
            {result?.oriUrl}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center p-[18px] gap-4 lg:gap-6">
            <span className="text-primary-500">{result?.longUrl}</span>
            <button className="bg-primary-500 hover:bg-primary-200 active:bg-secondary-500 h-10 rounded-md font-bold text-white lg:w-25 text-base">
              Copy
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function LinkShort() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { data, isLoading, error, clickHandler } = useHttp(input);
  const inputRef = useRef();

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const clickHandler = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${input}`
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
      console.log(err);
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <div className="relative mt-[88px] lg:mt-32">
      <Input
        ref={inputRef}
        onChange={changeHandler}
        inputValue={input}
        onClick={clickHandler}
        isLoading={isLoading}
      />
      <Result/>
    </div>
  );
}

export default LinkShort;
