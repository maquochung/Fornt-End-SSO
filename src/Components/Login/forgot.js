import React from "react";

function ForgotPasswordLink({linkText, href}) {
  return (
    <div className="forgot">
      <a href={href}>{linkText}</a>
    </div>
  );
}

export default ForgotPasswordLink;