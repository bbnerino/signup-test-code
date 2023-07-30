/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import SignupPage from "../page/signup";
import userEvent from "@testing-library/user-event";
import { delay } from "./utils";

describe("'회원가입창 확인", () => {
  describe("회원가입창 렌더 확인", () => {
    test("헤더 확인", async () => {
      render(<SignupPage />);
      const $header = await screen.findByTestId("signup-header");
      expect($header).toBeInTheDocument();
    });
  });

  describe("직무 선택 화면", () => {
    test("직무 4가지 렌더링 확인", async () => {
      render(<SignupPage />);
      const jobs = ["의사", "간호사", "연구자", "행정 담당자"];
      const $labels = await screen.findAllByTestId("job-label");
      $labels.forEach(($label, index) => {
        expect($label).toHaveTextContent(jobs[index]);
      });
    });

    test("직무 선택시 checked 확인", async () => {
      render(<SignupPage />);
      const $doctor_button = await screen.findByTestId("job-input-doctor");
      const $nurse_button = await screen.findByTestId("job-input-nurse");

      act(() => userEvent.click($doctor_button));
      expect($doctor_button).toBeChecked();

      act(() => userEvent.click($nurse_button));
      expect($doctor_button).not.toBeChecked();
    });

    test("직무 미 선택시 에러 문구 확인", async () => {
      render(<SignupPage />);
      const $next_btn = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn));
      expect(await screen.findByTestId("error-message")).toBeInTheDocument();
    });

    test("직무 선택 후 2페이지 변경 확인", async () => {
      render(<SignupPage />);
      const $doctor_button = await screen.findByTestId("job-input-doctor");
      act(() => userEvent.click($doctor_button));

      const $next_btn = await screen.findByTestId("next-button");
      act(() => userEvent.click($next_btn));

      await delay(100);
      expect(await screen.findByTestId("chapter-title-2")).toBeInTheDocument();
    });
  });
});
