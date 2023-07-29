import { styled } from "styled-components";
import SignupWrap from "../components/form/signup.wrap";

const Signup6 = () => {
  return (
    <SignupWrap>
      <Wrapper className="content">
        <img src="/assets/house.png" alt="house" />
        <h5>조금만 기다려주세요.</h5>
        <h5>마지막으로 내부 승인 절차를 진행하고 있습니다.</h5>
        <div className="sub_title">
          <h6>1일(영업일)이내에 승인 여부에 관한 메일이 발송됩니다. </h6>
          <h6>승인이 완료되면 포털에 로그인 할 수 있습니다.</h6>
        </div>
      </Wrapper>
    </SignupWrap>
  );
};

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 250px;
  }
  .sub_title {
    background: var(--background-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 25px;
    padding: 20px;
  }
`;

export default Signup6;
