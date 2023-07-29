import { Job } from "./signup";

export type SignupChapter = 1 | 2 | 3 | 4 | 5 | 6;

export const JOB_LIST: Job[] = [
  { name: "의사", value: "doctor", license: true },
  { name: "간호사", value: "nurse", license: true },
  { name: "연구자", value: "researcher", license: false },
  { name: "행정 담당자", value: "administrator", license: false },
];
