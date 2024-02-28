function IconChartLine({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"w-5 h-5 me-2.5 " + className}
    >
      <path
        d="M0.333313 5.33317H3.66665L5.71331 8.23317L7.73998 0.666504L11 5.33317H13.6666V6.6665H10.3333L8.28665 3.7665L6.25998 11.3332L2.99998 6.6665H0.333313V5.33317Z"
        fill="white"
      ></path>
    </svg>
  );
}

export default IconChartLine;
