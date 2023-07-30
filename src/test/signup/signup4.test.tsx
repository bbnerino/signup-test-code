/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import SignupPage from "../../page/signup";
import userEvent from "@testing-library/user-event";

import { SignupForm } from "../../types/signup/signup.entity";
import { JOB_LIST } from "../../types/constants/signup.constants";
import fetch from "jest-fetch-mock";
import { MockSignupService, delay } from "../utils";

describe("회원가입 4페이지 확인", () => {
  describe("이메일 계정 확인", () => {
    const signupForm = new SignupForm();
    signupForm.job = JOB_LIST[0];
    test("4페이지 렌더링 확인", async () => {
      render(<SignupPage chapterData={4} initailForm={signupForm} />);
      const $title = await screen.findByTestId("chapter-title-4");
      expect($title).toBeInTheDocument();
    });
    test("이메일 미입력 & 페이지 이동 시 에러메시지 출력", async () => {
      render(<SignupPage chapterData={4} initailForm={signupForm} />);
      const $next_btn = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn));
      const $error = await screen.findByText("이메일 주소를 입력하세요.");
      expect($error).toBeInTheDocument();

      const $input = await screen.findByTestId("email-input");
      act(() => userEvent.type($input, "test"));
      act(() => userEvent.click($next_btn));
      expect($error).toBeInTheDocument();
    });

    test("중복된 이메일 확인", async () => {
      render(<SignupPage chapterData={4} initailForm={signupForm} />);
      const $input = await screen.findByTestId("email-input");

      const EMAIL = "test@3billion.io";
      act(() => userEvent.type($input, EMAIL));

      fetch.mockResponseOnce(
        JSON.stringify(MockSignupService.checkDuplicateEmail(EMAIL))
      );

      const $check_btn = await screen.findByTestId("duplicate-button");

      act(() => userEvent.click($check_btn));

      await act(() => delay(300));

      const $error = await screen.findByText("이미 사용중인 계정 입니다.");
      expect($error).toBeInTheDocument();
    });
    test("이메일 정상 입력 & 중복 확인", async () => {
      render(<SignupPage chapterData={4} initailForm={signupForm} />);
      const $input = await screen.findByTestId("email-input");

      const EMAIL = "test.com";
      act(() => userEvent.type($input, EMAIL));

      fetch.mockResponseOnce(
        JSON.stringify(MockSignupService.checkDuplicateEmail(EMAIL))
      );

      const $check_btn = await screen.findByTestId("duplicate-button");

      act(() => userEvent.click($check_btn));
      await act(() => delay(300));
      expect($check_btn).toHaveTextContent("확인 완료");
    });
    test("중복 확인 후 5 페이지 넘어가기", async () => {
      render(<SignupPage chapterData={4} initailForm={signupForm} />);
      const $input = await screen.findByTestId("email-input");

      const EMAIL = "test.com";
      act(() => userEvent.type($input, EMAIL));

      fetch.mockResponseOnce(
        JSON.stringify(MockSignupService.checkDuplicateEmail(EMAIL))
      );

      const $check_btn = await screen.findByTestId("duplicate-button");

      act(() => userEvent.click($check_btn));
      await act(() => delay(100));
      const $next_btn = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn));

      const $title = await screen.findByTestId("chapter-title-5");
      expect($title).toBeInTheDocument();
    });
  });
});
