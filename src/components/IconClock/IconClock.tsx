function IconClock({ className }: { className?: string }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"w-5 h-5 me-2.5 " + className}
    >
      <g clipPath="url(#clip0_251_895)">
        <path
          opacity="0.3"
          d="M12.5699 6.01001C8.69995 6.01001 5.56995 9.14001 5.56995 13.01C5.56995 16.88 8.69995 20.01 12.5699 20.01C16.4399 20.01 19.5699 16.88 19.5699 13.01C19.5699 9.14001 16.4399 6.01001 12.5699 6.01001ZM13.5699 14.01H11.5699V8.01001H13.5699V14.01Z"
          fill="white"
          fillOpacity="0.2"
        ></path>
        <path
          d="M9.56995 1.01001H15.5699V3.01001H9.56995V1.01001ZM11.5699 8.01001H13.5699V14.01H11.5699V8.01001ZM19.5999 7.39001L21.0199 5.97001C20.5899 5.46001 20.1199 4.98001 19.6099 4.56001L18.1899 5.98001C16.6399 4.74001 14.6899 4.00001 12.5699 4.00001C7.59995 4.00001 3.56995 8.03001 3.56995 13C3.56995 17.97 7.58995 22 12.5699 22C17.5499 22 21.5699 17.97 21.5699 13C21.5699 10.89 20.8299 8.93001 19.5999 7.39001ZM12.5699 20.01C8.69995 20.01 5.56995 16.88 5.56995 13.01C5.56995 9.14001 8.69995 6.01001 12.5699 6.01001C16.4399 6.01001 19.5699 9.14001 19.5699 13.01C19.5699 16.88 16.4399 20.01 12.5699 20.01Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_251_895">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconClock;
