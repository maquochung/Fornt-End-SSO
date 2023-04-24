import React from "react";

function CheckboxFiled({label}) {
  return (
    <div className="remember">
      <input type="checkbox" className="form-check-input" />
      <label className="form-check-label">{label}</label>
    </div>
  );
}

export default CheckboxFiled;