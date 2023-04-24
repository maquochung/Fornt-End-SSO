import React from "react";

function InputField({type, placeholder}) {
  return (
    <div className="form">
        <div className="form-group">
            <input type={type} className="form-control" placeholder={placeholder} />
        </div>
    </div>
  );
}

export default InputField;