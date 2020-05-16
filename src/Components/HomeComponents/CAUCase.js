import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #007bec;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainTitle = styled.div`
  font-size: 40px;
  margin-top: 70px;
`;

const DescriptionBlock = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
  line-height: 30px;
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContent = styled.img`
  width: 50%;
  height: 50%;
`;
const ImageDescription = styled.div`
  margin-top: 5px;
  font-size: 10px;
`;

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const CAUCase = () => (
  <Container>
    <MainTitle>코더스하이 X 중앙대학교</MainTitle>
    <DescriptionBlock>
      코더스하이 특강은 중앙대에서 유일하게 <br />
      <B>대학 본부에서 직접 관리하는 수업</B>이었습니다.
    </DescriptionBlock>
    <DescriptionBlock>
      코더스하이는 교내 <B>iMac 실습실</B> 구성에도 의견을 드리며 <br />
      <B>국내 최고의 애플 교육 환경을 조성했습니다.</B>
    </DescriptionBlock>
    <ImageContainer>
      <ImageContent src={require('../../Assets/Images/Cases/CAU_Case_1.jpg')} />
      <ImageDescription>
        *실제 수업 중 촬영된 사진이며, 수강생 개인 정보 보호를 위해 모자이크
        처리했습니다.
      </ImageDescription>
    </ImageContainer>
    <MainTitle> &quot;전공은 아무 상관 없습니다&quot; </MainTitle>
    <DescriptionBlock>
      2016년부터 시작한 코더스하이 특강은
      <br /> <B>문과생이 IT 대기업에 개발자로 취직하고</B>
      <br /> 다양한 전공의 수료생들이 <B>교내외 경진대회에서 입상</B>하는 등
      <br /> 많은 성과를 통해 중앙대에서 입소문을 타고 있었습니다.
    </DescriptionBlock>
    <ImageContainer>
      <ImageContent
        src={require('../../Assets/Images/Cases/CAU_Case_2.jpg')}
      ></ImageContent>
      <ImageDescription>*실제 수업 중 촬영된 사진입니다.</ImageDescription>
    </ImageContainer>
    <DescriptionBlock>
      특강이 열릴 때마다 <B>평균 3:1의 경쟁률</B>을 기록하며
      <br />
      수강 신청을 못해 다음 방학을 노리는 ‘특강 재수생’도 생겼습니다.
      <br />
      <br />
      이제는 실시간 원격 코스로 특강 재수 없이
      <br />
      누구나 <B>코더스하이 특강을 만날 수 있게 되었습니다.</B>
    </DescriptionBlock>
  </Container>
);

export default CAUCase;
