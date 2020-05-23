import React, { useState } from 'react';
import styled from 'styled-components';
import UX from '../../Components/CurriculumComponents/UX';
import APP from '../../Components/CurriculumComponents/APP';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CurriculumHeader = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.cBlue};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 45px;
  font-weight: 900;
  text-align: center;
`;

const MainTitleDescription = styled.div`
  width: 100%;
  height: 100%;
  font-size: 45px;
  font-weight: lighter;
  text-align: center;
`;

const CurriculumBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eef3c0;
  justify-content: center;
  align-items: center;
`;

const CurriculumBodyDescriptionMiddle = styled.div`
  padding: 40px;
  font-size: 25px;
  text-align: center;
  color: black;
  line-height: 45px;
`;

const CurriculumBodyDescriptionSmall = styled.div`
  font-size: 15px;
  margin: 10px;
  line-height: 20px;
  color: black;
`;

const HalfBackground = styled.span`
  font-weight: bold;
  background: linear-gradient(to top, #47dbd9 50%, transparent 50%);
`;

const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleContainerColumn = styled.div`
  font-size: 100px;
  color: #007bec;
  background-color: #eef3c0;
  box-shadow: none;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  font-size: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.theme.cBlue};
  border-radius: 100px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
`;

const CircleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;
const CircleDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 15px;
`;

const UniversityDetailButton = styled.button`
  font-size: 15px;
  margin: 20px;
  font-size: 18px;
  text-decoration: underline;
  padding: 0;
  border: none;
  background: none;
  font-weight: bold;
`;

const SmallText = styled.span`
  font-size: 10px;
`;

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const CurriculumPresenter = ({ coursesDetailUX, coursesDetailAPP }) => {
  const [showCase, setShowCase] = useState(true);
  return (
    <Container>
      <CurriculumHeader>
        <MainTitleDescription id="top">
          코더스하이 실시간 원격 코스
        </MainTitleDescription>
        <MainTitle> 상세 커리큘럼 안내</MainTitle>
      </CurriculumHeader>
      <CurriculumBody>
        <CurriculumBodyDescriptionMiddle>
          코더스하이 실시간 원격 코스는 <br />
          <HalfBackground>하나의 앱을 완성</HalfBackground>해보는 것을 목표로
          하는
          <br />
          <HalfBackground>총 12주 커리큘럼</HalfBackground>으로구성되어 있습니다
        </CurriculumBodyDescriptionMiddle>
        <CircleContainer>
          <CircleContainerColumn>
            <Circle>
              <CircleTitle>UX 디자인</CircleTitle>
              <CircleDescription>(4주)</CircleDescription>
            </Circle>
            <CurriculumBodyDescriptionSmall>
              앱을 만들기 위한 첫 단계로 <br />
              앱의 동작방식을 이해하고 <br />
              프로토타입을 제작합니다
            </CurriculumBodyDescriptionSmall>
            <UniversityDetailButton
              onClick={() => setShowCase(!showCase)}
              disabled={showCase}
            >
              자세히 보기
            </UniversityDetailButton>
          </CircleContainerColumn>
          <CircleContainerColumn>
            +<CurriculumBodyDescriptionSmall></CurriculumBodyDescriptionSmall>
          </CircleContainerColumn>
          <CircleContainerColumn>
            <Circle>
              <CircleTitle>앱 개발</CircleTitle>
              <CircleDescription>(8주)</CircleDescription>
            </Circle>
            <CurriculumBodyDescriptionSmall>
              3명이 한 팀을 이루어 <br />
              앱스토어에 올릴 수 있는 <br />
              수준의 앱을 개발합니다
            </CurriculumBodyDescriptionSmall>
            <UniversityDetailButton
              onClick={() => setShowCase(!showCase)}
              disabled={!showCase}
            >
              자세히 보기
            </UniversityDetailButton>
          </CircleContainerColumn>
        </CircleContainer>
        <CurriculumBodyDescriptionMiddle>
          코더스하이 실시간 원격 코스 수강을 위해서는 <br />
          <B>매주 5~10시간의 학습</B>
          <SmallText>(과제 수행 시간 포함)</SmallText>이 필요합니다.
        </CurriculumBodyDescriptionMiddle>

        {showCase && <UX coursesDetailUX={coursesDetailUX}></UX>}
        {!showCase && <APP coursesDetailAPP={coursesDetailAPP}></APP>}
      </CurriculumBody>
    </Container>
  );
};

CurriculumPresenter.propTypes = {
  coursesDetailUX: PropTypes.array,
  coursesDetailAPP: PropTypes.array
};

export default CurriculumPresenter;
