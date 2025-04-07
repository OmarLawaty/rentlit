export interface User {
  _id: string;
  token: string;
  user: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    isVerified: boolean;
    image: string | null;
  };
}
