import React from 'react';
import styled from 'styled-components';

const DividerWBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #fdfdfd;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 70px;
`;

const DividerWBlockColumn = styled.p`
  line-height: 40px;
  font-size: 20px;
  &:last-child {
    font-size: 30px;
    color: #007bec;
  }
`;

const BottomImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DividerW = () => (
  <>
    <DividerWBlock>
      <DividerWBlockColumn>
        이론만 공부하고 끝나는 <br />
        단순한 인터넷 강의가 아닌
      </DividerWBlockColumn>
      <br />
      <DividerWBlockColumn>
        교사와 학생, 학생과 학생 사이의
        <br />
        소통과 협업이 활발하게 이루어지는
        <br />
        실시간 원격 코스입니다
      </DividerWBlockColumn>
    </DividerWBlock>
    <BottomImage src={require('../../Assets/Images/twomen.jpg')}></BottomImage>
  </>
);

export default DividerW;
