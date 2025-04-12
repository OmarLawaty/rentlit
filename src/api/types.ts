export interface User {
  _id: string;
  token: string;
  user: {
    name: Name;
    email: string;
    isVerified: boolean;
    image: string | null;
  };
}

export interface Name {
  first: string;
  last: string;
}

export interface ErrorResponse {
  error: string;
}
