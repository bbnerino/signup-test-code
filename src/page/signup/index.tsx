import { styled } from "styled-components";
import Header from "../../library/header/header";
import { useState } from "react";
import { SignupChapter } from "../../types/constants/signup.constants";
import Signup1 from "./chapter/1";
import { SignupForm } from "../../types/signup/signup.entity";
import Signup2 from "./chapter/2";
import Signup3 from "./chapter/3";
import Signup4 from "./chapter/4";
import Signup5 from "./chapter/5";
import Signup6 from "./chapter/6";

interface Props {
  chapterData?: SignupChapter;
}

const SignupPage = ({ chapterData = 1 }: Props) => {
  const [chapter, setChapter] = useState<SignupChapter>(chapterData);
  const [signupForm, setSignupForm] = useState<SignupForm>(new SignupForm());
  // 1) 직무 선택  2) 소속  3) 면허 번호  4) 계정  5) 비밀번호  6) 완료
  const props = { setChapter, signupForm, setSignupForm };
  return (
    <Wrapper>
      <Header title="회원 가입" />
      {chapter === 1 && <Signup1 {...props} />}
      {chapter === 2 && <Signup2 {...props} />}
      {chapter === 3 && <Signup3 {...props} />}
      {chapter === 4 && <Signup4 {...props} />}
      {chapter === 5 && <Signup5 {...props} />}
      {chapter === 6 && <Signup6 />}
    </Wrapper>
  );
};

const Wrapper = styled.article``;
export default SignupPage;
