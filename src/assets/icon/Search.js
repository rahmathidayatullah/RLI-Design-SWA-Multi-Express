import React from "react";

export default function Search({ width, height, fill, className }) {
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
        d="M9.0625 3.25C5.85234 3.25 3.25 5.85234 3.25 9.0625C3.25 12.2727 5.85234 14.875 9.0625 14.875C12.2727 14.875 14.875 12.2727 14.875 9.0625C14.875 5.85234 12.2727 3.25 9.0625 3.25ZM1.75 9.0625C1.75 5.02392 5.02392 1.75 9.0625 1.75C13.1011 1.75 16.375 5.02392 16.375 9.0625C16.375 10.8118 15.7608 12.4176 14.7362 13.6761L18.0299 16.9697C18.3228 17.2626 18.3228 17.7375 18.0299 18.0304C17.737 18.3233 17.2621 18.3233 16.9692 18.0304L13.6755 14.7367C12.4171 15.761 10.8115 16.375 9.0625 16.375C5.02392 16.375 1.75 13.1011 1.75 9.0625Z"
        fill={fill}
      />
    </svg>
  );
}

Search.defaultProps = {
  width: "20",
  height: "20",
  fill: "black",
};
