function IconClose({ className, onClick }: { className?: string; onClick: () => void }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"w-5 h-5 me-2.5 " + className}
      onClick={onClick}
    >
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="white"
      ></path>
    </svg>
  );
}

export default IconClose;
