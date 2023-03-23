import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
export default function login() {
  return (
    <div className='login'>
    <div className='login_left'>
        <h1 className='login_left_headline'>facebook</h1>
        <p className='login_left_text'>Facebook helps you connect and share<br/> with the people in your life.</p>
    </div>
    <div className='login_right' value="login_form">
        <form className='login_right_container'>
            <input type="email" placeholder='Email address and Phone number'/><br></br>
            <input type="password" placeholder='Password'/><br></br>
           <Link to='/home' className='login_link' >Login</Link>
            <p className='login_right_forget'> <a href="#har">forgotten password?</a> </p>
            <p className='line'></p>
            <input type="button" value="Create new account"/>
        </form>
        <div className='login_right_bottom'>
            <p className='login_right_bottom_text'><a href="#ha">Create a Page</a> for celebrity,brand or bussiness.</p>
        </div>
    </div>
    </div>
  )
}
