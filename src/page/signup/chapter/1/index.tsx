import React, { useEffect } from "react";
import { Job } from "../../../../types/signup/signup";
import { SignupChapter } from "../../../../types/signup/signup.constants";
import { styled } from "styled-components";
import JobList from "./job.list";
import RoundButton from "../../../../library/button/round.button";

interface Props {
  job: Job | null;
  setJob: React.Dispatch<React.SetStateAction<Job | null>>;
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
}

const Signup1 = ({ job, setJob, setChapter }: Props) => {
  const onSubmit = () => {
    if (job === null) return alert("직무를 선택해주세요");
    setChapter(2);
  };
  return (
    <Wrapper>
      <h5>해당하는 직무를 선택하세요</h5>
      <JobList job={job} setJob={setJob} />
      <ButtonWrapper>
        <RoundButton onClick={onSubmit}>다음 &gt; </RoundButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  width: 632px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export default Signup1;
