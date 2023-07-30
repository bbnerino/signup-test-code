/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import SignupPage from "../../page/signup";
import userEvent from "@testing-library/user-event";
import fetch from "jest-fetch-mock";
import { MockSignupService, delay } from "../utils";

describe("회원가입 전체 확인", () => {
  describe("의사(간호사) 선택시", () => {
    test("3페이지 렌더링 확인", async () => {
      render(<SignupPage />);
      // 1페이지
      const $title1 = await screen.findByTestId("chapter-title-1");
      expect($title1).toBeInTheDocument();

      const $doctor_button = await screen.findByTestId("job-input-doctor");
      act(() => userEvent.click($doctor_button));
      const $next_btn1 = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn1));

      // 2페이지
      const $title2 = await screen.findByTestId("chapter-title-2");
      expect($title2).toBeInTheDocument();

      const $input2 = await screen.findByTestId("company-input");
      act(() => userEvent.click($input2));
      act(() => userEvent.type($input2, "Hospital"));

      const $selected_company = await screen.findByText("ACMH Hospital");
      act(() => userEvent.click($selected_company));

      const $next_btn2 = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn2));

      // 3페이지
      const $title3 = await screen.findByTestId("chapter-title-3");
      expect($title3).toBeInTheDocument();

      const $input3 = await screen.findByTestId("license-input");
      act(() => userEvent.type($input3, "12345"));
      const $next_btn3 = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn3));

      // 4페이지

      const $title4 = await screen.findByTestId("chapter-title-4");
      expect($title4).toBeInTheDocument();

      const EMAIL = "test.com";
      const $input4 = await screen.findByTestId("email-input");
      act(() => userEvent.type($input4, EMAIL));

      fetch.mockResponseOnce(
        JSON.stringify(MockSignupService.checkDuplicateEmail(EMAIL))
      );

      const $check_btn = await screen.findByTestId("duplicate-button");
      act(() => userEvent.click($check_btn));
      await act(() => delay(300));

      expect($check_btn).toHaveTextContent("확인 완료");

      const $next_btn4 = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn4));

      // 5페이지
      const $title5 = await screen.findByTestId("chapter-title-5");
      expect($title5).toBeInTheDocument();

      const $input5 = await screen.findByTestId("password-input");
      act(() => userEvent.type($input5, "qwer1234@"));

      const $input6 = await screen.findByTestId("password2-input");
      act(() => userEvent.type($input6, "qwer1234@"));

      const $next_btn5 = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn5));

      // 6페이지
      const $title6 = await screen.findByTestId("chapter-title-6");
      expect($title6).toBeInTheDocument();
    });
  });
});
