const COMPANY_LIST_URL =
  "https://3billion-public-images.s3.ap-northeast-2.amazonaws.com/organization.txt";

const EMAIL_DUPLICATION_CHECK_URL =
  "https://kkwy2n35ug.execute-api.ap-northeast-2.amazonaws.com/dev/auth/check-duplication";

export const SignupService = {
  getCompanyListUrl: COMPANY_LIST_URL,
  checkIsDuplicatedEmail: async (email: string) => {
    const response = await fetch(EMAIL_DUPLICATION_CHECK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const data = await response.json();
    return data;
  },
};
