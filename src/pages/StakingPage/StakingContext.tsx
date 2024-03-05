import React from "react";

export type Duration = {
  period: string;
  APY: number;
  rawDuration: number;
};

export type StakingContextValue = {
  stakingAmount: number;
  stakingDuration?: Duration;
  setStakingAmount: (value: number) => void;
  setStakingDuration: (duration: Duration) => void;
};

export const StakingContext = React.createContext<StakingContextValue>({
  stakingAmount: 0,
  stakingDuration: undefined,
  setStakingAmount: () => null,
  setStakingDuration: () => null,
});
