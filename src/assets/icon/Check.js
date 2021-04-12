import React from "react";

export default function Check({ width, height, fill, className }) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5821 4.9183C17.9726 5.30883 17.9726 5.942 17.5821 6.33251L8.83209 15.0821C8.44158 15.4726 7.80845 15.4726 7.41792 15.0821L3.04292 10.7075C2.65238 10.317 2.65235 9.68386 3.04286 9.29331C3.43337 8.90277 4.06653 8.90274 4.45708 9.29325L8.12498 12.9608L16.1679 4.91827C16.5584 4.52775 17.1916 4.52777 17.5821 4.9183Z"
        fill={fill}
      />
    </svg>
  );
}

Check.defaultProps = {
  width: "20",
  height: "20",
  fill: "black",
};
