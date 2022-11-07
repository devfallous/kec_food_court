import React from 'react'
import LoginAdminPanel from './LoginAdminPanel'
import './LoginPage.css'
import LoginUserPanel from './LoginUserPanel'



function LoginPage() {


  const [isClicked, setIsClicked] = React.useState(false);

  return (

    <div className='Login_Page'>

      <div className={isClicked ? "container right-panel-active" : "container"} >

        <div class="form-container sign-up-container">

          <form action="#">
            <h1>Create Account</h1>
            
            <input type="text" placeholder="Name" id='input_field'/>
            <input type="password" placeholder="Password" id='input_field' />

            <button id='sign_in_button_yellow'>Sign Up</button>
          </form>
        </div>

        <div class="form-container sign-in-container">
          <form className='sign_in_form' action="#">
            <h1>Sign in</h1>
            <br></br>
            <br></br>

            
            <span id='small_text'>Use your Roll Number</span>            

            <input type="text" placeholder="Roll number" id='input_field' />


            {/* <span>OR USE YOUR PHONE NUMBER</span>

            <input type="text" placeholder="Email" id='input_field' /> */}
            {/* <br></br> */}
            <br></br>
            <br></br>

            <button id='sign_in_button_yellow'>Sign In</button>
          </form>
        </div>

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Admin Panel</h1>
              <p>Only for KEC admin</p>
              <button className="ghost" onClick={() => { setIsClicked(false) }}>Login</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>SIT BACK</h1>
              <h1>RELAX</h1>
              <h1>ENJOY</h1>
              <p>Take up your orders at your PLACE</p>
              <button className="ghost" onClick={() => { setIsClicked(true) }}>Login</button>            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default LoginPage