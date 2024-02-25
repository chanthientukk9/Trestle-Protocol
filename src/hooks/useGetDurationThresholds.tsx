import { useEffect, useState } from "react";

export type Duration = {
  threshold: string;
  multiplier: number;
}

export default function useGetDurationThresholds() {
  const [durationThresholds, setDurationThresholds] = useState<Duration[] | null>(null)

  useEffect(() => {
    setDurationThresholds([{
      threshold: `${86400*30}`,
      multiplier: 600
    }, {
      threshold: `${86400*60}`,
      multiplier: 700
    }, {
      threshold: `${86400*90}`,
      multiplier: 1000
    }, {
      threshold: `${86400*180}`,
      multiplier: 1200
    }, {
      threshold: `${86400*360}`,
      multiplier: 1500
    }])
  }, [])

  return {
    durationThresholds
  };
}
