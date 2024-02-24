import { ReactElement, ReactNode } from "react";

function StepItem({
  label,
  className,
  onClick,
  icon,
}: {
  label: string;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode | ReactElement;
}) {
  return (
    <span
      onClick={onClick}
      className={
        "flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 " +
        className
      }
    >
      {icon}
      {label}
    </span>
  );
}

export default StepItem;
