import React, { useEffect, useState } from "react";
import { Job } from "../../../../types/signup/signup";
import { SignupChapter } from "../../../../types/constants/signup.constants";
import { styled } from "styled-components";
import RoundButton from "../../../../library/button/round.button";
import SignupForm from "../../components/signup.form";
import useInput from "../../../../library/hooks/useInput";
import InputLabel from "../../../../library/input/input.label";
import CompanyList from "./company.list";

interface Props {
  job: Job | null;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
}

const Signup2 = ({ job, company, setCompany, setChapter }: Props) => {
  const companyInput = useInput("");
  const [popCompanylist, setPopCompanylist] = useState(false);

  const onSubmit = () => {
    if (!job) return alert("직무를 선택해주세요");
    if (job.company) {
      if (company === "") return alert("기관명을 입력해주세요");
    }
    if (!job.company) {
      if (companyInput.value === "") return alert("기관명을 입력해주세요");
      setCompany(companyInput.value);
    }
    setChapter(3);
  };

  const ToPrev = () => {
    setChapter(1);
  };

  return (
    <SignupForm>
      <div className="title">
        <h5>소속된 기관을 입력하세요.</h5>
        <h6>
          쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고
          있습니다.
        </h6>
      </div>
      <div className="content">
        <div className="input_box">
          <div onClick={() => setPopCompanylist(true)}>
            <InputLabel
              title="기관명"
              {...companyInput}
              placeholder="기관명을 입력하세요"
            />
          </div>
          {job && job.company && popCompanylist && (
            <CompanyList
              setCompany={setCompany}
              inputValue={companyInput.value}
              setInputValue={companyInput.setValue}
              setPopCompanylist={setPopCompanylist}
            />
          )}
        </div>
      </div>
      {/* {job && job.license && <CompanyList />} */}
      <ButtonWrapper>
        <RoundButton variant="secondary" onClick={ToPrev}>
          &lt; 이전
        </RoundButton>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </ButtonWrapper>
    </SignupForm>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  .input_box {
    position: absolute;
  }
`;
export default Signup2;
