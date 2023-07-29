import React from "react";

interface Props {
  title?: string;
  subTitle?: string;
}

const SignupTitleForm = ({ title = "", subTitle }: Props) => {
  return (
    <div className="title">
      <h5>{title}</h5>
      {subTitle && <h6>{subTitle}</h6>}
    </div>
  );
};

export default SignupTitleForm;
