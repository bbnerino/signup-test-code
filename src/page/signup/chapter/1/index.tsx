import React, { useEffect } from "react";
import { SignupChapter } from "../../../../types/constants/signup.constants";
import { styled } from "styled-components";
import JobList from "./job.list";
import RoundButton from "../../../../library/button/round.button";
import SignupTitleForm from "../../components/signup.form.title";
import SignupButtonForm from "../../components/signup.form.button";
import { Job, SignupForm } from "../../../../types/signup/signup.entity";
import SignupFormWrapper from "../../components/signup.form";

interface Props {
  signupForm: SignupForm;
  setSignupForm: React.Dispatch<React.SetStateAction<SignupForm>>;
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
}

const Signup1 = ({ signupForm, setSignupForm, setChapter }: Props) => {
  const onSubmit = () => {
    if (signupForm.job === null) return alert("직무를 선택해주세요");
    setChapter(2);
  };

  const setJob = (job: Job) => {
    setSignupForm({ ...signupForm, job });
  };

  return (
    <SignupFormWrapper>
      <SignupTitleForm title="해당하는 직무를 선택하세요" />
      <div className="content">
        <JobList signupForm={signupForm} setJob={setJob} />
      </div>
      <SignupButtonForm>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </SignupButtonForm>
    </SignupFormWrapper>
  );
};

export default Signup1;
