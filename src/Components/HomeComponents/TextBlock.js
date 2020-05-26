import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.padding};
`;
const ContainerY = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  background-color: #ffe62d;
`;

const DescriptionB = styled.div`
  ${(props) => props.theme.setMediaQuery(2)};
  text-align: center;
  line-height: 25px;
`;

const Description = styled.div`
  ${(props) => props.theme.setMediaQuery(2)};
  text-align: center;
  line-height: 25px;
  color: black;
  &:nth-child(2) {
    ${(props) => props.theme.setMediaQuery(3)};
    margin-top: 15px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ImageColumn = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContent = styled.img`
  width: 80%;
  margin-top: 20px;
  max-width: 200px;
  min-width: 100px;
`;

const HalfBackground = styled.span`
  background: linear-gradient(to top, #ff541c 70%, transparent 50%);
  &:nth-child(1) {
    background: linear-gradient(to top, #47dbd9 50%, transparent 50%);
  }
`;

const ImageDescription = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  ${(props) => props.theme.setMediaQuery(6)};
  text-align: center;
`;
const DirectLink = styled.a`
  margin: 20px;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const TextBlock = () => {
  return (
    <>
      <Container>
        <DescriptionB>
          코더스하이는 수강생과 함께 성장합니다. <br />
          채용 정보를 공유하는 것 뿐만 아니라 <br />
          개발 관련 업무를 경험하고자 하는 학생들에게 <br />
          <HalfBackground>업무 체험 기회를 적극적으로 제공</HalfBackground>하고
          있습니다.
        </DescriptionB>
        <ImageDescription>
          *코더스하이는 수강생들의 업무 체험을 위해 <br />
          <B>매년 10,000,000원 이상</B>을 지원하고 있습니다.
        </ImageDescription>
      </Container>
      <ContainerY>
        <Description>
          <B>내가 코딩을 잘 할 수 있을지 걱정이라면? </B>
          <br />
        </Description>
        <Description>
          <B>
            <HalfBackground>무료</HalfBackground>로 제공되는 ‘코딩 배우기’를
            수강해보며{' '}
          </B>
          <br />
          개발자로서의 적성을 판단하고 기초를 쌓아보세요.
        </Description>
        <ImageContainer>
          <ImageColumn>
            <ImageContent src={require('../../Assets/Images/ltc1.jpg')} />
            <DirectLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.inflearn.com/course/swift-high-coding1"
            >
              <B>코딩 배우기 1 수강하기 </B>
            </DirectLink>
          </ImageColumn>
          <ImageColumn>
            <ImageContent src={require('../../Assets/Images/ltc2.jpg')} />
            <DirectLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.inflearn.com/course/temp_325451"
            >
              <B>코딩 배우기 2 수강하기</B>
            </DirectLink>
          </ImageColumn>
        </ImageContainer>
      </ContainerY>
    </>
  );
};

export default TextBlock;
