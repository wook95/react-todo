import { useMutation } from '@tanstack/react-query';

import { SignUpRequest } from '@entities/auth/model';
import { authMutations } from '@features/auth/api';
import { useAuth } from '@features/auth/lib';
import { AuthForm, AuthLayout, AuthLink } from '@features/auth/ui';

const title = '회원 가입';

const SignUp = () => {
  const { setUserStorage, navigateToApp } = useAuth();
  const { mutate } = useMutation({
    ...authMutations.signUp(),
    onSuccess: (res, variables) => {
      const token = res.token;
      setUserStorage({ email: variables.email, token });
      navigateToApp();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSignUp = async ({ email, password }: SignUpRequest) => {
    mutate({ email, password });
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
