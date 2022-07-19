import React from 'react';
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

type GoogleLoginButtonProps = {
  onLoginSuccess?: () => void;
  onLoginFailure?: () => void;
};

const GOOGLE_CLIENT_ID = '836663858140-nf0d1j8np1m6fdomtt9g8teb5a2jhvni.apps.googleusercontent.com';

const GoogleLoginButton = (props: GoogleLoginButtonProps) => {
  const { onLoginSuccess, onLoginFailure } = props;
  const onSuccess = (response: CredentialResponse) => {
    // console.log(response);
    // 서버로 credential 보내는 코드 위치

    onLoginSuccess?.();
  };
  const onFailure = () => {
    console.log('Login Failed');
    onLoginFailure?.();
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
