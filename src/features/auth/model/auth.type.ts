export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
}

export interface LoginRequest extends AuthRequest {}
export interface SignUpRequest extends AuthRequest {}

export interface LoginResponse extends AuthResponse {}
export interface SignUpResponse extends AuthResponse {}

export interface User {
  email: string;
  token: string;
}
