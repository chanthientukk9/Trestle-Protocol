import React from "react";

function Card({ data: rawData }: { data?: { title: string; value: string }[] }) {
  const data = rawData || []
  return (
    <div className="relative flex flex-col md:mt-4 w-full lg:w-full justify-between mx-auto border-2 border-white/10 rounded-3xl z-30 bg-[#0F1015]/80 py-8 px-10">
      {(data || []).map((item, index) => (
        <React.Fragment key={index}>
          <div key={`content-${index}`} className="flex flex-col gap-8 justify-center items-start w-full">
            <div className="flex flex-col gap-2 justify-start items-start w-full h-full">
              <div className="flex flex-col justify-start text-lext w-full">
                <h1 className="text-white text-lg font-quicksand font-medium">
                  {item.title}
                </h1>
              </div>
              <div className="flex flex-col justify-start text-lext w-full">
                <h1 className="text-white text-2xl font-quicksand font-semibold">
                  {item.value}
                </h1>
              </div>
            </div>
          </div>
          {index < data.length - 1 && (
            <hr key={`sep-${index}`} className="my-3 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-5 w-full" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Card;
