import React from 'react';
import styled from 'styled-components';

const DividerBBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #007bec;
  text-align: center;
  padding-top: 36px;
  padding-bottom: 43px;
`;

const DividerBlockColumn = styled.p`
  font-size: 30px;
  &:first-child {
    text-emphasis: filled sesame;
    -webkit-text-emphasis: filled white;
    font-size: 40px;
  }
`;

const DividerB = () => (
  <DividerBBlock>
    <DividerBlockColumn>하지만</DividerBlockColumn>
    <br />
    <DividerBlockColumn>
      코더스하이 실시간 원격 코스는 다릅니다
    </DividerBlockColumn>
  </DividerBBlock>
);

export default DividerB;
