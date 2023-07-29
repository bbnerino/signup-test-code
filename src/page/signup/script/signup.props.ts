import { SignupChapter } from "../../../types/constants/signup.constants";
import { SignupForm } from "../../../types/signup/signup.entity";

export interface SignupProps {
  signupForm: SignupForm;
  setSignupForm: React.Dispatch<React.SetStateAction<SignupForm>>;
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
}
