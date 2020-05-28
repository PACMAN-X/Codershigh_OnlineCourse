import React, { useState } from 'react';
import styled from 'styled-components';
import wreathImage from '../../Assets/Images/wreath.png';
import RegisterModal from './RegisterModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.cBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.padding};
`;

const WreathContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const WreathColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${wreathImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 6vw;
`;

const WreathTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ${(props) => props.theme.setMediaQuery(7)};
  font-weight: lighter;
`;

const WreathDescription = styled.div`
  ${(props) => props.theme.setMediaQuery(7)};
  font-weight: bold;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(1)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SmallTitle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.cBlue};
  color: white;
  font-size: 30px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExtendedSmallTitle = styled(SmallTitle)`
  ${(props) => props.theme.setMediaQuery(3)};
  margin: 5vw 0;
  margin-bottom: 20px;
  &:nth-child(1) {
    font-weight: bold;
  }
`;

const CodershighLogo = styled.img`
  width: 40%;
  max-width: 500px;
  height: 100%;
  background-color: ${(props) => props.theme.cBlue};
  object-fit: contain;
  &:nth-child(2) {
    width: 60%;
    max-width: 600px;
    height: 100%;
    margin-bottom: 5vw;
  }
`;

const DayContainer = styled.div`
  width: 100%;
  margin-top: 26.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0px 10vw;
`;

const DayRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;
const DayColumn = styled.div`
  width: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
`;

const DayTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(5)};
  width: 100%;
  height: 100%;
  max-width: 150px;
  color: white;
  font-weight: 900;
  border-radius: 20px;
  border: solid 1.5px #ffffff;
  padding: 10px 0px;
  text-align: center;
`;
const DayContent = styled.div`
  ${(props) => props.theme.setMediaQuery(5)};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const PriceColumn = styled.div`
  ${(props) => props.theme.setMediaQuery(1)};
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-right: 5px;
  &:nth-child(1) {
    text-decoration: line-through;
    font-weight: lighter;
    ${(props) => props.theme.setMediaQuery(5)};
  }
`;

const RegisterButton = styled.button`
  margin-top: 44.5px;
  width: 100px;
  padding: 20px 0px;
  border-radius: 40px;
  background-color: #ffffff;
  ${(props) => props.theme.setMediaQuery(6)};
  font-weight: bold;
  color: #007bec;
  position: fixed;
  z-index: 100;
  left: 30px;
  bottom: 1.5vh;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 12px 0px !important;
`;

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const HeaderJombo = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = (_modal) => {
    setModal(_modal)
  }
  return ( 
    <Container>
      <WreathContainer>
        <WreathColumn>
          <WreathTitle>누적 수강생</WreathTitle>
          <WreathDescription>5,000명 이상</WreathDescription>
        </WreathColumn>
        <WreathColumn>
          <WreathTitle>방학 특강 신청</WreathTitle>
          <WreathDescription>경쟁률 3:1</WreathDescription>
        </WreathColumn>
        <WreathColumn>
          <WreathTitle>수강생 출시 앱</WreathTitle>
          <WreathDescription>25건 이상</WreathDescription>
        </WreathColumn>
      </WreathContainer>
      <TitleContainer>
        <ExtendedSmallTitle>12주 만에 iOS 앱을 출시할 수 있는</ExtendedSmallTitle>
        <MainTitle>
          <CodershighLogo src={require('../../Assets/Images/codershigh.png')} />
          <CodershighLogo src={require('../../Assets/Images/maintitle.png')} />
        </MainTitle>
      </TitleContainer>
      <DayContainer>
        <DayRow>
          <DayColumn>
            <DayTitle>모집 기간</DayTitle>
          </DayColumn>
          <DayColumn>
            <DayContent>5월 2일 ~ 6월 26일</DayContent>
          </DayColumn>
        </DayRow>
        <DayRow>
          <DayColumn>
            <DayTitle>수강 기간</DayTitle>
          </DayColumn>
          <DayColumn>
            <DayContent>7월 6일 ~ 9월 25일 (12주)</DayContent>
          </DayColumn>
        </DayRow>
        <DayRow>
          <DayColumn>
            <DayTitle>수강 정원</DayTitle>
          </DayColumn>
          <DayColumn>
            <DayContent>30명 (선착순 마감)</DayContent>
          </DayColumn>
        </DayRow>
        <DayRow>
          <DayColumn>
            <DayTitle>개강 일시</DayTitle>
          </DayColumn>
          <DayColumn>
            <DayContent>7월 6일 월요일 저녁 7시</DayContent>
          </DayColumn>
        </DayRow>
      </DayContainer>
      <ExtendedSmallTitle>출시 기념 오프닝 특가</ExtendedSmallTitle>
      <PriceContainer>
        <PriceColumn>550,000원</PriceColumn>
        <PriceColumn>489,000원</PriceColumn>
      </PriceContainer>
      <RegisterButton onClick={e => toggleModal(!modal)}>등록하기</RegisterButton>
      {modal && <ModalBackground>
        <RegisterModal onClose={() => {
          setModal(false)
        }} />
      </ModalBackground>}
    </Container>
  )
};
export default HeaderJombo;
