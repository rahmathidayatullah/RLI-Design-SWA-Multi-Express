import React from "react";

export default function Checkbox({ className, checked }) {

  return (
    <label className={`wrap-checkbox ${className}`}>
      <input type="checkbox" checked={checked} readOnly />
      <span className="ceklist"></span>
    </label>
  );
}
