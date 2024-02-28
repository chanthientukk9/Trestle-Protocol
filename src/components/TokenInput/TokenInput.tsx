import trestleSmallIcon from "../../assets/small-logo.svg";

export default function TokenInput({
  balance,
  value,
  onChange,
  onSetMax,
}: {
  balance: number | string;
  value: number | string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSetMax: () => void;
}) {
  return (
    <div className="bg-[#26222B] border-2 border-white/5 p-5 rounded-3xl w-full">
      <div className="flex justify-between w-full mb-2">
        <div className="flex gap-2 rounded-2xl px-8 py-2 bg-white/5 w-fit-content">
          <img src={trestleSmallIcon} alt="trestle" className="w-8 h-8 -ml-4" />
          <h1 className="text-white mt-0.5 text-left text-lg font-quicksand mr-4">
            $TRESTLE
          </h1>
        </div>
        <div className="flex justify-end items-center w-full">
          <h1 className="text-white text-center text-base font-quicksand font-semibold">
            Balance {balance}
          </h1>
        </div>
      </div>
      <hr className="mb-3 mt-5 border-gray-200 sm:mx-auto dark:border-white/5 lg:mb-4" />
      <div className="flex justify-end items-center w-full">
        <input
          type="number"
          placeholder="0.00"
          className="peer w-full bg-transparent border-transparent py-2 px-3 font-quicksand text-xl font-normal text-white outline outline-0 transition-all focus:outline-0"
          value={`${value}`}
          onChange={onChange}
        />
        <div className="flex justify-end items-center w-full">
          <h1
            className="text-transparent bg-clip-text bg-gradient-to-r to-[#425ba7] from-[#7b77a4] font-extrabold font-quicksand hover:brightness-125 active:opacity-75 cursor-pointer"
            onClick={onSetMax}
          >
            Max
          </h1>
        </div>
      </div>
    </div>
  );
}
