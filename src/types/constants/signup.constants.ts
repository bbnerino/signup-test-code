import { Job } from "../signup/signup.entity";

export type SignupChapter = 1 | 2 | 3 | 4 | 5 | 6;

export const JOB_LIST: Job[] = [
  { name: "의사", value: "doctor", hasCompany: true, hasLicense: true },
  { name: "간호사", value: "nurse", hasCompany: true, hasLicense: true },
  { name: "연구자", value: "researcher", hasCompany: false, hasLicense: false },
  {
    name: "행정 담당자",
    value: "administrator",
    hasCompany: false,
    hasLicense: false,
  },
];
