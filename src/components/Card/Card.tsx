function CardMedium({ title, value }: { title: string; value: string }) {
  return (
    <div className="relative flex md:mt-10 w-full lg:w-full justify-between mx-auto border-2 border-white/10 rounded-3xl z-30 bg-[#0F1015]/80 py-8 px-10">
      <div className="flex flex-col gap-8 justify-center items-start w-full">
        <div className="flex flex-col gap-2 justify-start items-start w-full h-full">
          <div className="flex flex-col justify-start text-lext w-full">
            <h1 className="text-white text-lg font-quicksand font-medium">
              {title}
            </h1>
          </div>
          <div className="flex flex-col justify-start text-lext w-full">
            <h1 className="text-white text-2xl font-quicksand font-semibold">
              {value}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMedium;
