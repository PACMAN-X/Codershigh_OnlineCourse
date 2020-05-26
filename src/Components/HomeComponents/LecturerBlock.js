import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CAUCase from './CAUCase';
import HYUCase from './HYUCase';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d3eeff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    padding: ${(props) => props.theme.padding};
  }
`;

const MainTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(1)};
  margin-top: 48px;
  text-align: center;
  color: black;
`;

const Description = styled.div`
  margin-top: 48px;
  ${(props) => props.theme.setMediaQuery(4)};
  color: black;
  text-align: center;
`;

const HalfBackground = styled.span`
  background: linear-gradient(to top, #47dbd9 50%, transparent 50%);
`;

// const IntroductionTutor = styled.div``;

const IntroTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(1)};
  color: black;
  margin-top: 72px;
  text-align: center;
`;

const UniversityCardContainer = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const UniversityCard = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const UniversityImg = styled.img`
  width: 100%;
  height: 10vh;
  min-width: 20px;
  min-height: 20px;
  max-width: 80px;
  max-height: 80px;
  object-fit: contain;
`;

const UniversityName = styled.div`
  ${(props) => props.theme.setMediaQuery(5)};
  margin-top: 10px;
  color: #333333;
`;

const UniversityDetailContainer = styled.div`
  width: 100%;
  padding: 0px 50px;
  margin-top: 80px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
`;

const UniversityDetailColumn = styled.div``;

const UniversityDetailButton = styled.button`
  ${(props) => props.theme.setMediaQuery(5)};
  text-decoration: underline;
  padding: 0;
  border: none;
  background: none;
`;

const LecturerBlock = ({ universities }) => {
  const [showCase, setShowCase] = useState(true);

  return (
    <Container>
      <MainTitle>
        애플이 선정하고
        <br />
        유명 대학들이 선택한
        <br /> APP 개발 코스
      </MainTitle>
      <Description>
        코더스하이의 앱 개발 코스는
        <br /> <HalfBackground>애플이 선정한 교수진</HalfBackground>이 개발하고
        <br /> <HalfBackground>서울시 내 10여개 대학들</HalfBackground>이 경쟁력
        강화를 위해
        <br /> 선택한 앱 개발 특강입니다
      </Description>
      {/* <IntroductionTutor>
        <IntroTitle>코더스하이 튜터를 소개합니다</IntroTitle>
      </IntroductionTutor> */}
      <IntroTitle>
        이미 많은 대학들이 <br />
        코더스하이와 함께 했습니다
      </IntroTitle>
      <UniversityCardContainer>
        {universities[0].map((university) => {
          var Block = (
            <UniversityCard key={university}>
              <UniversityImg
                src={require(`../../Assets/Images/clients/universities/${university}.png`)}
              />
              <UniversityName>{university}</UniversityName>
            </UniversityCard>
          );
          return Block;
        })}
      </UniversityCardContainer>
      <UniversityCardContainer>
        {universities[1].map((university) => {
          var Block = (
            <UniversityCard key={university}>
              <UniversityImg
                src={require(`../../Assets/Images/clients/universities/${university}.png`)}
              />
              <UniversityName>{university}</UniversityName>
            </UniversityCard>
          );
          return Block;
        })}
      </UniversityCardContainer>
      <UniversityDetailContainer>
        <UniversityDetailColumn>
          <UniversityDetailButton
            onClick={() => setShowCase(!showCase)}
            disabled={showCase}
          >
            중앙대학교 사례 보기 ▼
          </UniversityDetailButton>
        </UniversityDetailColumn>
        <UniversityDetailColumn>
          <UniversityDetailButton
            onClick={() => setShowCase(!showCase)}
            disabled={!showCase}
          >
            한양대학교 사례 보기 ▼
          </UniversityDetailButton>
        </UniversityDetailColumn>
      </UniversityDetailContainer>
      {showCase && <CAUCase></CAUCase>}
      {!showCase && <HYUCase></HYUCase>}
    </Container>
  );
};

LecturerBlock.propTypes = {
  universities: PropTypes.array
};

export default LecturerBlock;
