import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    
    <div className='container'>
         <div className='header'>
            <div className="text">Sign Up</div>
            <div className="underline"></div>
            <div className="inputs">
                <div className="input">
                    <input type="text" name="" id="" placeholder='FirstName'/>
                </div>
                <div className="input">
                    <input type="text" name="" id="" placeholder='LastName' />
                </div>
                <div className="input">
                    <input type="email" name="" id="" placeholder='Email id'/>
                </div>
                <div className="input">
                    <input type="password" name="" id="" placeholder='password'/>
                </div>
            </div>
            <div>
            <button>Sign Up</button>
            <button>Login</button>
         </div>

         </div>
         
         
    </div>
  )
}

export default LoginSignup