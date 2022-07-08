import React, { useState } from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import '../App.css';

function Home() {
  const GOOGLE_CLIENT_ID =
    '836663858140-nf0d1j8np1m6fdomtt9g8teb5a2jhvni.apps.googleusercontent.com';
  const [user, setUser] = useState({ email: '', id: '' });

  const isInstanceOfGoogleLoginResponse = (object: any): object is GoogleLoginResponse =>
    'googleId' in object;

  const onSuccess: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => void = response => {
    if (isInstanceOfGoogleLoginResponse(response)) {
      const {
        profileObj: { googleId, email },
      } = response;
      setUser({ email: email, id: googleId });
      console.log(response);
    } else {
      alert('error');
    }
  };

  const onFailure = (error: any) => {
    console.log(error);
  };

  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Google Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </header>
    </div>
  );
}

export default Home;
