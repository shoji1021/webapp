export interface HelloWorldProps {
  message: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export type ApiResponse<T> = {
  data: T;
  message: string;
  status: number;
};