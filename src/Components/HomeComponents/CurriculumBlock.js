import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.cBlue};
  text-align: center;
  padding: ${(props) => props.theme.padding};
`;
const MainTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(1)};
  margin-bottom: 10px;
  text-align: center;
  color: black;
  font-weight: bold;
  line-height: 40px;
  color: white;
`;

const BoxContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 700px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const BoxColumn = styled.div`
  width: 100%;
  font-size: 100px;
  display: column;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    width: 50%;
  }
`;
const BoxTitle = styled.div`
  background-color: #fdfdfd;
  padding: 10px;
  ${(props) => props.theme.setMediaQuery(4)};
  color: black;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
`;
const BoxDescription = styled.div`
  margin-top: 20px;
  background-color: #fdfdfd;
  padding: 10px;
  color: black;
  ${(props) => props.theme.setMediaQuery(5)};
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  line-height: 15px;
`;

const DirectLink = styled(Link)`
  &:last-child {
    margin-top: 20px;
    ${(props) => props.theme.setMediaQuery(4)};
    text-decoration: underline;
    cursor: pointer;
  }
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
        <DirectLink
          rel="noopener noreferrer"
          target="_blank"
          to={'/curriculum'}
        >
          <BoxDescription>
            앱을 만들기 위한 첫 단계로 <br />
            앱의 동작방식을 이해하고 <br />
            프로토타입을 제작합니다
          </BoxDescription>
        </DirectLink>
      </BoxColumn>
      <BoxColumn> ₊ </BoxColumn>
      <BoxColumn>
        <BoxTitle>
          <B> 앱 개발 (8주)</B>
        </BoxTitle>
        <DirectLink
          rel="noopener noreferrer"
          target="_blank"
          to={'/curriculum'}
        >
          <BoxDescription>
            3명이 한 팀을 이루어 <br />
            앱스토어에 올릴 수 있는 <br />
            수준의 앱을 개발합니다
          </BoxDescription>
        </DirectLink>
      </BoxColumn>
    </BoxContainer>
    <DirectLink rel="noopener noreferrer" target="_blank" to={'/curriculum'}>
      <B>상세 커리큘럼 보기</B>
    </DirectLink>
  </Container>
);

export default CurriculumBlock;
