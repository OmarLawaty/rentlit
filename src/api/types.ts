export interface AuthUser {
  token: string;
}

export type User<structure = 'full'> = structure extends 'full'
  ? FullUser
  : structure extends 'minimal'
  ? MinimalUser
  : never;

export interface MinimalUser {
  name: Name;
  image: string | null;
}

export interface FullUser extends MinimalUser {
  _id: string;
  email: string;
  isVerified: boolean;
  image: string | null;
}

export interface Name {
  first: string;
  last: string;
}

export interface ErrorResponse {
  error: string;
}
