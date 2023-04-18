import React from 'react'
import useLocalStorage from 'use-local-storage'
import './login.css'
import logo from '../../assets/images/Dark Mode.png'
console.log(logo)

function LoginForm() {
  const [theme, setTheme] = useLocalStorage ('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'dark'? 'light' : 'dark';
    setTheme(newTheme)
  }
  
  return (
    <div className="FormLogin"data-theme={theme}>
      <div className='box'>
            <div className="tittle">
                <h1>Sign in</h1>
            </div>
            <div className="decreption">
                <span>Sign in and start managings your candidates!</span>
            </div>

            <div className="form">
                    <div className="form-group">
                        <input type="Login" className="form-control" placeholder="  Login" />
                    </div>
                    <div className="form-group">      
                        <input type="Password" className="form-control" placeholder="  Password" />
                    </div>
            </div>
            <div className="checkInfo">
                <div className="remember">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </div>
                <div className="forgot">
                    <a href="#">Forgot password?</a>
                </div>
            </div>
            <div className="button">
                <button type="submit" className="button_login">Login</button>
            </div>
      </div>    
            <div className="theme-toggle">
                <img onClick= {switchTheme} src={logo} alt='Logo'></img>
            </div> 
            
    </div>
  );
}

export default LoginForm;