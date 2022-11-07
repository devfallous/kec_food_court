import React from 'react'
import './LoginUserPanel.css'

function LoginUserPanel() {
  return (
    <div className='Login_User_Panel'>
        <form>
            <label for='id'>Enter your ID</label>
            <input type='text' id='id' placeholder='Roll No' />
            <br/>
            <input type='submit' id='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default LoginUserPanel