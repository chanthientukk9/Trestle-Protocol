import BasicCard from "../../components/BasicCard";
import useCheckConnected from "../../hooks/useCheckConntected";
import { StakeItem } from "../../hooks/useGetUserStakingData";
import { useEffect, useState } from "react";
import UnstakeModal from "./UnstakeModal";
import StakingList from "./StakingList";

export default function StakingHistorySection() {
  const [currentTime, setCurrentTime] = useState(Date.now() / 1000);
  const [isOpenUnstakeForm, setIsOpenUnstakeForm] = useState(false);
  const [stakedNumber, setStakedNumber] = useState(0);
  const [stakedItem, setStakedItem] = useState<StakeItem>();

  const isConnected = useCheckConnected();

  const handleOpenUnstakeForm =
    ({
      stakedNumber: index,
      stakedItem: _stakedItem,
    }: {
      stakedNumber: number;
      stakedItem: StakeItem;
    }) =>
    () => {
      setStakedNumber(index);
      setStakedItem(_stakedItem);
      setIsOpenUnstakeForm(true);
    };

  const handleCloseUnstakeForm = () => {
    setIsOpenUnstakeForm(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now() / 1000);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
              <StakingList
                isConnected={isConnected}
                currentTime={currentTime}
                handleOpenUnstakeForm={handleOpenUnstakeForm}
              />
            </div>
          </div>
        </BasicCard>
      </div>
      {isConnected && stakedItem && isOpenUnstakeForm && (
        <UnstakeModal
          isOpen={isOpenUnstakeForm}
          onClose={handleCloseUnstakeForm}
          stakedNumber={stakedNumber}
          stakedItem={stakedItem}
          currentTime={currentTime}
        />
      )}
    </section>
  );
}
