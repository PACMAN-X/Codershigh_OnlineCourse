import React, { useState } from 'react';
import styled from 'styled-components';
import UX from '../../Components/CurriculumComponents/UX';
import APP from '../../Components/CurriculumComponents/APP';
import PropTypes from 'prop-types';
import FooterBlock from '../../Components/Footer/FooterBlock';

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
  ${(props) => props.theme.setMediaQuery(1)};
  font-weight: 900;
  text-align: center;
`;

const MainTitleDescription = styled.div`
  width: 100%;
  height: 100%;
  ${(props) => props.theme.setMediaQuery(1)};
  font-weight: lighter;
  text-align: center;
`;

const CurriculumBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eef3c0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CurriculumBodyDescriptionMiddle = styled.div`
  padding: 40px;
  ${(props) => props.theme.setMediaQuery(3)};
  text-align: center;
  color: black;
  line-height: 45px;
`;

const HalfBackground = styled.span`
  font-weight: bold;
  background: linear-gradient(to top, #47dbd9 50%, transparent 50%);
`;

const UniversityDetailButton = styled.button`
  ${(props) => props.theme.setMediaQuery(5)};
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

const BoxContainer = styled.div`
  background-color: #eef3c0;
  margin-top: 40px;
  width: 100%;
  height: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;
const BoxColumn = styled.div`
  width: 100%;
  height: 100%;
  font-size: 100px;
  color: ${(props) => props.theme.cBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    width: 50%;
  }
`;
const BoxTitle = styled.div`
  width: 13vw;
  height: 13vw;
  min-width: 100px;
  min-height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.cBlue};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.setMediaQuery(4)};
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
`;
const BoxDescription = styled.div`
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  color: black;
  ${(props) => props.theme.setMediaQuery(5)};
`;

const CurriculumPresenter = ({ coursesDetailUX, coursesDetailAPP }) => {
  const [showCase, setShowCase] = useState(false);
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
        <BoxContainer>
          <BoxColumn>
            <BoxTitle>
              <B> UX 디자인 (4주)</B>
            </BoxTitle>
            <BoxDescription>
              앱을 만들기 위한 첫 단계로 <br />
              앱의 동작방식을 이해하고 <br />
              프로토타입을 제작합니다
            </BoxDescription>
            <UniversityDetailButton
              onClick={() => setShowCase(!showCase)}
              disabled={showCase}
            >
              자세히 보기
            </UniversityDetailButton>
          </BoxColumn>
          <BoxColumn> ₊ </BoxColumn>
          <BoxColumn>
            <BoxTitle>
              <B> 앱 개발 (8주)</B>
            </BoxTitle>
            <BoxDescription>
              3명이 한 팀을 이루어 <br />
              앱스토어에 올릴 수 있는 <br />
              수준의 앱을 개발합니다
            </BoxDescription>
            <UniversityDetailButton
              onClick={() => setShowCase(!showCase)}
              disabled={!showCase}
            >
              자세히 보기
            </UniversityDetailButton>
          </BoxColumn>
        </BoxContainer>
        <CurriculumBodyDescriptionMiddle>
          코더스하이 실시간 원격 코스 수강을 위해서는 <br />
          <B>매주 5~10시간의 학습</B>
          <SmallText>(과제 수행 시간 포함)</SmallText>이 필요합니다.
        </CurriculumBodyDescriptionMiddle>
        {showCase && <UX coursesDetailUX={coursesDetailUX}></UX>}
        {!showCase && <APP coursesDetailAPP={coursesDetailAPP}></APP>}
      </CurriculumBody>
      <FooterBlock></FooterBlock>
    </Container>
  );
};

CurriculumPresenter.propTypes = {
  coursesDetailUX: PropTypes.array,
  coursesDetailAPP: PropTypes.array,
  showCase: PropTypes.bool
};

export default CurriculumPresenter;
