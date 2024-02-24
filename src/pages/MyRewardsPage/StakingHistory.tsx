import BasicCard from "../../components/BasicCard";

export default function StakingHistory() {
  return (
    <section className="relative flex flex-col justify-between md:top-0 md:pt-[160px] pt-[120px]">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-6 max-w-[1300px] mx-auto px-7 lg:px-4">
        <BasicCard className="md:mt-10 bg-[#0F1015]/90 border-white/5">
          <div className="flex flex-col gap-8 justify-center items-start w-full">
            <div className="flex flex-col gap-2 justify-start items-start w-full h-full">
              <div className="flex flex-col justify-start text-lext w-full">
                <h1 className="text-white text-lg font-quicksand font-semibold">
                  Overview
                </h1>
              </div>
              <hr className="my-3 border-gray-200 sm:mx-auto dark:border-white/5 lg:my-3 w-full" />
              <div className="flex flex-col w-full h-40 items-center justify-center">
                <h1 className="text-white text-lg font-quicksand">
                  Connect your wallet to view your staking activity
                </h1>
              </div>
            </div>
          </div>
        </BasicCard>
      </div>
    </section>
  );
}
