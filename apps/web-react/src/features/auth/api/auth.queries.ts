import { LoginRequest, SignUpRequest } from '@entities/auth/model';
import { AuthApiService } from '@features/auth/api';

export const authMutations = {
  login: () => ({
    mutationFn: (data: LoginRequest) => AuthApiService.login(data),
  }),
  signUp: () => ({
    mutationFn: (data: SignUpRequest) => AuthApiService.signUp(data),
  }),
};
