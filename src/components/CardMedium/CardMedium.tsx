import React from "react";
import BasicCard from "../BasicCard";

function CardMedium({ data: rawData }: { data?: { title: string; value: string }[] }) {
  const data = rawData || []
  return (
    <BasicCard className="md:mt-4">
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
    </BasicCard>
  );
}

export default CardMedium;
