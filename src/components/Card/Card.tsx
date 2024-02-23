import BasicCard from "../BasicCard";

function Card({ title, value }: { title: string; value: string }) {
  return (
    <BasicCard className="md:mt-10">
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
    </BasicCard>
  );
}

export default Card;
