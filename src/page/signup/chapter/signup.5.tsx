import { useEffect, useState } from "react";
import InputLabel from "../../../library/input/input.label";
import useInput from "../../../library/hooks/useInput";
import { REGEX } from "../../../types/signup/regex";
import { SignupProps } from "../script/signup.props";
import SignupWrap from "../components/form/signup.wrap";

const Signup5 = ({ setChapter, signupForm, setSignupForm }: SignupProps) => {
  const passwordInput = useInput("");
  const passwordInput2 = useInput("");

  const [errorPasswordMessage, setErrorPasswordMessage] = useState<
    null | string
  >(null);
  const [errorPasswordMessage2, setErrorPasswordMessage2] = useState<
    null | string
  >(null);

  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const toPrev = () => setChapter(4);

  const checkPassword = (password: string) => REGEX.PASSWORD.test(password);

  useEffect(() => {
    if (passwordInput.value === "") return setErrorPasswordMessage(null);
    if (!checkPassword(passwordInput.value)) {
      return setErrorPasswordMessage("8~16자 영문,숫자,특수문자를 입력하세요.");
    }
    setErrorPasswordMessage(null);
  }, [passwordInput.value]);

  useEffect(() => {
    if (passwordInput2.value === "") return setErrorPasswordMessage2(null);
    if (passwordInput.value !== passwordInput2.value) {
      return setErrorPasswordMessage2("비밀번호와 일치하지 않습니다.");
    }
    setErrorPasswordMessage2(null);
  }, [passwordInput2.value, passwordInput.value]);

  const onSubmit = () => {
    if (
      passwordInput.value === "" ||
      passwordInput2.value === "" ||
      errorPasswordMessage ||
      errorPasswordMessage2
    )
      return setErrorMessage("비밀번호를 확인해주세요.");
    setSignupForm({ ...signupForm, password: passwordInput.value });
    setChapter(6);
  };
  return (
    <SignupWrap>
      <SignupWrap.Title title="비밀번호를 입력하세요." dataTestid="5" />
      <SignupWrap.Content>
        <InputLabel
          title="비밀번호"
          type="password"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
          placeholder="비밀번호를 입력하세요."
          errorMessage={errorPasswordMessage}
          dataTestId="password-input"
        />
        <InputLabel
          title="비밀번호 확인"
          type="password"
          value={passwordInput2.value}
          onChange={passwordInput2.onChange}
          placeholder="비밀번호를 한번 더 입력하세요."
          errorMessage={errorPasswordMessage2}
          dataTestId="password2-input"
        />
        {errorMessage && (
          <p data-testid="error-message" className="error-message">
            {errorMessage}
          </p>
        )}
      </SignupWrap.Content>

      <SignupWrap.Footer left={{ onSubmit: toPrev }} right={{ onSubmit }} />
    </SignupWrap>
  );
};

export default Signup5;
