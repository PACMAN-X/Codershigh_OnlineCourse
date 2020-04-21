import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  width: 100vw;
  height: 100%;
  padding: 0px 100px;
`;

const HeaderBlock = styled.div`
  background-color: #0579e4;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  padding: 60px 75px 75px 75px;
  color: #eff2c5;
  margin-bottom: 20px;
  font-size: 90px;
  font-weight: 900;
  display: flex;
  text-align: center;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: #4cbbb9; /* Can be changed in the live sample */
  transform: rotate(0.97turn);
`;

const Description = styled.span`
  color: #0579e4;
  background-color: #eff2c5;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  text-align: right;
  transform: rotate(0.999turn);
  position: absolute;
  -webkit-text-stroke-width: 0px;
  bottom: 0px;
  right: 0px;
`;

// const BodyBlock = styled.div`
//   background-color: green;
//   width: 100%;
//   height: 500px;
// `;

// const DetailBlocks = styled.div`
//   background-color: white;
//   width: 100%;
//   height: 500px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const DetailBlockContainer = styled.div`
//   background-color: green;
//   width: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// `;

// const DetailBlock = styled.div`
//   background-color: red;
//   width: 50px;
//   height: 50px;
// `;

// const CurriculumBlock = styled.div`
//   background-color: yellow;
//   width: 100%;
//   height: 500px;
// `;

const HomePresenter = () => (
  <Container>
    <HeaderBlock>
      <Title>
        코더스하이
        <br /> 온라인 강좌 출시!
        <Description>
          2020년 5월 6일
          <br />
          접수 시작
        </Description>
      </Title>
    </HeaderBlock>
  </Container>
);

export default HomePresenter;
