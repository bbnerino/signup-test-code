import { styled } from "styled-components";
import Header from "../../library/header/header";
import { useState } from "react";
import { SignupChapter } from "../../types/constants/signup.constants";
import Signup1 from "./chapter/1";
import { Job } from "../../types/signup/signup";
import Signup2 from "./chapter/2";
import Signup3 from "./chapter/3";

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
      {chapter === 2 && job && (
        <Signup2
          job={job}
          company={company}
          setCompany={setCompany}
          setChapter={setChapter}
        />
      )}
      {chapter === 3 && job && (
        <Signup3
          setChapter={setChapter}
          job={job}
          license={license}
          setLicense={setLicense}
        />
      )}
      {/* {chapter === 4 && <Signup1 />} */}
      {/* {chapter === 5 && <Signup1 />} */}
      {/* {chapter === 6 && <Signup1 />} */}
    </Wrapper>
  );
};

const Wrapper = styled.article``;
export default SignupPage;
