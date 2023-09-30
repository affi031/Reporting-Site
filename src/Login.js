import React from 'react'
import './SignInUp.css'

import { Link } from 'react-router-dom';
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'

const Login = () => {

    //const [action,setAction] = useState("Sign Up");

    return (    

        <div className='login--page--container'>
        <div className='upload--header'>
        <p className='upload--header--text'>FAKE-O_GRAM</p>
        <button className='logout--button'>Logout</button>
      </div>
        <div className='login--page'>
            <div className='image--holder'>
            <img src="https://play-lh.googleusercontent.com/aV1VDMYcLabTg70eCud19CJfyVO23u6S2tQIEsArYpT7san0q2mFZZniMNMlWBqL-zs" className='main--image'></img>
        </div>

        <div className='signup'>
            <div className='signup--text'>
                <h3 className='signupText'>Dealing With Fake Profiles</h3>
            </div>
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign In</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
    
                <div className="input">
                    <img src={email_icon} alt='' />
                    <input type='email' placeholder='Email Id'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='Password'/>
                </div>  
            </div>
            <div className="submit-container">
                <div className='submit'>
                    Sign In
                </div>
            </div>
                <div className="text">
                    <p>Already have a account?<Link to="/">Sign Up</Link></p>
                </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Login;
