const COMPANY_LIST_URL =
  "https://3billion-public-images.s3.ap-northeast-2.amazonaws.com/organization.txt";

const EMAIL_DUPLICATION_CHECK_URL =
  "https://kkwy2n35ug.execute-api.ap-northeast-2.amazonaws.com/dev/auth/check-duplication";

export const SignupService = {
  getCompanyListUrl: COMPANY_LIST_URL,
  checkIsDuplicatedEmail: async (email: string) => {
    try {
      const response = await fetch(EMAIL_DUPLICATION_CHECK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      return response;
    } catch {
      alert("이메일 중복 확인에 실패했습니다.");
    }
  },
};
