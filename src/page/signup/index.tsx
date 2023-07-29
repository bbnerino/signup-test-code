import { styled } from "styled-components";
import Header from "../../library/header/header";
import { useState } from "react";
import { SignupChapter } from "../../types/constants/signup.constants";
import Signup1 from "./chapter/1";
import { Job, SignupForm } from "../../types/signup/signup.entity";
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

  // 1) 직무 선택  2) 소속  3) 면허 번호  4) 계정  5) 비밀번호  6) 완료

  const [signupForm, setSignupForm] = useState<SignupForm>(new SignupForm());

  const [job, setJob] = useState<Job | null>(null);

  const [company, setCompany] = useState("");
  const [license, setLicense] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <Header title="회원 가입" />
      {chapter === 1 && (
        <Signup1
          signupForm={signupForm}
          setSignupForm={setSignupForm}
          setChapter={setChapter}
        />
      )}
      {chapter === 2 && (
        <Signup2
          signupForm={signupForm}
          setSignupForm={setSignupForm}
          setChapter={setChapter}
        />
      )}
      {chapter === 3 && job && (
        <Signup3
          job={job}
          setChapter={setChapter}
          license={license}
          setLicense={setLicense}
        />
      )}
      {chapter === 4 && job && (
        <Signup4
          job={job}
          setChapter={setChapter}
          email={email}
          setEmail={setEmail}
        />
      )}
      {chapter === 5 && (
        <Signup5
          setChapter={setChapter}
          password={password}
          setPassword={setPassword}
        />
      )}
      {chapter === 6 && <Signup6 />}
    </Wrapper>
  );
};

const Wrapper = styled.article``;
export default SignupPage;
