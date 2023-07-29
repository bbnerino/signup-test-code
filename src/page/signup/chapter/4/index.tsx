import { useEffect, useState } from "react";
import RoundButton from "../../../../library/button/round.button";
import SignupFormWrapper from "../../components/signup.form";
import SignupTitleForm from "../../components/signup.form.title";
import InputLabel from "../../../../library/input/input.label";
import useInput from "../../../../library/hooks/useInput";
import SignupButtonForm from "../../components/signup.form.button";
import DuplicateButton from "../../../../library/button/duplicate.button";
import { SignupService } from "../../../../types/signup/signup.service";
import { SignupProps } from "../../script/signup.props";

const Signup4 = ({ setChapter, signupForm, setSignupForm }: SignupProps) => {
  const { job, email } = signupForm;
  const emailInput = useInput(email);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [checkEmail, setCheckEmail] = useState(false);
  const [isResponse, setIsResponse] = useState(false);

  const checkEmailDuplicate = async () => {
    setCheckEmail(false);
    if (emailInput.value === "") {
      return setErrorMessage("이메일 주소를 입력하세요.");
    }

    setIsResponse(true);

    const response = await SignupService.checkIsDuplicatedEmail(
      emailInput.value
    );

    setIsResponse(false);

    if (!response) {
      setErrorMessage("서버 오류입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    if (response.status === 200) {
      setErrorMessage(null);
      setCheckEmail(true);
      return;
    }
    if (response.status === 409) {
      setErrorMessage("이미 사용중인 계정 입니다.");
      return;
    }
    setErrorMessage("서버 오류입니다. 잠시 후 다시 시도해주세요.");
  };

  const toPrev = () => {
    if (job && job.hasLicense) return setChapter(3);
    setChapter(2);
  };

  const onSubmit = () => {
    if (!checkEmail) return setErrorMessage("이메일 주소를 입력하세요.");
    setSignupForm({ ...signupForm, email: emailInput.value });
    setChapter(5);
  };

  useEffect(() => setCheckEmail(false), [emailInput.value]);

  const checkDisabled = () => {
    if (isResponse) return true;
    if (checkEmail) return true;
    return false;
  };

  return (
    <SignupFormWrapper>
      <SignupTitleForm title="계정을 입력하세요 " />
      <div className="content">
        <InputLabel
          title="이메일 계정"
          {...emailInput}
          placeholder="이메일을 입력하세요."
          errorMessage={errorMessage}
        >
          <DuplicateButton
            disabled={checkDisabled()}
            onClick={checkEmailDuplicate}
          >
            {isResponse ? "⌛️" : checkEmail ? "확인 완료" : "중복 확인"}
          </DuplicateButton>
        </InputLabel>
      </div>

      <SignupButtonForm>
        <RoundButton variant="secondary" onClick={toPrev}>
          &lt; 이전
        </RoundButton>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </SignupButtonForm>
    </SignupFormWrapper>
  );
};

export default Signup4;
