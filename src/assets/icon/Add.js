import React from "react";

export default function Add({ width, height, fill, className }) {
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
        d="M10.75 3.125C10.75 2.71079 10.4142 2.375 10 2.375C9.58579 2.375 9.25 2.71079 9.25 3.125V9.25H3.125C2.71079 9.25 2.375 9.58579 2.375 10C2.375 10.4142 2.71079 10.75 3.125 10.75H9.25V16.875C9.25 17.2892 9.58579 17.625 10 17.625C10.4142 17.625 10.75 17.2892 10.75 16.875V10.75H16.875C17.2892 10.75 17.625 10.4142 17.625 10C17.625 9.58579 17.2892 9.25 16.875 9.25H10.75V3.125Z"
        fill={fill}
      />
    </svg>
  );
}

Add.defaultProps = {
  width: "20",
  height: "20",
  fill: "black",
};
