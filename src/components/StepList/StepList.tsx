import StepItem from "../../components/StepItem";
import { ReactElement, ReactNode } from "react";

function StepList({
  steps,
  className,
  activeStep,
}: {
  steps: { id: string; label: string; icon: ReactNode | ReactElement }[];
  className?: string;
  activeStep: string;
}) {
  return (
    <ol
      className={
        "flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base " +
        className
      }
    >
      {(steps || []).map((step, index) => (
        <li
          key={`${step.id}`}
          className={
            "flex items-center " +
            (index !== steps.length - 1
              ? "md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 "
              : "") +
            (activeStep === step.id ? "text-[#A4F4CD]" : "")
          }
        >
          <StepItem label={step.label} icon={step.icon} />
        </li>
      ))}
    </ol>
  );
}

export default StepList;
