import { Job } from "../signup/signup";

export type SignupChapter = 1 | 2 | 3 | 4 | 5 | 6;

export const JOB_LIST: Job[] = [
  { name: "의사", value: "doctor", company: true },
  { name: "간호사", value: "nurse", company: true },
  { name: "연구자", value: "researcher", company: false },
  { name: "행정 담당자", value: "administrator", company: false },
];
