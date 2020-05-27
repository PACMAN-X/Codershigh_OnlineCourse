import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d3eeff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  padding: ${(props) => props.theme.padding};
`;

const MainTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(2)};
  margin-top: 3vh;
  text-align: center;
  color: black;
  font-weight: bold;
`;
const ImageContent = styled.img`
  margin: 3vh;
  width: 30%;
  max-width: 300px;
  height: 100%;
`;

const DirectLink = styled.a`
  margin: 20px;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;

const ImageBgBlock = () => {
  return (
    <Container bgUrl={require('../../Assets/Images/glassBG.jpg')}>
      <MainTitle>
        당신의 포트폴리오에
        <br />앱 개발 경험을 추가하세요!
      </MainTitle>
      <ImageContent
        src={require('../../Assets/Images/icons_students.png')}
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
};

export default ImageBgBlock;
