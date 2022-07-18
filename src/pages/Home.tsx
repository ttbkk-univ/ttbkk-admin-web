import React, { useState } from 'react';
import '../App.css';
import GoogleLoginButton from 'components/GoogleLoginButton';

function Home() {
  const [user, setUser] = useState({ email: '', id: '' });

  return (
    <div className="App">
      <header className="App-header">
        <GoogleLoginButton />
      </header>
    </div>
  );
}

export default Home;
