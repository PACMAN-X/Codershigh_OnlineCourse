import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.div`
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 48px;
  font-size: 20px;
  color: black;
  text-align: center;
  line-height: 30px;
  &:last-child {
    margin-bottom: 48px;
  }
`;

const HalfBackground = styled.span`
  background: linear-gradient(to top, #47dbd9 50%, transparent 50%);
`;

const ImageContent = styled.img`
  height: 50%;
  width: 50%;
  margin-top: 40px;
  object-fit: contain;
`;

const Icon = styled.img`
  width: 10%;
  height: 10%;
  margin-top: 40px;
`;

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const BlockiOS = () => (
  <Container>
    <Description> 지금도 늦지 않았다!</Description>
    <MainTitle>iOS 앱 개발을 배워야 하는 이유</MainTitle>
    <ImageContent src={require('../../Assets/Images/mac.jpg')} />
    <Description>
      애플은 아이폰, 아이패드, 애플워치, 그리고 맥까지 <br />
      <HalfBackground>다양한 기기가 통합된 강력한 생태계</HalfBackground>를
      가지고 있으며, <br />
      앱스토어 사용자 <HalfBackground>1인당 기대 매출</HalfBackground>은<br />
      구글 플레이스토어 대비 <HalfBackground>4배 이상</HalfBackground>입니다.
      <br />
      <br />
      아이폰은 한국에서도
      <HalfBackground>20대 스마트폰 점유율 50% 이상</HalfBackground>을 보여
      <br /> 새로운 서비스 제작 시
      <HalfBackground>iOS 앱 개발은 선택이 아닌 필수</HalfBackground>입니다.
    </Description>
    <Icon src={require('../../Assets/Images/appstore.jpg')} />
    <Description>
      하지만 한국의 교육 여건상 <B>iOS 앱 개발자는 항상 부족</B>하여 <br />
      iOS 앱 개발을 배운다면 개발자로서 경쟁력을 갖출 수 있습니다.
      <br />
      <br />
      iOS 앱 개발자가 되어 취업과 창업 중 원하는 걸 선택하세요.
    </Description>
  </Container>
);

export default BlockiOS;
