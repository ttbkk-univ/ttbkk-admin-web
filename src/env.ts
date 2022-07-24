interface Env {
  google: {
    clientId: string;
  };
}

export const env: Env = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID?.toString() || 'error',
  },
};
