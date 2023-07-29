import React, { useEffect } from "react";
import { Job } from "../../../../types/signup/signup.entity";
import { SignupChapter } from "../../../../types/constants/signup.constants";
import { styled } from "styled-components";
import RoundButton from "../../../../library/button/round.button";
import SignupForm from "../../components/signup.form";
import SignupTitleForm from "../../components/signup.form.title";
import InputLabel from "../../../../library/input/input.label";
import useInput from "../../../../library/hooks/useInput";
import SignupButtonForm from "../../components/signup.form.button";
import { REGEX } from "../../../../types/signup/regex";
import DuplicateButton from "../../../../library/button/duplicate.button";

interface Props {
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
  job: Job;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Signup4 = ({ setChapter, job, email, setEmail }: Props) => {
  const emailInput = useInput(email);

  const onSubmit = () => {
    if (!REGEX.email.test(emailInput.value))
      return alert("계정을 확인해주세요");
    setEmail(emailInput.value);
    setChapter(5);
  };

  const toPrev = () => {
    if (job.license) return setChapter(3);
    setChapter(2);
  };

  return (
    <SignupForm>
      <SignupTitleForm title="계정을 입력하세요 " />
      <div className="content">
        <InputLabel
          title="이메일 계정"
          {...emailInput}
          placeholder="이메일을 입력하세요."
        >
          <DuplicateButton>중복 확인</DuplicateButton>
        </InputLabel>
      </div>

      <SignupButtonForm>
        <RoundButton variant="secondary" onClick={toPrev}>
          &lt; 이전
        </RoundButton>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </SignupButtonForm>
    </SignupForm>
  );
};

export default Signup4;
