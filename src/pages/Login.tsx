import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import '../App.css'

function Login() {
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_CLIENT_ID || ''
  const [user, setUser] = useState({ email: '', name: '' })
  const onLoginSuccess = (res: any) => {
    // res type 정의 필요
    setUser({ ...user, email: res.profileObj.email, name: res.profileObj.name })
  }
  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Google Login"
          onSuccess={result => onLoginSuccess(result)}
          onFailure={result => console.log(result)}
        />
      </header>
    </div>
  )
}

export default Login
