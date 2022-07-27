interface Env {
  google: {
    clientId: string;
  };
}

export const env: Env = {
  google: {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID?.toString() || 'error',
  },
};
