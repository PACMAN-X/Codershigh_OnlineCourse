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
  background-repeat: no-repeat;
  padding: ${(props) => props.theme.padding};
  @media (max-width: 768px) {
    background-size: cover;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    background-size: contain;
    background-size: 100%;
  }
  @media (min-width: 1024px) {
    background-size: contain;
    background-size: 100%;
  }
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 100%;
  color: black;
  font-weight: bold;
  ${(props) => props.theme.setMediaQuery(4)};
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  color: white;
  padding: 5px;
`;

const MainTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(2)};
  margin-top: 20vw;
  text-align: center;
  color: black;
  font-weight: bold;
  color: white;
`;

const ImageBgBlock = () => {
  return (
    <Container bgUrl={require('../../Assets/Images/humanBg.jpg')}>
      <CourseHeader>수강생에게 업무 체험 기회 제공</CourseHeader>
      <MainTitle>
        교실 밖으로 나아가
        <br />
        &rsquo;진짜&rsquo; 경험을 쌓을 수 있도록
      </MainTitle>
    </Container>
  );
};

export default ImageBgBlock;
