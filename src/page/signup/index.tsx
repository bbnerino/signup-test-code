import { styled } from "styled-components";
import Header from "../../library/header/header";
import { useState } from "react";
import { SignupChapter } from "../../types/signup/signup.constants";
import Signup1 from "./chapter/1";
import { Job } from "../../types/signup/signup";

interface Props {
  chapterData?: SignupChapter;
}

const SignupPage = ({ chapterData = 1 }: Props) => {
  // 회원가입 단계
  const [chapter, setChapter] = useState<SignupChapter>(chapterData);

  // 1) 직무 선택  2) 소속  3) 면허 번호  4) 계정  5) 비밀번호  6) 완료

  const [job, setJob] = useState<Job | null>(null);

  const [company, setCompany] = useState("");
  const [license, setLicense] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <Header title="회원 가입" />
      {chapter === 1 && (
        <Signup1 job={job} setJob={setJob} setChapter={setChapter} />
      )}
      {/* {chapter === 2 && <Signup1 />} */}
      {/* {chapter === 3 && <Signup1 />} */}
      {/* {chapter === 4 && <Signup1 />} */}
      {/* {chapter === 5 && <Signup1 />} */}
      {/* {chapter === 6 && <Signup1 />} */}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .title {
  }
`;
export default SignupPage;
