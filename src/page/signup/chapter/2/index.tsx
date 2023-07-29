import React, { useEffect, useState } from "react";
import { Job } from "../../../../types/signup/signup.entity";
import { SignupChapter } from "../../../../types/constants/signup.constants";
import { styled } from "styled-components";
import RoundButton from "../../../../library/button/round.button";
import SignupForm from "../../components/signup.form";
import useInput from "../../../../library/hooks/useInput";
import InputLabel from "../../../../library/input/input.label";
import CompanyList from "./company.list";
import SignupTitleForm from "../../components/signup.form.title";
import SignupButtonForm from "../../components/signup.form.button";

interface Props {
  job: Job;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
}

const Signup2 = ({ job, company, setCompany, setChapter }: Props) => {
  const [companyInput, setCompanyInput] = useState(company);
  const [popCompanylist, setPopCompanylist] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onSubmit = () => {
    if (job.company) {
      if (company === "") return setErrorMessage("기관명을 입력하세요.");
    }
    if (!job.company) {
      if (companyInput === "") return setErrorMessage("기관명을 입력하세요.");
      setCompany(companyInput);
    }
    setChapter(3);
  };

  return (
    <SignupForm>
      <SignupTitleForm
        title="소속된 기관을 입력하세요."
        subTitle="쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다."
      />
      <div className="content">
        <div className="input_box">
          <div onClick={() => setPopCompanylist(!popCompanylist)}>
            <InputLabel
              searchMode={job && job.company ? true : false}
              title="기관명"
              onChange={(e) => setCompanyInput(e.target.value)}
              value={companyInput}
              placeholder="기관명을 입력하세요"
              errorMessage={errorMessage}
            />
          </div>
          {job.company && popCompanylist && (
            <CompanyList
              setCompany={setCompany}
              inputValue={companyInput}
              setInputValue={setCompanyInput}
              setPopCompanylist={setPopCompanylist}
            />
          )}
        </div>
      </div>
      {/* {job && job.license && <CompanyList />} */}
      <SignupButtonForm>
        <RoundButton variant="secondary" onClick={() => setChapter(1)}>
          &lt; 이전
        </RoundButton>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </SignupButtonForm>
    </SignupForm>
  );
};

export default Signup2;
