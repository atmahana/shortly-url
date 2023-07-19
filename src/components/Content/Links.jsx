function Input() {
  return (
    <div className="bg-secondary-500 p-6 lg:p-16 flex flex-wrap lg:flex-nowrap gap-4 lg:gap-6 rounded-[10px]">
      <input
        type="text"
        name="input"
        placeholder="Shorten a link here..."
        className="h-12 lg:h-16 w-full lg:w-4/5 rounded-lg px-4 lg:px-8 lg:text-xl"
      />
      <button className="bg-primary-500 hover:bg-primary-200 h-12 lg:h-16 w-full lg:w-1/5 rounded-lg text-white font-bold lg:text-xl">
        Shorten It!
      </button>
    </div>
  );
}

const RESULT = [
  {
    id: "1",
    oriLink: "https://tailwindcss.com/docs/font-size#customizing-your-theme",
    shortLink: "shrtco.de/fJVBcV",
  },
  {
    id: "2",
    oriLink: "https://tailwindcss.com/docs/height",
    shortLink: "shrtco.de/xjVlUh",
  },
  {
    id: "3",
    oriLink: "https://tailwindcss.com/docs/padding",
    shortLink: "shrtco.de/fcH2AN",
  },
];

function Result() {
  return (
    <ul className="flex flex-col gap-4 lg:text-xl">
      {RESULT.map((result) => (
        <li className="bg-white shadow-lg border rounded-lg lg:flex lg:justify-between lg:items-center">
          <p className="p-[18px] whitespace-nowrap text-ellipsis overflow-hidden border-b-2 lg:border-none">{result.oriLink}</p>
          <div className="flex flex-col lg:flex-row lg:items-center p-[18px] gap-4 lg:gap-6">
            <span className="text-primary-500">{result.shortLink}</span>
            <button className="bg-primary-500 hover:bg-primary-200 active:bg-secondary-500 h-10 rounded-md font-bold text-white lg:w-25 text-base">Copy</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function LinkShort() {
  return (
    <div>
      <Input />
      <Result />
    </div>
  );
}

export default LinkShort;
