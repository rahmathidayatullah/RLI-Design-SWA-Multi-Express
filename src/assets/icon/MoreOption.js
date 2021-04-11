import React from "react";

export default function MoreOption({ width, height, fill, className }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.9375 10C5.9375 10.5178 5.51777 10.9375 5 10.9375C4.48223 10.9375 4.0625 10.5178 4.0625 10C4.0625 9.48223 4.48223 9.0625 5 9.0625C5.51777 9.0625 5.9375 9.48223 5.9375 10Z"
        fill={fill}
      />
      <path
        d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z"
        fill={fill}
      />
      <path
        d="M15 10.9375C15.5178 10.9375 15.9375 10.5178 15.9375 10C15.9375 9.48223 15.5178 9.0625 15 9.0625C14.4822 9.0625 14.0625 9.48223 14.0625 10C14.0625 10.5178 14.4822 10.9375 15 10.9375Z"
        fill={fill}
      />
    </svg>
  );
}

MoreOption.defaultProps = {
  width: "20",
  height: "20",
  fill: "black",
};
