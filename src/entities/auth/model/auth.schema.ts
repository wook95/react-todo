import { z } from 'zod';

export const authRequestSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다'),
});

export const authResponseSchema = z.object({
  message: z.string(),
  token: z.string(),
});

export const userSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  token: z.string(),
});

export const loginRequestSchema = authRequestSchema;
export const signUpRequestSchema = authRequestSchema;
export const loginResponseSchema = authResponseSchema;
export const signUpResponseSchema = authResponseSchema;

// 타입 추론을 위한 타입 export
export type AuthRequest = z.infer<typeof authRequestSchema>;
export type AuthResponse = z.infer<typeof authResponseSchema>;
export type LoginRequest = z.infer<typeof loginRequestSchema>;
export type SignUpRequest = z.infer<typeof signUpRequestSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export type SignUpResponse = z.infer<typeof signUpResponseSchema>;
export type User = z.infer<typeof userSchema>;
