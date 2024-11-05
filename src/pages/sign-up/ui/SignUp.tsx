import { AuthApiService, useAuth } from '@/features/auth/api';
import { SignUpRequest } from '@/features/auth/model/auth.type';
import { AuthForm, AuthLayout, AuthLink } from '@/features/auth/ui';

const title = '회원 가입';

/*
 * TODO: react-query mutation으로 에러 처리
 */
const SignUp = () => {
  const { setUserStorage, navigateToApp } = useAuth();

  const onSignUp = async ({ email, password }: SignUpRequest) => {
    const response = await AuthApiService.signUp({ email, password });
    const token = response?.token;

    setUserStorage({ email, token });
    navigateToApp();
  };

  return (
    <AuthLayout>
      <AuthForm title={title} onClick={onSignUp} />
      <AuthLink
        preText="이미 회원이신가요?"
        link="/auth/sign-in"
        linkText="로그인"
      />
    </AuthLayout>
  );
};

export default SignUp;
