import React from 'react'
import './LoginAdminPanel.css' 

function LoginAdminPanel() {
  return (
    <div>
        <form>
            <label for='id'>Enter user ID</label>
            <input type='text' id='id' placeholder='Kongu_id' />
            <br/>
            <label for='id'>Enter password</label>
            <input type='password' id='password' placeholder='Password' />
            <br/>
            <input type='submit' id='submit' value='Submit'/>
            <br/>
            <br/>
      </form>

    </div>
  )
}

export default LoginAdminPanel