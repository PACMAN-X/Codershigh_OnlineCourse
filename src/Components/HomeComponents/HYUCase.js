import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1c92ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.theme.padding};
`;
const MainTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(1)};
  margin-top: 70px;
`;

const DescriptionBlock = styled.div`
  text-align: center;
  ${(props) => props.theme.setMediaQuery(2)};
  margin-bottom: 30px;
  line-height: 30px;
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContent = styled.img`
  width: 50%;
  height: 50%;
`;
const ImageDescription = styled.div`
  margin-top: 5px;
  ${(props) => props.theme.setMediaQuery(6)};
`;

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const UniversityCase = () => (
  <Container>
    <MainTitle>코더스하이 X 한양대</MainTitle>
    <DescriptionBlock>
      한양대학교 컴퓨터SW학부는 2016년부터 유일하게 <br />
      <B>코더스하이 수업을 정규 과목으로</B> 편성했습니다.
      <br />
      <br />
      학생들은 <B>1학기 80시간 수업</B>을 통해
      <br />
      <B>3명이 팀</B>을 이뤄 <B>하나의 앱</B>을 만듭니다.
    </DescriptionBlock>
    <ImageContainer>
      <ImageContent src={require('../../Assets/Images/Cases/HYU_Case_1.jpg')} />
      <ImageDescription>*실제 수업 중 촬영된 사진입니다.</ImageDescription>
    </ImageContainer>
    <DescriptionBlock>
      모든 학생에게 <B>맥북을 대여</B>해줌으로써 <br />
      자연스럽게 맥과 친해질 수 있도록 도와주고 있으며,
      <br /> 컴퓨터SW학부 3학년 전공 수업인 만큼 <br />
      많은 학생들이 놀라운 수준의 앱을 만들어냅니다.
    </DescriptionBlock>
    <ImageContainer>
      <ImageContent
        src={require('../../Assets/Images/Cases/HYU_Case_2.jpg')}
      ></ImageContent>
      <ImageDescription>
        *실제 수업 중 촬영된 사진이며, 수강생 개인 정보 보호를 위해 모자이크
        처리했습니다.
      </ImageDescription>
    </ImageContainer>
    <DescriptionBlock>
      <B>한양대학교 창원지원단</B>에서도 이 수업의 성과에 주목하고 <br />
      수업의 발표일을 <B>창업경진대회</B>로 열고 있습니다.
      <br />
      <br />
      2020년 1학기 수업을 실시간 원격 방식으로 진행하면서
      <br /> 코더스하이 실시간 원격 코스의 기반이 되었습니다.
    </DescriptionBlock>
  </Container>
);

export default UniversityCase;
