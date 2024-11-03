import { AuthForm, AuthLayout } from '@/features/auth/ui';

const title = '로그인';

const SignIn = () => {
  return (
    <AuthLayout>
      <AuthForm title={title} onClick={() => {}} />
    </AuthLayout>
    // <div>
    //   <header>
    //     <div>이미지?</div>
    //     <div>그래도 해야지 어떡해</div>
    //   </header>
    //   <main>
    //     <h3>로그인</h3>
    //     <form>
    //       <div>
    //         <label htmlFor="email">이메일</label>
    //         <input type="email" id="email" />
    //       </div>
    //       <div>
    //         <label htmlFor="password">비밀번호</label>
    //         <input type="password" id="password" />
    //       </div>
    //       <div>
    //         <button>로그인</button>
    //       </div>
    //       <div>
    //         <p>
    //           계정이 없습니까?
    //           <a href="/auth/sign-up">가입</a>
    //           하세요
    //         </p>
    //       </div>
    //     </form>
    //   </main>
    // </div>
  );
};

export default SignIn;
