import { httpClient } from '@/shared/api';
import { AxiosResponse } from 'axios';
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from '../model/auth.type';

export class AuthApiService {
  static async login({ email, password }: LoginRequest) {
    const res = await httpClient.post<
      LoginResponse,
      AxiosResponse<LoginResponse>,
      LoginRequest
    >('/users/login', {
      email,
      password,
    });
    return res.data;
  }

  static async signUp({ email, password }: SignUpRequest) {
    const res = await httpClient.post<
      SignUpResponse,
      AxiosResponse<SignUpResponse>,
      SignUpRequest
    >('/users/create', {
      email,
      password,
    });
    return res.data;
  }
}
