import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import useTxtData from "../../../library/hooks/useFetchTxt";
import { SignupService } from "../../../types/signup/signup.service";

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setCompany: (company: string) => void;
  setPopCompanylist: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompanyList = ({
  inputValue,
  setCompany,
  setPopCompanylist,
  setInputValue,
}: Props) => {
  const {
    data: companyList,
    loading,
    error,
  } = useTxtData(SignupService.companyListUrl);

  const [filteredCompanyList, setFilteredCompanyList] = useState<string[]>([]);

  useEffect(() => {
    if (inputValue === "") return setFilteredCompanyList([]);
    setFilteredCompanyList(
      companyList.filter((company) => company.includes(inputValue)).slice(0, 7)
    );
  }, [inputValue, companyList]);

  const handleCompanyClick = (company: string) => () => {
    setCompany(company);
    setPopCompanylist(false);
    setInputValue(company);
  };

  if (loading) return <Wrapper>Loading..</Wrapper>;
  if (error) return <Wrapper>회사 불러오기에 실패했습니다..</Wrapper>;

  return (
    <Wrapper data-testid="company-list-popup">
      <div className="company_list">
        {filteredCompanyList.map((company, idx) => (
          <CompanyEl
            key={`${company + idx}`}
            onClick={handleCompanyClick(company)}
            data-testid="company-list-item"
          >
            {company}
          </CompanyEl>
        ))}
        {filteredCompanyList.length === 0 && (
          <div className="no_list">검색 결과가 없습니다.</div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  left: 130px;
  top: 10px;
  width: 450px;
  height: 270px;
  display: flex;
  border-radius: 8px;
  border: 1px solid var(--border-dark);
  overflow-y: auto;
  padding: 15px 0;
  .company_list {
    width: 100%;
  }

  .no_list {
    padding: 5px 15px;
    font-size: 13px;
    font-weight: 500;
    line-height: 26px;
    color: var(--border-dark);
  }
`;

const CompanyEl = styled.div`
  padding: 5px 15px;
  font-size: 13px;
  font-weight: 500;
  line-height: 26px;
  cursor: pointer;
  &:hover {
    background-color: var(--action-light);
  }
`;

export default CompanyList;
