import React from "react";

export default function Modal({ onClick, content }) {
  return (
    <div className="fixed inset-0 z-10">
      <div
        onClick={onClick}
        className="fixed inset-0 bg-gray-600 opacity-50 z-20"
      ></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full z-20">
        {content}
      </div>
    </div>
  );
}
