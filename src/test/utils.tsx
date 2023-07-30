export async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const MockSignupService = {
  checkDuplicateEmail: (email: string) => {
    if (email === "test@3billion.io" || email === "abc@3billion.io") {
      return { status: 409 };
    }
    return { status: 200 };
  },
};
