import React from "react";

export default function Radio({ className, name, checked }) {
  return (
    <div className={`relative ${className}`}>
      <label className="wrap-radio cursor-pointer">
        <input type="radio" defaultChecked={checked} className="radio-cs" name={name} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
