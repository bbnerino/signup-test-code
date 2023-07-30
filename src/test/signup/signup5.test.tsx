/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import SignupPage from "../../page/signup";
import userEvent from "@testing-library/user-event";

import { SignupForm } from "../../types/signup/signup.entity";
import { JOB_LIST } from "../../types/constants/signup.constants";
import { delay } from "../utils";

describe("회원가입 5페이지", () => {
  describe("패스워드 입력", () => {
    test("패스워드 페이지 렌더링 확인", async () => {
      const signupForm = new SignupForm();
      signupForm.job = JOB_LIST[0];
      render(<SignupPage chapterData={5} initailForm={signupForm} />);
      const $title = await screen.findByTestId("chapter-title-5");
      expect($title).toBeInTheDocument();
    });

    test("패스워드 미입력 & 페이지 이동 시 에러메시지 출력", async () => {
      const signupForm = new SignupForm();
      signupForm.job = JOB_LIST[0];
      render(<SignupPage chapterData={5} initailForm={signupForm} />);
      const $next_btn = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn));
      const $error = await screen.findByText("비밀번호를 확인해주세요.");
      expect($error).toBeInTheDocument();
    });

    test("패스워드 정규식 통과 확인", async () => {
      const signupForm = new SignupForm();
      signupForm.job = JOB_LIST[0];
      render(<SignupPage chapterData={5} initailForm={signupForm} />);
      const $input = await screen.findByTestId("password-input");
      act(() => userEvent.type($input, "test"));
      const $error = await screen.findByText(
        "8~16자 영문,숫자,특수문자를 입력하세요."
      );
      expect($error).toBeInTheDocument();
      act(() => userEvent.type($input, "qwer1234@"));
      expect($error).not.toBeInTheDocument();
    });
    test("패스워드 확인 통과 확인", async () => {
      const signupForm = new SignupForm();
      signupForm.job = JOB_LIST[0];
      render(<SignupPage chapterData={5} initailForm={signupForm} />);
      const $input = await screen.findByTestId("password-input");

      const $input2 = await screen.findByTestId("password2-input");

      await act(() => userEvent.type($input, "qwer1234@"));
      await act(() => userEvent.type($input2, "qwer1234!"));

      const $error = await screen.findByText("비밀번호와 일치하지 않습니다.");
      expect($error).toBeInTheDocument();

      await act(() => userEvent.clear($input2));
      await act(() => userEvent.type($input2, "qwer1234@"));
      expect($error).not.toBeInTheDocument();
    });
    test("패스워드 visible 확인", async () => {
      const signupForm = new SignupForm();
      signupForm.job = JOB_LIST[0];
      render(<SignupPage chapterData={5} initailForm={signupForm} />);
      const $input = await screen.findByTestId("password-input");
      await act(() => userEvent.type($input, "qwer1234@"));

      const $visible_btn = await screen.findByTestId("password-input-visible");
      await act(() => userEvent.click($visible_btn));
      expect($input).toHaveAttribute("type", "text");

      await act(() => userEvent.click($visible_btn));
      expect($input).toHaveAttribute("type", "password");
    });
    test("패스워드 입력 후 다음 페이지 이동", async () => {
      const signupForm = new SignupForm();
      signupForm.job = JOB_LIST[0];
      render(<SignupPage chapterData={5} initailForm={signupForm} />);
      const $input = await screen.findByTestId("password-input");
      const $input2 = await screen.findByTestId("password2-input");
      const $next_btn = await screen.findByTestId("next-button");

      await act(() => userEvent.type($input, "qwer1234@"));
      await act(() => userEvent.type($input2, "qwer1234@"));
      await act(() => userEvent.click($next_btn));

      const $title = await screen.findByTestId("chapter-title-6");
      expect($title).toBeInTheDocument();
    });
  });
});
