import React from 'react'

function Check() {
  return (
        <div className="checkInfo">
            <div className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <div className="forgot">
                <a href="#">Forgot password?</a>
            </div> 
        </div>
  )
}

export default Check