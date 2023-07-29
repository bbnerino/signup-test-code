import { useState } from "react";
import RoundButton from "../../../../library/button/round.button";
import SignupFormWrapper from "../../components/signup.form";
import InputLabel from "../../../../library/input/input.label";
import CompanyList from "./company.list";
import SignupTitleForm from "../../components/signup.form.title";
import SignupButtonForm from "../../components/signup.form.button";
import { SignupProps } from "../../script/signup.props";

const Signup2 = ({ signupForm, setSignupForm, setChapter }: SignupProps) => {
  const { job } = signupForm;

  const [companyInput, setCompanyInput] = useState(signupForm.company);
  const [popCompanylist, setPopCompanylist] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onSubmit = () => {
    if (job === null) return alert("직무를 선택해주세요");
    if (job.hasCompany) {
      if (signupForm.company === "")
        return setErrorMessage("기관명을 입력하세요.");
    }
    if (!job.hasCompany) {
      if (companyInput === "") return setErrorMessage("기관명을 입력하세요.");
      setSignupForm({ ...signupForm, company: companyInput });
    }
    setChapter(3);
  };

  const setCompany = (company: string) => {
    setSignupForm({ ...signupForm, company });
  };

  return (
    <SignupFormWrapper>
      <SignupTitleForm
        title="소속된 기관을 입력하세요."
        subTitle="쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다."
      />
      <div className="content">
        <InputLabel
          onFocus={() => setPopCompanylist(true)}
          searchMode={job && job.hasCompany ? true : false}
          title="기관명"
          onChange={(e) => setCompanyInput(e.target.value)}
          value={companyInput}
          placeholder="기관명을 입력하세요"
          errorMessage={errorMessage}
        />

        {job && job.hasCompany && popCompanylist && (
          <CompanyList
            setCompany={setCompany}
            inputValue={companyInput}
            setInputValue={setCompanyInput}
            setPopCompanylist={setPopCompanylist}
          />
        )}
      </div>
      <SignupButtonForm>
        <RoundButton variant="secondary" onClick={() => setChapter(1)}>
          &lt; 이전
        </RoundButton>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </SignupButtonForm>
    </SignupFormWrapper>
  );
};

export default Signup2;
