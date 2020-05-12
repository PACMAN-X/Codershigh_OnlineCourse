import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d3eeff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 50px;
  color: black;
  font-size: 15pt;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const MainTitle = styled.div`
  font-size: 48px;
  margin-top: 48px;
  text-align: center;
  color: black;
`;

const Description = styled.div`
  margin-top: 48px;
  font-size: 20px;
  color: black;
  text-align: center;
`;

const HalfBackground = styled.span`
  background: linear-gradient(to top, #47dbd9 50%, transparent 50%);
`;

const IntroductionTutor = styled.div``;

const IntroTitle = styled.div`
  font-size: 25px;
  color: black;
  margin-top: 72px;
  text-align: center;
`;

const UniversityCardContainer = styled.div`
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UniversityCard = styled.div``;

const UniversityImg = styled.img``;

const UniversityName = styled.div``;

const LecturerBlock = ({ universities }) => (
  <Container>
    <CourseHeader>코더스하이의 강점</CourseHeader>
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
    <IntroductionTutor>
      <IntroTitle>코더스하이 튜터를 소개합니다</IntroTitle>
    </IntroductionTutor>
    <UniversityCardContainer>
      <IntroTitle>
        이미 많은 대학들이 <br />
        코더스하이와 함께 했습니다
      </IntroTitle>
      {universities.map((university) => {
        const Block = (
          <UniversityCard>
            <UniversityImg></UniversityImg>
            <UniversityName>{university.name}</UniversityName>
          </UniversityCard>
        );
        return Block;
      })}
    </UniversityCardContainer>
  </Container>
);

LecturerBlock.propTypes = {
  universities: PropTypes.array,
};

export default LecturerBlock;
