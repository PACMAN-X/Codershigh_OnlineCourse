import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
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

const DividerW = () => (
  <Container>
    <CourseHeader>실시간 원격 코스 진행 방식</CourseHeader>
  </Container>
);

export default DividerW;
