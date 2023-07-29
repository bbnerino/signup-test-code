export interface Job {
  name: string;
  value: string;
  hasCompany: boolean;
  hasLicense: boolean;
}

export class SignupForm {
  job: Job | null;
  company: string;
  license?: string;
  email: string;
  password: string;

  constructor() {
    this.job = null;
    this.company = "";
    this.license = "";
    this.email = "";
    this.password = "";
  }
}
