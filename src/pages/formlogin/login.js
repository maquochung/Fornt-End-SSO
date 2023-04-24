import React from 'react'
import useLocalStorage from 'use-local-storage'
import './login.css'
import logo from '../../assets/images/Dark Mode.png'
import ButtonFiled from '../../Components/Login/button'
import CheckboxField from '../../Components/Login/checkbox'
import InputField from '../../Components/Login/Input'
import ForgotPasswordLink from '../../Components/Login/forgot'
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

                <InputField type="login" placeholder=" Login" />
                <InputField type="password" placeholder=" Password" />

            <div className="checkInfo">
                <CheckboxField label="Remember me" />
                <ForgotPasswordLink linkText="Forgot password?" href="#" />
            </div>
            <ButtonFiled type='submit' text={"Login"} />
      </div>    

            <div className="theme-toggle">
                <img onClick= {switchTheme} src={logo} alt='Logo'></img>
            </div> 
    </div>
  );
}

export default LoginForm;