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
  padding-top: 40px;
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
  font-size: 20px;
  text-align: center;
  line-height: 25px;
`;

const Description = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 25px;
  color: black;
  &:nth-child(2) {
    font-size: 15px;
  }
`;

const HalfBackground = styled.span`
  background: linear-gradient(to top, #ff541c 70%, transparent 50%);
`;

const ImageDescription = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 10px;
  text-align: center;
  line-height: 15px;
`;
const DirectLink = styled.span`
  margin: 20px;
  color: black;
  font-size: 18px;
  text-decoration: underline;
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
          단지 채용 정보를 공유하는 것 뿐만 아니라 <br />
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
          <B>코딩을 전혀 경험한 적 없으신가요?</B> <br />
          <B>제일 싫어하는 과목이 수학이라구요?</B> <br />
          <br />
        </Description>
        <Description>
          <B>무료로 제공되는 ‘코딩 배우기’를 수강해보며</B> <br />
          개발자로서의 적성을 판단하고 기초를 쌓아보세요.
        </Description>
        <DirectLink>
          <B>코딩 배우기 수강 (100% 무료)</B>
        </DirectLink>
      </ContainerY>
    </>
  );
};

export default TextBlock;
