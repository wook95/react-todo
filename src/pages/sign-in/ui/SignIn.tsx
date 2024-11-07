import { AuthApiService } from '@/features/auth/api';
import { useAuth } from '@/features/auth/lib/guards';
import { LoginRequest } from '@/features/auth/model/auth.type';
import { AuthForm, AuthLayout, AuthLink } from '@/features/auth/ui';

const title = '로그인';

/*
 * TODO: react-query mutation으로 에러 처리
 */
const SignIn = () => {
  const { setUserStorage, navigateToApp } = useAuth();

  const onSignIn = async ({ email, password }: LoginRequest) => {
    const response = await AuthApiService.login({ email, password });
    const token = response?.token;

    setUserStorage({ email, token });
    navigateToApp();
  };

  return (
    <AuthLayout>
      <AuthForm title={title} onClick={onSignIn} />
      <AuthLink
        preText="계정이 없으신가요?"
        link="/auth/sign-up"
        linkText="가입"
      />
    </AuthLayout>
  );
};

export default SignIn;
