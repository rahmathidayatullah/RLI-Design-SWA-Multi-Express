import React from "react";

export default function Radio({ className, name, checked }) {

  console.log("checked")
  console.log(checked)
  return (
    <div className={`relative ${className}`}>
      <label class="wrap-radio cursor-pointer">
        <input type="radio" checked={checked} class="radio-cs" name={name} />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}
