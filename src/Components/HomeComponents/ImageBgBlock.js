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
  padding-top: 50px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 50px;
  color: black;
  font-size: 12pt;
  border: 2px solid white;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  color: white;
`;

const MainTitle = styled.div`
  font-size: 30px;
  margin-top: 325px;
  margin-bottom: 50px;
  text-align: center;
  color: black;
  font-weight: bold;
  line-height: 40px;
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
