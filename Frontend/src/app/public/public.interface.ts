
export interface LoginInterface{
  email: string;
  password: string;
}

export interface UserInterface {
  id: number;
  name: string;
  email: string;
}

export interface LoginSuccessInterface {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  access_token: string;
  user: UserInterface;
}


