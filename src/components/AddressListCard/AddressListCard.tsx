import BasicCard from "../BasicCard";
import IconExternal from "../IconExternal";

function AddressListCard({
  data: rawData,
}: {
  data?: { title: string; value: string; shortValue: string; url: string }[];
}) {
  const data = rawData || [];
  return (
    <BasicCard className="md:mt-4">
      <div className="flex flex-col gap-8 justify-center items-start w-full">
        <div className="flex flex-col gap-2 justify-start items-start w-full h-full">
          {(data || []).map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 justify-start text-lext w-full"
            >
              <h1 className="text-white/80 text-lg font-quicksand font-normal">
                {item.title}
              </h1>
              <div className="flex gap-2 justify-between w-full h-full">
                <div className="flex gap-2 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4DE6C8]"></div>
                  <h1 className="text-white/50 text-base font-quicksand font-normal block lg:hidden">
                    {item.shortValue || item.value}
                  </h1>
                  <h1 className="text-white/50 text-base font-quicksand font-normal hidden lg:block">
                    {item.value}
                  </h1>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  className="flex gap-1 justify-center items-center cursor-pointer hover:opacity-70 active:opacity-50"
                >
                  <h1 className="text-white text-base font-quicksand font-normal">
                    Open
                  </h1>
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <IconExternal />
                  </span>
                </a>
              </div>
              {index < data.length - 1 && (
                <hr className="my-3 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-5 w-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </BasicCard>
  );
}

export default AddressListCard;
