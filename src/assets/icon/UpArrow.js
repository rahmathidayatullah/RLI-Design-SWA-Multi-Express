import React from "react";

export default function UpArrow({ width, height, fill, className }) {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.46967 5.71967C9.76256 5.42678 10.2374 5.42678 10.5303 5.71967L16.7803 11.9697C17.0732 12.2626 17.0732 12.7374 16.7803 13.0303C16.4874 13.3232 16.0126 13.3232 15.7197 13.0303L10 7.31066L4.28033 13.0303C3.98744 13.3232 3.51256 13.3232 3.21967 13.0303C2.92678 12.7374 2.92678 12.2626 3.21967 11.9697L9.46967 5.71967Z"
        fill={fill}
      />
    </svg>
  );
}

UpArrow.defaultProps = {
  width: "20",
  height: "20",
  fill: "black",
};
