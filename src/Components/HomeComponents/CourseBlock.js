import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.padding};
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 50px;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin-top: 20px;
`;

const ImageContent = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  height: 100%;
`;
const DirectLink = styled.a`
  margin: 20px;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;
const Description = styled.div`
  ${(props) => props.theme.setMediaQuery(4)};
  margin-bottom: 15px;
  font-size: 15px;
  color: black;
  text-align: center;
  line-height: 30px;
`;

const DividerW = () => (
  <Container>
    <Description>당신의 포트폴리오에 앱 개발 경험을 채워 넣으세요.</Description>
    <CourseHeader>실시간 원격 코스 진행 방식</CourseHeader>
    <ImageContent
      src={require('../../Assets/Images/ImageBlock.png')}
    ></ImageContent>
    <DirectLink
      rel="noopener noreferrer"
      target="_blank"
      href="https://codershigh.github.io/WebSite/#/portfolio"
    >
      앱스토어에 등록된 수강생 작품 보기
    </DirectLink>
  </Container>
);

export default DividerW;
