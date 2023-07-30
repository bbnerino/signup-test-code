import { useEffect, useState } from "react";
import InputLabel from "../../../library/input/input.label";
import useInput from "../../../library/hooks/useInput";
import { REGEX } from "../../../types/signup/regex";
import { SignupProps } from "../script/signup.props";
import SignupWrap from "../components/form/signup.wrap";

const Signup5 = ({ setChapter, signupForm, setSignupForm }: SignupProps) => {
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
    setSignupForm({ ...signupForm, password: passwordInput.value });
    setChapter(6);
  };
  return (
    <SignupWrap>
      <SignupWrap.Title title="비밀번호를 입력하세요." />
      <SignupWrap.Content>
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
      </SignupWrap.Content>

      <SignupWrap.Footer
        left={{ onSubmit: toPrev, title: "< 이전" }}
        right={{ onSubmit, title: "다음 >" }}
      />
    </SignupWrap>
  );
};

export default Signup5;
