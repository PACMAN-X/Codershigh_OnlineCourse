import React from 'react';
import styled from 'styled-components';
import './Footer.css';

const Container = styled.div`
  padding: ${(props) => props.theme.padding};
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.cBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitile = styled.div`
  ${(props) => props.theme.setMediaQuery(6)};
`;

const FooterContent = styled.div`
  ${(props) => props.theme.setMediaQuery(6)};
`;

const FooterBlock = () => (
  <Container>
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__column">
          <FooterTitile className="footer__column-title">
            회사 소개
          </FooterTitile>
          <FooterContent className="footer__column-description">
            코더스하이는 iOS/macOS 교육 콘텐츠 제작 그룹입니다.
          </FooterContent>
        </div>
        <div className="footer__column">
          <FooterTitile className="footer__column-title">고객센터</FooterTitile>
          <FooterContent className="footer__column-description">
            070-8193-7422
          </FooterContent>
        </div>
        <div className="footer__column">
          <FooterTitile className="footer__column-title">
            회사 위치
          </FooterTitile>
          <FooterContent className="footer__column-description">
            서울특별시 강남구 언주로 534, 9층(역삼동, BJ타워)
          </FooterContent>
        </div>
      </div>
      <footer className="main__bottom">
        <FooterContent>2017 ⓒ CodersHigh</FooterContent>
        <FooterContent>
          대표이사 윤성관 | 사업자등록번호 740-81-00581
        </FooterContent>
      </footer>
    </footer>
  </Container>
);

export default FooterBlock;
