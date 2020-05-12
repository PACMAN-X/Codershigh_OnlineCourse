import React from 'react';
import styled from 'styled-components';

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
  margin-top: 15px;
  font-size: 15px;
  font-weight: 300;
  display: flex;
`;

const TitleContainer = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
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

const SmallTitleContainer = styled.div`
  width: 270px;
  height: 50px;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  margin-left: -135px;
  top: 50%;
  margin-top: -50px;
`;

const SmallTitleColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  &:nth-child(1) {
    width: 50%;
  }
`;

const SmallTitle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #007bec;
  color: white;
  font-family: CoreGothicE-3;
  font-size: 30px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExtendedSmallTitle = styled(SmallTitle)`
  margin-top: 100px;
  margin-bottom: 15px;
`;

const CodershighLogo = styled.img`
  width: 100%;
  height: 100%;
  background-color: #007bec;
  object-fit: contain;
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

const PriceContainer = styled.div`
  display: flex;
`;

const PriceColumn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  font-size: 60px;
  &:nth-child(1) {
    text-decoration: line-through;
    font-size: 36px;
  }
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

const HeaderJombo = () => (
  <Container>
    <DescriptionContainer>
      <Description>방학 특강 신청 경쟁률 3:1</Description>
      <Description>누적 수강생 5,000명 이상</Description>
      <Description>수업을 통해 25건 이상의 iOS 앱 출시</Description>
    </DescriptionContainer>
    <TitleContainer>
      <SmallTitleContainer>
        <SmallTitleColumn>
          <CodershighLogo
            src={require('../../Assets/Logo/w_logo_simple.png')}
          />
        </SmallTitleColumn>
        <SmallTitleColumn>
          <SmallTitle>코더스하이</SmallTitle>
        </SmallTitleColumn>
      </SmallTitleContainer>
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
    <ExtendedSmallTitle>오프닝 특가</ExtendedSmallTitle>
    <PriceContainer>
      <PriceColumn>500,000</PriceColumn>
      <PriceColumn>489,000</PriceColumn>
    </PriceContainer>
    <RegisterButton>1차 얼리버드 등록하기</RegisterButton>
  </Container>
);
export default HeaderJombo;
