import IconDocument from "../../components/IconDocument";
import IconClock from "../../components/IconClock";
import IconAmount from "../../components/IconAmount";
import StepList from "../../components/StepList";

function StakingSteps({ activeStep }: { activeStep: string }) {
  return (
    <StepList
      steps={[
        {
          id: "amount",
          label: "Amount",
          icon: <IconAmount />,
        },
        {
          id: "duration",
          label: "Duration",
          icon: <IconClock />,
        },
        {
          id: "review",
          label: "Review",
          icon: <IconDocument />,
        },
      ]}
      activeStep={activeStep}
    />
  );
}

export default StakingSteps;
