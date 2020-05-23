import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.padding};
`;

const DividerWBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: black;

  text-align: center;
`;

const DividerWBlockColumn = styled.p`
  ${(props) => props.theme.setMediaQuery(2)};
  &:last-child {
    font-weight: 600;
    ${(props) => props.theme.setMediaQuery(2)};
    color: #007bec;
  }
`;

const YoutubeIframe = styled.iframe`
  margin: 50px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  @media (max-width: 1024px) {
    width: 280px;
  }
  @media (min-width: 1024px) {
    width: 560px;
    height: 315px;
  }
`;

const BottomImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DividerW = () => (
  <>
    <Container>
      <DividerWBlock>
        <DividerWBlockColumn>
          이론만 공부하고 끝나는 <br />
          단순한 인터넷 강의가 아닌
        </DividerWBlockColumn>
        <br />
        <DividerWBlockColumn>
          교사와 학생, 학생과 학생 사이의 소통과 협업이 <br />
          활발하게 이루어지는
          <br />
          실시간 원격 코스입니다.
        </DividerWBlockColumn>
      </DividerWBlock>
      <YoutubeIframe
        src="https://www.youtube.com/embed/gox3EoRYmXw?start=893"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></YoutubeIframe>
    </Container>
    <BottomImage src={require('../../Assets/Images/twomen.jpg')}></BottomImage>
  </>
);

export default DividerW;
