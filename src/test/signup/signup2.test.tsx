/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import SignupPage from "../../page/signup";
import userEvent from "@testing-library/user-event";

import { SignupForm } from "../../types/signup/signup.entity";
import { JOB_LIST } from "../../types/constants/signup.constants";

// 0 { name: "의사", value: "doctor", hasCompany: true, hasLicense: true },
// 1 { name: "간호사", value: "nurse", hasCompany: true, hasLicense: true },
// 2 { name: "연구자", value: "researcher", hasCompany: false, hasLicense: false },
// 3 { name: "행정 담당자", value: "administrator", hasCompany: false, hasLicense: false },

describe("'회원가입 2페이지 확인", () => {
  describe("직무로 의사 선택시", () => {
    const signupForm = new SignupForm();
    signupForm.job = JOB_LIST[0];
    test("Hospital 입력 후 선택 시 input에 입력 & 팝업 닫기 확인", async () => {
      render(<SignupPage chapterData={2} initailForm={signupForm} />);

      // input에 Hospital 입력
      const $input = await screen.findByTestId("company-input");
      act(() => userEvent.click($input));
      act(() => userEvent.type($input, "Hospital"));

      const $popup = await screen.findByTestId("company-list-popup");
      expect($popup).toBeInTheDocument();
      // 기관 목록 7개 확인
      const $company_list = await screen.findAllByTestId("company-list-item");
      expect($company_list.length).toBe(7);

      // 기관 한개 선택
      const $selected_company = await screen.findByText("ACMH Hospital");
      act(() => userEvent.click($selected_company));

      // input에 선택한 기관이 입력됐는지 확인
      expect($input).toHaveValue("ACMH Hospital");

      // 팝업이 닫혔는지 확인
      expect($popup).not.toBeInTheDocument();
    });
  });

  // 위와 동일한 테스트
  describe("직무로 간호사 선택시", () => {
    const signupForm = new SignupForm();
    signupForm.job = JOB_LIST[1];
    test("Hospital 입력 후 선택 시 input에 입력 & 팝업 닫기 확인", async () => {
      render(<SignupPage chapterData={2} initailForm={signupForm} />);

      // input에 Hospital 입력
      const $input = await screen.findByTestId("company-input");
      act(() => userEvent.click($input));
      act(() => userEvent.type($input, "Hospital"));

      const $popup = await screen.findByTestId("company-list-popup");
      expect($popup).toBeInTheDocument();
      // 기관 목록 7개 확인
      const $company_list = await screen.findAllByTestId("company-list-item");
      expect($company_list.length).toBe(7);

      // 기관 한개 선택
      const $selected_company = await screen.findByText("ACMH Hospital");
      act(() => userEvent.click($selected_company));

      // input에 선택한 기관이 입력됐는지 확인
      expect($input).toHaveValue("ACMH Hospital");

      // 팝업이 닫혔는지 확인
      expect($popup).not.toBeInTheDocument();
    });
  });

  describe("직무로 연구자 선택시", () => {
    const signupForm = new SignupForm();
    signupForm.job = JOB_LIST[2];
    test("input 을 누르면 popup 뜨지 않는지 확인", async () => {
      render(<SignupPage chapterData={2} initailForm={signupForm} />);
      const $input = await screen.findByTestId("company-input");
      act(() => userEvent.type($input, "Hospital"));

      const $popup = screen.queryByTestId("company-list-popup");
      expect($popup).not.toBeInTheDocument();
    });
  });

  describe("직무로 행정 담당자 선택시", () => {
    const signupForm = new SignupForm();
    signupForm.job = JOB_LIST[3];
    test("input 을 누르면 popup 뜨지 않는지 확인", async () => {
      render(<SignupPage chapterData={2} initailForm={signupForm} />);
      const $input = await screen.findByTestId("company-input");
      act(() => userEvent.type($input, "Hospital"));

      const $popup = screen.queryByTestId("company-list-popup");
      expect($popup).not.toBeInTheDocument();
    });
  });

  // 의사 간호사 선택시 기관명 미입력시 에러 메세지 확인
  describe("input 미입력시 에러 메시지 확인, input 입력 후 페이지 이동 확인", () => {
    const signupForm = new SignupForm();
    signupForm.job = JOB_LIST[0];
    describe("직무로 의사 선택시", () => {
      test("input 미입력시 에러 메시지 확인", async () => {
        render(<SignupPage chapterData={2} initailForm={signupForm} />);

        const $next_btn = await screen.findByTestId("next-button");
        act(() => userEvent.click($next_btn));
        const $error_message = await screen.findByText("기관명을 입력하세요.");
        expect($error_message).toBeInTheDocument();
      });

      test("3페이지 이동 확인", async () => {
        render(<SignupPage chapterData={2} initailForm={signupForm} />);

        // input에 Hospital 입력
        const $input = await screen.findByTestId("company-input");
        act(() => userEvent.click($input));
        act(() => userEvent.type($input, "Hospital"));

        // 기관 한개 선택
        const $selected_company = await screen.findByText("ACMH Hospital");
        act(() => userEvent.click($selected_company));

        // 페이지 이동 확인
        const $next_btn = await screen.findByTestId("next-button");
        act(() => userEvent.click($next_btn));
        expect(
          await screen.findByTestId("chapter-title-3")
        ).toBeInTheDocument();
      });
    });
    describe("직무로 연구원 선택시", () => {
      const signupForm = new SignupForm();
      signupForm.job = JOB_LIST[2];

      test("input 미입력시 에러 메시지 확인", async () => {
        render(<SignupPage chapterData={2} initailForm={signupForm} />);

        const $next_btn = await screen.findByTestId("next-button");
        act(() => userEvent.click($next_btn));
        const $error_message = await screen.findByText("기관명을 입력하세요.");
        expect($error_message).toBeInTheDocument();
      });

      test("4페이지 이동 확인", async () => {
        render(<SignupPage chapterData={2} initailForm={signupForm} />);

        const $next_btn = await screen.findByTestId("next-button");
        act(() => userEvent.click($next_btn));
        const $error_message = await screen.findByText("기관명을 입력하세요.");
        expect($error_message).toBeInTheDocument();

        // input에 Hospital 입력
        const $input = await screen.findByTestId("company-input");
        act(() => userEvent.click($input));
        act(() => userEvent.type($input, "Hospital"));

        // 페이지 이동 확인
        act(() => userEvent.click($next_btn));
        expect(
          await screen.findByTestId("chapter-title-4")
        ).toBeInTheDocument();
      });
    });
  });
});
