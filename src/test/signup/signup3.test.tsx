/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import SignupPage from "../../page/signup";
import userEvent from "@testing-library/user-event";

import { SignupForm } from "../../types/signup/signup.entity";
import { JOB_LIST } from "../../types/constants/signup.constants";

describe("회원가입 3페이지 확인", () => {
  describe("의사(간호사) 선택시", () => {
    const signupForm = new SignupForm();
    signupForm.job = JOB_LIST[0];
    test("3페이지 렌더링 확인", async () => {
      render(<SignupPage chapterData={3} initailForm={signupForm} />);
      const $title = await screen.findByTestId("chapter-title-3");
      expect($title).toBeInTheDocument();
    });
    test("면허 번호 미입력 or 5글자 미만 & 페이지 이동 시 에러메시지 출력", async () => {
      render(<SignupPage chapterData={3} initailForm={signupForm} />);
      const $next_btn = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn));
      const $error = await screen.findByText("면허 번호를 확인하세요.");
      expect($error).toBeInTheDocument();

      const $input = await screen.findByTestId("license-input");
      act(() => userEvent.type($input, "1234"));
      act(() => userEvent.click($next_btn));
      expect($error).toBeInTheDocument();
    });
    test("면허 번호 정상 입력 & 4페이지 이동 확인", async () => {
      render(<SignupPage chapterData={3} initailForm={signupForm} />);
      const $next_btn = await screen.findByTestId("next-button");
      const $input = await screen.findByTestId("license-input");
      act(() => userEvent.type($input, "12345"));
      act(() => userEvent.click($next_btn));
      const $title = await screen.findByTestId("chapter-title-4");
      expect($title).toBeInTheDocument();
    });
  });

  describe("연구원(행정 담당자) 선택시", () => {
    const signupForm = new SignupForm();
    signupForm.job = JOB_LIST[2];
    test("곧바로 4페이지 이동 확인", async () => {
      render(<SignupPage chapterData={3} initailForm={signupForm} />);
      const $title = await screen.findByTestId("chapter-title-4");
      expect($title).toBeInTheDocument();
    });
  });
});
