import React from "react";

export default function Info({ width, height, fill, className }) {
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
        d="M9.51802 14.3246C9.64836 14.4341 9.81648 14.5 10 14.5H10.625C11.0392 14.5 11.375 14.1642 11.375 13.75C11.375 13.3784 11.1047 13.0699 10.75 13.0104V9.375C10.75 9.20638 10.6944 9.05076 10.6004 8.92549C10.5658 8.87938 10.5261 8.83737 10.482 8.80035C10.3516 8.69091 10.1835 8.625 10 8.625H9.375C9.21501 8.625 9.06672 8.6751 8.94496 8.76046C8.75148 8.8961 8.625 9.12078 8.625 9.375C8.625 9.74662 8.89529 10.0551 9.25 10.1146V13.75C9.25 13.9807 9.35416 14.1871 9.51802 14.3246ZM10.6638 7.22452C10.4941 7.3947 10.2593 7.5 10 7.5C9.75989 7.5 9.54086 7.40973 9.375 7.26128C9.33001 7.22102 9.28894 7.17647 9.25241 7.12828C9.13322 6.97104 9.0625 6.77503 9.0625 6.5625C9.0625 6.04473 9.48223 5.625 10 5.625C10.5178 5.625 10.9375 6.04473 10.9375 6.5625C10.9375 6.82093 10.8329 7.05494 10.6638 7.22452ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10ZM10 3.25C6.27208 3.25 3.25 6.27208 3.25 10C3.25 13.7279 6.27208 16.75 10 16.75C13.7279 16.75 16.75 13.7279 16.75 10C16.75 6.27208 13.7279 3.25 10 3.25Z"
        fill={fill}
      />
    </svg>
  );
}

Info.defaultProps = {
  width: "20",
  height: "20",
  fill: "black",
};