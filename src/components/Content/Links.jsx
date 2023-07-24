import { forwardRef, useState, useRef, useEffect } from "react";
import useCreateShortLink from "../../hooks/use-createShortLink";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

const Input = forwardRef(function (
  { onChange, inputValue, onClick, isLoading, hasError },
  ref
) {
  return (
    <div className="absolute w-full -top-20 lg:-top-1/4 bg-secondary-500 bg-shorten-mobile md:bg-shorten-desktop bg-no-repeat bg-right-top md:bg-center md:bg-cover p-6 lg:p-16 flex flex-wrap lg:flex-nowrap gap-4 lg:gap-6 rounded-[10px]">
      <input
        ref={ref}
        type="text"
        name="input"
        placeholder="Shorten a link here..."
        className={`h-12 lg:h-16 w-full lg:w-4/5 rounded-lg px-4 lg:px-8 lg:text-xl ${
          hasError && "border-2 border-danger"
        }`}
        onChange={onChange}
        value={inputValue}
      />
      {hasError ? (
        <span className="absolute text-danger italic bottom-9">
          Please add a link
        </span>
      ) : null}
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

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (result) => {
    navigator.clipboard.writeText(result.longUrl);
    setActiveButton(result.longUrl);

    setTimeout(() => setActiveButton(null), 3000);
  };

  const handleOutsideClick = (event) => {
    if (activeButton) {
      // Check if the click occurred outside the button list.
      if (!buttonListRef.current.contains(event.target)) {
        setActiveButton(null);
      }
    }
  };

  const buttonListRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activeButton]);

  return (
    <div className="pt-28">
      <ul
        ref={buttonListRef}
        className="w-full flex flex-col gap-4 lg:text-xl lg:pt-2 overflow-y-scroll h-80"
      >
        {results?.map((result) => (
          <li
            key={result.id}
            className="bg-white rounded-lg lg:flex lg:justify-between lg:items-center divide-y-2 lg:divide-y-0 lg:h-20"
          >
            <p className="p-[18px] whitespace-nowrap text-ellipsis overflow-hidden">
              {result?.oriUrl}
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center p-[18px] gap-4 lg:gap-6">
              <span className="text-primary-500">{result?.longUrl}</span>
              <button
                onClick={() => handleButtonClick(result)}
                className={`${
                  activeButton === result.longUrl
                    ? "bg-secondary-500"
                    : "bg-primary-500 hover:bg-primary-200"
                }  h-10 rounded-md font-bold text-white lg:w-25 text-base`}
              >
                {activeButton === result.longUrl ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkShort() {
  const [input, setInput] = useState("");
  const { isLoading, error, clickHandler } = useCreateShortLink(input);
  const inputRef = useRef();

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="relative mt-[88px] lg:mt-32">
      <Input
        ref={inputRef}
        onChange={changeHandler}
        inputValue={input}
        onClick={clickHandler}
        isLoading={isLoading}
        hasError={error}
      />
      <Result />
    </div>
  );
}

export default LinkShort;
