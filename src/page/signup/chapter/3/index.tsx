import React, { useEffect, useState } from "react";
import { Job } from "../../../../types/signup/signup.entity";
import { SignupChapter } from "../../../../types/constants/signup.constants";
import { styled } from "styled-components";
import RoundButton from "../../../../library/button/round.button";
import SignupFormWrapper from "../../components/signup.form";
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
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(() => {
    if (!job.hasLicense) setChapter(4);
  }, [job]);

  const onSubmit = () => {
    if (!REGEX.LICENSE.test(licenseInput.value))
      return setErrorMessage("면허 번호를 확인하세요.");
    setLicense(licenseInput.value);
    setChapter(4);
  };

  return (
    <SignupFormWrapper>
      <SignupTitleForm
        title="면허 번호를 입력하세요."
        subTitle="쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다."
      />
      <div className="content">
        <InputLabel
          title="면허 번호"
          placeholder="면허 번호를 입력하세요."
          {...licenseInput}
          errorMessage={errorMessage}
        />
      </div>
      <SignupButtonForm>
        <RoundButton variant="secondary" onClick={() => setChapter(2)}>
          &lt; 이전
        </RoundButton>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </SignupButtonForm>
    </SignupFormWrapper>
  );
};

export default Signup3;
