export interface ResposeLogin {
  token: string;
}

export interface Register {
  username: string;
  password: string;
}

export interface Login extends Register {}
