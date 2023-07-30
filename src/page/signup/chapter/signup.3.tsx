import { useEffect, useState } from "react";
import InputLabel from "../../../library/input/input.label";
import useInput from "../../../library/hooks/useInput";
import { REGEX } from "../../../types/signup/regex";
import { SignupProps } from "../script/signup.props";
import SignupWrap from "../components/form/signup.wrap";

const Signup3 = ({ setChapter, signupForm, setSignupForm }: SignupProps) => {
  const { job, license } = signupForm;
  const licenseInput = useInput(license || "");
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  useEffect(() => {
    if (job && !job.hasLicense) setChapter(4);
  }, [job]);

  const onSubmit = () => {
    if (!REGEX.LICENSE.test(licenseInput.value))
      return setErrorMessage("면허 번호를 확인하세요.");
    setSignupForm({ ...signupForm, license: licenseInput.value });
    setChapter(4);
  };

  return (
    <SignupWrap>
      <SignupWrap.Title
        title="면허 번호를 입력하세요."
        subTitle="쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다."
      />

      <SignupWrap.Content>
        <InputLabel
          title="면허 번호"
          placeholder="면허 번호를 입력하세요."
          {...licenseInput}
          errorMessage={errorMessage}
        />
      </SignupWrap.Content>
      <SignupWrap.Footer
        left={{ onSubmit: () => setChapter(2), title: "< 이전" }}
        right={{ onSubmit, title: "다음 >" }}
      />
    </SignupWrap>
  );
};

export default Signup3;
