function IconClaim({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"w-5 h-5 me-2.5 " + className}
    >
      <path
        d="M8 13.6668H0V9.66683L2.66667 7.00016L0 4.3335V0.333496H8V4.3335L5.33333 7.00016L8 9.66683V13.6668ZM1.33333 4.00016L4 6.66683L6.66667 4.00016V1.66683H1.33333V4.00016ZM4 7.3335L1.33333 10.0002V12.3335H6.66667V10.0002L4 7.3335ZM5.33333 11.0002H2.66667V10.4668L4 9.1335L5.33333 10.4668V11.0002Z"
        fill="white"
      ></path>
    </svg>
  );
}

export default IconClaim;
