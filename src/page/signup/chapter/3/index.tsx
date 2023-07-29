import React, { useEffect } from "react";
import { Job } from "../../../../types/signup/signup";
import { SignupChapter } from "../../../../types/constants/signup.constants";
import { styled } from "styled-components";
import RoundButton from "../../../../library/button/round.button";
import SignupForm from "../../components/signup.form";
import SignupTitleForm from "../../components/signup.form.title";
import InputLabel from "../../../../library/input/input.label";
import useInput from "../../../../library/hooks/useInput";
import SignupButtonForm from "../../components/signup.form.button";
import { REGEX } from "../../../../types/signup/regex";

interface Props {
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
  job: Job;
  license: string;
  setLicense: React.Dispatch<React.SetStateAction<string>>;
}

const Signup3 = ({ setChapter, job, license, setLicense }: Props) => {
  const licenseInput = useInput(license);

  useEffect(() => {
    !job.license && setChapter(4);
  }, [job]);

  const onSubmit = () => {
    if (!REGEX.license.test(licenseInput.value))
      return alert("면허 번호를 확인해주세요");
    setLicense(licenseInput.value);
    setChapter(4);
  };

  return (
    <SignupForm>
      <SignupTitleForm
        title="면허 번호를 입력하세요."
        subTitle="쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다."
      />
      <div className="content">
        <InputLabel
          title="면허 번호"
          {...licenseInput}
          placeholder="면허 번호를 입력하세요."
        />
      </div>
      <SignupButtonForm>
        <RoundButton variant="secondary" onClick={() => setChapter(2)}>
          &lt; 이전
        </RoundButton>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </SignupButtonForm>
    </SignupForm>
  );
};

export default Signup3;
