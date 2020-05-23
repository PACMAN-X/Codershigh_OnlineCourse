import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${(props) => props.theme.padding};
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.cBlue};
  display: flex;
`;

const FooterBlockColumn = styled.div`
  ${(props) => props.theme.setMediaQuery(2)};
`;

const FooterTitle = styled.div``;

const FooterContent = styled.div``;

const FooterBlock = () => (
  <>
    <Container>
      <FooterBlockColumn>
        <FooterTitle>사업장 주소</FooterTitle>
        <FooterContent>
          서울특별시 강남구 언주로 534, 9층(역삼동, BJ타워)
        </FooterContent>
      </FooterBlockColumn>
      <FooterBlockColumn>
        <FooterTitle>고객센터</FooterTitle>
        <FooterContent></FooterContent>
      </FooterBlockColumn>
    </Container>
    <FooterContent>
      2017 ⓒ CodersHigh 대표이사 윤성관 | 사업자등록번호 740-81-00581
    </FooterContent>
  </>
);

export default FooterBlock;
