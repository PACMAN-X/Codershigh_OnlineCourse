import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #007bec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  margin-top: 36.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 20%;
`;

const Description = styled.div`
  font-family: CoreGothicE-3;
  margin-top: 3px;
  font-size: 15px;
  font-weight: 300;
  display: flex;
`;

const TitleContainer = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.div`
  width: 100%;
  font-size: 45px;
  font-family: CoreGothicE-8;
  font-size: 45px;
  font-weight: 900;
  margin-top: 49.5px;
  padding-top: 34px;
  padding-bottom: 18.5px;
  border: solid 6px #ffffff;
  border-radius: 7.5px;
  text-align: center;
`;

const SmallTitle = styled.div`
  width: 173.5px;
  height: 45px;
  background-color: #007bec;
  font-family: CoreGothicE-3;
  font-size: 32px;
  font-weight: 300;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 30px;
`;

const DayContainer = styled.div`
  width: 60%;
  margin-top: 26.5px;
  display: flex;
  justify-content: space-between;
`;

const DayColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const DayColumnTitle = styled.div`
  width: 100px;
  height: 30px;
  font-family: CoreGothicE-8;
  color: #007bec;
  font-size: 15px;
  font-weight: 900;
  background-color: white;
  border-radius: 12.3px;
  border: solid 1.5px #ffffff;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const DayColumnDate = styled.div`
  width: 100%;
  font-family: CoreGothicE-4;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterButton = styled.button`
  margin-top: 44.5px;
  width: 60%;
  padding: 5px 0px;
  height: 36px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  font-family: CoreGothicE-8;
  font-size: 16px;
  font-weight: 900;
  color: #007bec;
  margin-bottom: 60px;
`;

const HeaderContentBlock = () => (
  <Container>
    <DescriptionContainer>
      <Description>오프라인 수강생 5만명</Description>
      <Description>앱스토어 출시 앱 1만건 이상</Description>
      <Description>수강생 만족도 99.9%</Description>
    </DescriptionContainer>
    <TitleContainer>
      <SmallTitle>코더스하이</SmallTitle>
      <MainTitle>실시간 원격 코스 출시</MainTitle>
    </TitleContainer>
    <DayContainer>
      <DayColumn>
        <DayColumnTitle>모집 기간</DayColumnTitle>
        <DayColumnDate>5월 2일 ~ 6월 26일</DayColumnDate>
      </DayColumn>
      <DayColumn>
        <DayColumnTitle>수강 기간</DayColumnTitle>
        <DayColumnDate>7월 6일 개강(12주 코스)</DayColumnDate>
      </DayColumn>
    </DayContainer>
    <RegisterButton>등록하러 가기</RegisterButton>
  </Container>
);
export default HeaderContentBlock;
