import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #007bec;
  text-align: center;
  padding-top: 36px;
  padding-bottom: 43px;
`;
const MainTitle = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
  font-weight: bold;
  line-height: 40px;
  color: white;
`;

const BoxContainer = styled.div`
  margin-top: 40px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const BoxColumn = styled.div`
  width: 320px;
  font-size: 100px;

  display: column;
  justify-content: center;
  align-items: center;
`;
const BoxTitle = styled.div`
  background-color: #fdfdfd;
  padding: 10px 50px;
  font-size: 16px;
  color: black;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
`;
const BoxDescription = styled.div`
  margin-top: 20px;
  background-color: #fdfdfd;
  padding: 22px 7px;
  color: black;
  font-size: 12px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  line-height: 15px;
`;

const DirectLink = styled(Link)`
  margin: 20px;
  font-size: 18px;
  text-decoration: underline;
  &:last-child {
    opacity: 0.8;
  }
  cursor: pointer;
`;

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const CurriculumBlock = () => (
  <Container>
    <MainTitle>실시간 원격 코스 12주 커리큘럼</MainTitle>
    <p>(수강 대상: 고등학생 이상)</p>
    <BoxContainer>
      <BoxColumn>
        <BoxTitle>
          <B> UX 디자인 (4주)</B>
        </BoxTitle>
        <BoxDescription>
          앱을 만들기 위한 첫 단계로 <br />
          앱의 동작방식을 이해하고 <br />
          프로토타입을 제작합니다
        </BoxDescription>
      </BoxColumn>
      <BoxColumn> ₊ </BoxColumn>
      <BoxColumn>
        <BoxTitle>
          <B> 앱 개발 (8주)</B>
        </BoxTitle>
        <BoxDescription>
          3명이 한 팀을 이루어 <br />
          앱스토어에 올릴 수 있는 <br />
          수준의 앱을 개발합니다
        </BoxDescription>
      </BoxColumn>
    </BoxContainer>
    <DirectLink rel="noopener noreferrer" target="_blank" to={'/curriculum'}>
      <B>상세 커리큘럼 보기</B>
    </DirectLink>
    <DirectLink to={'/'}>
      <B>단체 수강 문의</B>
    </DirectLink>
  </Container>
);

export default CurriculumBlock;
