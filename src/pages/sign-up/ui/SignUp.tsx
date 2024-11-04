import { AuthApiService } from '@/features/auth/api';
import { SignUpRequest } from '@/features/auth/api/auth.type';
import { AuthForm, AuthLayout, AuthLink } from '@/features/auth/ui';
import { localStorageKeys } from '@/shared/constant';
import { useNavigate } from 'react-router-dom';

const title = '회원 가입';

/*
 * TODO: react-query mutation으로 에러 처리
 */
const SignUp = () => {
  const navigate = useNavigate();

  const onSignUp = async ({ email, password }: SignUpRequest) => {
    const response = await AuthApiService.signUp({ email, password });
    const token = response?.token;

    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);
    navigate('/app/inbox');
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
