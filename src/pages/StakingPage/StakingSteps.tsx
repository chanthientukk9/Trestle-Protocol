import IconDocument from "../../components/IconDocument";
import IconClock from "../../components/IconClock";
import IconAmount from "../../components/IconAmount";
import StepList from "../../components/StepList";

function StakingSteps({ activeStep }: { activeStep: number }) {
  return (
    <StepList
      steps={[
        {
          id: 1,
          label: "Amount",
          icon: <IconAmount />,
        },
        {
          id: 2,
          label: "Duration",
          icon: <IconClock />,
        },
        {
          id: 3,
          label: "Review",
          icon: <IconDocument />,
        },
      ]}
      activeStep={activeStep}
    />
  );
}

export default StakingSteps;
