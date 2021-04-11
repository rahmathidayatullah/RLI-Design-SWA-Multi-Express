import React from "react";

export default function Checkbox({ className }) {
  return (
    <label className={`wrap-checkbox ${className}`}>
      <input type="checkbox" />
      <span className="ceklist"></span>
    </label>
  );
}
