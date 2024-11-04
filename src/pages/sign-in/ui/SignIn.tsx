import { AuthApiService } from '@/features/auth/api';
import { LoginRequest } from '@/features/auth/api/auth.type';
import { AuthForm, AuthLayout, AuthLink } from '@/features/auth/ui';
import { localStorageKeys } from '@/shared/constant';
import { useNavigate } from 'react-router-dom';

const title = '로그인';

/*
 * TODO: react-query mutation으로 에러 처리
 */
const SignIn = () => {
  const navigate = useNavigate();

  const onSignIn = async ({ email, password }: LoginRequest) => {
    const response = await AuthApiService.login({ email, password });
    const token = response?.token;

    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);
    navigate('/app/inbox');
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
