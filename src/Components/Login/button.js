import React from "react"

function ButtonFiled({text, onClick, type = "text"|| "email" || "submit"||"password"}) {
  return (
    <div className="button">
        <button type={type} onClick={onClick} className="button_login">{text}</button>
    </div>
  )
}

export default ButtonFiled

