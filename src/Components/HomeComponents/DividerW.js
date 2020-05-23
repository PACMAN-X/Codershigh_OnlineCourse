import React from 'react';
import styled from 'styled-components';

const DividerWBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #fdfdfd;
  text-align: center;
  padding: ${(props) => props.theme.padding};
`;

const DividerWBlockColumn = styled.p`
  ${(props) => props.theme.setMediaQuery(2)};
  &:last-child {
    font-weight: 600;
    ${(props) => props.theme.setMediaQuery(2)};
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
        교사와 학생, 학생과 학생 사이의 소통과 협업이 <br />
        활발하게 이루어지는
        <br />
        실시간 원격 코스입니다.
      </DividerWBlockColumn>
    </DividerWBlock>
    <BottomImage src={require('../../Assets/Images/twomen.jpg')}></BottomImage>
  </>
);

export default DividerW;
