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
  padding: ${(props) => props.theme.padding};
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 50px;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const BoxContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 700px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const BoxColumn = styled.div`
  width: 100%;
  display: column;
  justify-content: center;
  align-items: center;
  color: black;
  &:nth-child(2) {
    @media (max-width: 768px) {
      margin-top: 8vh;
    }
    @media all and (min-width: 768px) and (max-width: 1024px) {
      margin-top: 9vh;
    }
    @media (min-width: 1024px) {
      margin-top: 10vh;
    }
  }
  &:nth-child(3) {
    color: #007bec;
  }
`;
const BoxHeader = styled.div`
  ${(props) => props.theme.setMediaQuery(5)};
`;

const BoxTitle = styled.div`
  margin-top: 10px;
  ${(props) => props.theme.setMediaQuery(5)};
`;
const BoxDescription = styled.div`
  margin-top: 20px;
  padding: 22px 7px;
  color: black;
  ${(props) => props.theme.setMediaQuery(5)};
  border-radius: 5px;
  border: 2px solid black;
`;

const BlueBoxDescription = styled(BoxDescription)`
  color: ${(props) => props.theme.cBlue};
  border: 2px solid ${(props) => props.theme.cBlue};
`;

const BoxCenter = styled.div`
  margin-top: 20px;
  ${(props) => props.theme.setMediaQuery(5)};
  color: black;
  padding: 22px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const RegisterButton = styled.button`
//   margin-top: 44.5px;
//   width: 70%;
//   padding: 5px 0px;
//   height: 36px;
//   border-radius: 4px;
//   border: none;
//   box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
//   background-color: ${(props) => props.theme.cBlue};
//   font-size: 16px;
//   font-weight: 900;
//   color: white;
//   margin-bottom: 60px;
// `;
// const InputContainer = styled.form`
//   margin-top: 10px;
//   width: 50%;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `;

// const InputColumn = styled.div`
//   &:first-child {
//     width: 50%;
//     padding-right: 10px;
//   }
// `;

// const EmailInput = styled.input`
//   border: 1px solid black;
//   border-radius: 4px;
//   width: 100%;
//   height: 36px;
//   padding: 5px;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   height: 36px;
//   border-radius: 4px;
//   background-color: #363636;
//   color: white;
//   font-weight: bold;
// `;

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const Description = styled.div`
  width: 100%;
  ${(props) => props.theme.setMediaQuery(6)};
  color: #6f6f6f;
`;

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
        <BlueBoxDescription>489,000원</BlueBoxDescription>
        <BlueBoxDescription>0원</BlueBoxDescription>
        <BlueBoxDescription>
          <B>489,000원</B>
        </BlueBoxDescription>
      </BoxColumn>
    </BoxContainer>
    <Description>
      *교육비에는 코더스하이의 온라인 동영상 강좌와 학습용 애플리케이션, 과제와
      토론을 위한 LMS 사용료, <br />
      수강생 관리 시스템과 수료증 발행비용이 포함되어 있습니다. 수강생의 앱
      스토어 등록 비용을 덜어드리기 <br />
      위해 코더스하이 계정에 무료 앱으로 등록하며, 수료 후 수강생이 원하는
      계정으로 앱을 전송해드립니다.
    </Description>
    {/* <RegisterButton>
      <B>등록하러 가기</B>
    </RegisterButton> */}
    {/* <BoxHeader>
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
    </InputContainer> */}
  </Container>
);

export default CompareBlock;
