import React from "react";

export default function CheckCircle({ width, height, fill, className }) {
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
        d="M10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75C13.7279 16.75 16.75 13.7279 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10ZM13.98 7.60714C14.266 7.90677 14.255 8.38151 13.9554 8.66752L9.372 13.0425C9.08218 13.3192 8.6261 13.3192 8.33628 13.0425L6.04464 10.855C5.74502 10.569 5.73398 10.0943 6.01999 9.79464C6.30599 9.49502 6.78074 9.48398 7.08036 9.76999L8.85415 11.4632L12.9196 7.58248C13.2193 7.29648 13.694 7.30752 13.98 7.60714Z"
        fill={fill}
      />
    </svg>
  );
}

CheckCircle.defaultProps = {
  width: "20",
  height: "20",
  fill: "black",
};
