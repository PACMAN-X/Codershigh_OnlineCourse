import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${(props) => props.theme.padding};
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 50px;
  color: black;
  font-weight: bold;
  ${(props) => props.theme.setMediaQuery(4)};
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 50px;
`;

const MainTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(1)};
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

const UniversityDetailButton = styled.button`
  ${(props) => props.theme.setMediaQuery(5)};
  margin: 20px;
  text-decoration: underline;
  padding: 0;
  border: none;
  background: none;
`;
const ImageContent = styled.img`
  margin: 20px;
  width: 25%;
  height: 25%;
`;

const BoxHeader = styled.div`
  text-align: center;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
`;

const DirectLink = styled.a`
  margin: 20px;
  ${(props) => props.theme.setMediaQuery(4)};
  font-weight: bold;
  color: black;
  text-decoration: underline;
  &:last-child {
    opacity: 0.8;
  }
  cursor: pointer;
`;

const Description = styled.div`
  ${(props) => props.theme.setMediaQuery(3)};
  text-align: center;
  color: black;
`;
const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const ImageDescription = styled.div`
  margin-top: 5px;
  ${(props) => props.theme.setMediaQuery(6)};
`;

const ApcspBlock = () => {
  const [showCase, setShowCase] = useState(false);

  return (
    <Container>
      <ImageContent
        src={require('../../Assets/Images/girl&boy.png')}
      ></ImageContent>
      <BoxHeader>중학생 혹은 고등학생인가요?</BoxHeader>
      <MainTitle>중고생을 위한 AP CSP 과정</MainTitle>
      <UniversityDetailButton onClick={() => setShowCase(!showCase)}>
        <B> 자세히 보기 ▼</B>
      </UniversityDetailButton>
      {showCase && (
        <>
          <CourseHeader>미국 수능 출제처에서 설계한 과정</CourseHeader>
          <ImageContent
            src={require('../../Assets/Images/ap.png')}
          ></ImageContent>
          <Description>
            코더스하이가 제공하는 <B>AP CSP 과정</B>은 <br />
            미국의 수능 시험인 SAT 테스트를 운영하는 <br />
            <B>College Board가 개발한 고교학점제 과정</B>입니다.
            <ImageDescription>
              *AP CSP: Advanced Placement Computer Science Principles
            </ImageDescription>
            <br />
            <br />
            <br />
            <B>컴퓨터 과학의 기본 내용을 대학 수준으로</B> 가르치므로, <br />
            <B>미국 대학 입시</B>를 준비하는 학생들은 물론 <br />
            <B>컴퓨터 관련 학과</B>를 지원하는 학생들에게 유용합니다.
          </Description>
          <CourseHeader>진학과 진로에 도움이 되도록</CourseHeader>
          <Description>
            중/고등학생을 위한 코더스하이의 과정은
            <br /> <B>학생들의 진학과 진로</B>에 도움이 될 수 있도록 <br />
            <B>학교 단위로도 신청 가능</B>합니다.
          </Description>
          <DirectLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://youtu.be/xhyglLj3pQI"
          >
            안내 동영상 보기
          </DirectLink>
        </>
      )}
    </Container>
  );
};

export default ApcspBlock;
