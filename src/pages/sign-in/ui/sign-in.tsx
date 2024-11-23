import { LoginRequest } from '@entities/auth/model';
import { authMutations } from '@features/auth/api';
import { useAuth } from '@features/auth/lib';
import { AuthForm, AuthLayout, AuthLink } from '@features/auth/ui';
import { useMutation } from '@tanstack/react-query';

const title = '로그인';

const SignIn = () => {
  const { setUserStorage, navigateToApp } = useAuth();
  const { mutate } = useMutation({
    mutationFn: authMutations.login().mutationFn,
    onSuccess: (res, variables) => {
      const token = res.token;
      setUserStorage({ email: variables.email, token });
      navigateToApp();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSignIn = async ({ email, password }: LoginRequest) => {
    mutate({ email, password });
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
