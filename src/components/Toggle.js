import React from "react";

export default function Toggle({ className }) {
  return (
    <label className={`wrap-toggle-primary ${className}`}>
      <input type="checkbox" />
      <span className="toggle-primary"></span>
      <span className="toggle-default-primary"></span>
    </label>
  );
}
