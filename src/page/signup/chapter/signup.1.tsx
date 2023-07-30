import JobList from "../components/job.list";
import { Job } from "../../../types/signup/signup.entity";
import { SignupProps } from "../script/signup.props";
import SignupWrap from "../components/form/signup.wrap";
import { useState } from "react";

const Signup1 = ({ signupForm, setSignupForm, setChapter }: SignupProps) => {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onSubmit = () => {
    if (signupForm.job === null) return setErrorMessage("직무를 선택해주세요");
    setChapter(2);
  };

  const setJob = (job: Job) => {
    setSignupForm({ ...signupForm, job });
  };

  return (
    <SignupWrap>
      <SignupWrap.Title title="해당하는 직무를 선택하세요" />
      <SignupWrap.Content>
        <JobList signupForm={signupForm} setJob={setJob} />
        {errorMessage && (
          <p data-testid="error-message" className="error-message">
            {errorMessage}
          </p>
        )}
      </SignupWrap.Content>

      <SignupWrap.Footer right={{ onSubmit, title: "다음 >" }} />
    </SignupWrap>
  );
};

export default Signup1;
