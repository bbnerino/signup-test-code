import React from "react";
import { Job, SignupForm } from "../../../../types/signup/signup.entity";
import { styled } from "styled-components";
import InputRadio from "../../../../library/input/radio";
import { JOB_LIST } from "../../../../types/constants/signup.constants";

interface Props {
  signupForm: SignupForm;
  setJob: (job: Job) => void;
}

const JobList = ({ signupForm, setJob }: Props) => {
  const jobs = JOB_LIST;

  const isChecked = (_job: Job) => {
    if (signupForm.job === null) return false;
    return signupForm.job.value === _job.value;
  };

  return (
    <Wrapper>
      {jobs.map((_job) => (
        <InputRadio
          key={_job.value}
          item={_job}
          setItem={setJob}
          checked={isChecked}
          name={_job.name}
        />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
export default JobList;
