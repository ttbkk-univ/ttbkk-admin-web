import React, { useState } from 'react';
import '../App.css';
import GoogleLoginButton from 'src/components/GoogleLoginButton';
import { googleLogout } from '@react-oauth/google';

function Home(): JSX.Element {
  const [isLogged, setIsLogged] = useState(false);

  const onClickGoogleLogout = () => {
    if (isLogged) {
      googleLogout();
      setIsLogged(false);
      alert('Logout success!');
    } else {
      alert('Not logged now');
    }
  };

  return (
    <div className="App">
      <header className="App-header">{isLogged ? 'Logged' : 'Not Logged'}</header>
      <div className="App-body">
        <GoogleLoginButton
          onLoginSuccess={() => {
            setIsLogged(true);
            alert('Login success!');
          }}
        />
        <button className="button" onClick={onClickGoogleLogout}>
          Google Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
