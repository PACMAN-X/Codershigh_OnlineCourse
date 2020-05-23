import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${(props) => props.theme.padding};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.cBlue};
  text-align: center;
`;

const DividerBlockColumn = styled.p`
  ${(props) => props.theme.setMediaQuery(1)};
  &:first-child {
    text-emphasis: filled sesame;
    -webkit-text-emphasis: filled white;
  }
`;

const DividerB = () => (
  <Container>
    <DividerBlockColumn>하지만</DividerBlockColumn>
    <br />
    <DividerBlockColumn>
      코더스하이 실시간 원격 코스는 다릅니다
    </DividerBlockColumn>
  </Container>
);

export default DividerB;
