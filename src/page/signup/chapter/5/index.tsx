import React, { useEffect, useState } from "react";
import { Job } from "../../../../types/signup/signup.entity";
import { SignupChapter } from "../../../../types/constants/signup.constants";
import RoundButton from "../../../../library/button/round.button";
import SignupForm from "../../components/signup.form";
import SignupTitleForm from "../../components/signup.form.title";
import InputLabel from "../../../../library/input/input.label";
import useInput from "../../../../library/hooks/useInput";
import SignupButtonForm from "../../components/signup.form.button";
import { REGEX } from "../../../../types/signup/regex";

interface Props {
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Signup5 = ({ setChapter, password, setPassword }: Props) => {
  const passwordInput = useInput("");
  const passwordInput2 = useInput("");

  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [errorMessage2, setErrorMessage2] = useState<null | string>(null);

  const toPrev = () => {
    setChapter(4);
  };

  const checkPassword = (password: string) => REGEX.PASSWORD.test(password);

  useEffect(() => {
    if (passwordInput.value === "") return setErrorMessage(null);
    if (!checkPassword(passwordInput.value)) {
      return setErrorMessage("8~16자 영문,숫자,특수문자를 입력하세요.");
    }
    setErrorMessage(null);
  }, [passwordInput.value]);

  useEffect(() => {
    if (passwordInput2.value === "") return setErrorMessage2(null);
    if (passwordInput.value !== passwordInput2.value) {
      return setErrorMessage2("비밀번호와 일치하지 않습니다.");
    }
    setErrorMessage2(null);
  }, [passwordInput2.value, passwordInput.value]);

  const onSubmit = () => {
    if (errorMessage || errorMessage2) return alert("비밀번호를 확인해주세요.");
    setPassword(passwordInput.value);
    setChapter(6);
  };
  return (
    <SignupForm>
      <SignupTitleForm title="비밀번호를 입력하세요." />
      <div className="content">
        <InputLabel
          title="비밀번호"
          type="password"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
          placeholder="비밀번호를 입력하세요."
          errorMessage={errorMessage}
        />
        <InputLabel
          title="비밀번호 확인"
          type="password"
          value={passwordInput2.value}
          onChange={passwordInput2.onChange}
          placeholder="비밀번호를 한번 더 입력하세요."
          errorMessage={errorMessage2}
        />
      </div>

      <SignupButtonForm>
        <RoundButton variant="secondary" onClick={toPrev}>
          &lt; 이전
        </RoundButton>
        <RoundButton onClick={onSubmit}>회원 가입하기 </RoundButton>
      </SignupButtonForm>
    </SignupForm>
  );
};

export default Signup5;
