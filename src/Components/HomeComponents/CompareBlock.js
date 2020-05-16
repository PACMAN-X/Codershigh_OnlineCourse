import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdfdfd;
  text-align: center;
  padding-top: 36px;
  padding-bottom: 43px;
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 50px;
  color: black;
  font-size: 12pt;
  border: 2px solid black;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const BoxContainer = styled.div`
  margin-top: 40px;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const BoxColumn = styled.div`
  width: 200px;
  font-size: 100px;
  display: column;
  justify-content: center;
  align-items: center;
  color: black;
  &:nth-child(2) {
    margin-top: 60px;
  }
  &:nth-child(3) {
    color: #007bec;
  }
`;
const BoxHeader = styled.div`
  line-height: 15px;
  font-size: 15px;
`;

const BoxTitle = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;
const BoxDescription = styled.div`
  margin-top: 20px;
  background-color: #d1d1d1;
  padding: 22px 7px;
  color: black;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  line-height: 15px;
`;

const BlueBoxDescription = styled(BoxDescription)`
  background-color: #007bec;
  color: white;
`;

const BoxCenter = styled.div`
  margin-top: 20px;
  font-size: 15px;
  color: black;
  padding: 22px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterButton = styled.button`
  margin-top: 44.5px;
  width: 70%;
  padding: 5px 0px;
  height: 36px;
  border-radius: 4px;
  border: none;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
  background-color: #007bec;
  font-size: 16px;
  font-weight: 900;
  color: white;
  margin-bottom: 60px;
`;
const InputContainer = styled.form`
  margin-top: 10px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InputColumn = styled.div`
  &:first-child {
    width: 50%;
    padding-right: 10px;
  }
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

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const CompareBlock = () => (
  <Container>
    <CourseHeader>코더스하이 교육비 비교</CourseHeader>
    <BoxContainer>
      <BoxColumn>
        <BoxHeader>코더스하이 기본 교육 과정</BoxHeader>
        <BoxTitle>
          <B>
            iOS App Design & <br />
            Development
          </B>
        </BoxTitle>
        <BoxDescription>7 ~ 8주 집중</BoxDescription>
        <BoxDescription>100만원</BoxDescription>
        <BoxDescription>70만원</BoxDescription>
        <BoxDescription>
          <B>170만원</B>
        </BoxDescription>
      </BoxColumn>
      <BoxColumn>
        <BoxCenter>수강 기간</BoxCenter>
        <BoxCenter>1인당 교육비</BoxCenter>
        <BoxCenter>장소 사용료</BoxCenter>
        <BoxCenter>
          <B>수강생 부담액</B>
        </BoxCenter>
      </BoxColumn>
      <BoxColumn>
        <BoxHeader>코더스하이 온라인 스쿨</BoxHeader>
        <BoxTitle>
          <B>
            실시간 원격 <br />
            iOS App Dev
          </B>
        </BoxTitle>
        <BlueBoxDescription>12주</BlueBoxDescription>
        <BlueBoxDescription>489,00원</BlueBoxDescription>
        <BlueBoxDescription>0원</BlueBoxDescription>
        <BlueBoxDescription>
          <B>489,000원</B>
        </BlueBoxDescription>
      </BoxColumn>
    </BoxContainer>
    <RegisterButton>
      <B>등록하러 가기</B>
    </RegisterButton>
    <BoxHeader>
      이메일 주소를 남겨주시면 <br />
      코더스하이의 최신 교육 프로그램을 알려드립니다.
    </BoxHeader>
    <InputContainer>
      <InputColumn>
        <EmailInput placeholder="example@codershigh.com"></EmailInput>
      </InputColumn>
      <InputColumn>
        <SubmitButton> 이메일 남기기 </SubmitButton>
      </InputColumn>
    </InputContainer>
  </Container>
);

export default CompareBlock;
