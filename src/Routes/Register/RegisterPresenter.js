import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.form`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.cBlue};
`;

const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

const InputColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  height: 36px;
  padding: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 4px;
  background-color: #363636;
  color: white;
  font-weight: bold;
`;

const RegisterPresenter = () => {
  return (
    <InputContainer>
      <InputRow>
        <InputColumn>이름</InputColumn>
        <InputColumn>
          <EmailInput placeholder="example@codershigh.com"></EmailInput>
        </InputColumn>
      </InputRow>
      <InputRow>
        <InputColumn>Email을 입력해 주세요.</InputColumn>
        <InputColumn>
          <EmailInput placeholder="example@codershigh.com"></EmailInput>
        </InputColumn>
      </InputRow>
      <InputRow>
        <InputColumn>주소</InputColumn>
        <InputColumn>
          <EmailInput placeholder="example@codershigh.com"></EmailInput>
        </InputColumn>
      </InputRow>
      <SubmitButton>제출하기</SubmitButton>
    </InputContainer>
  );
};

export default RegisterPresenter;
