import React, { useState } from 'react';
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
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-weight: 600;
  ${(props) => props.theme.setMediaQuery(2)};
  color: #007bec;
`;

const YoutubeIframe = styled.iframe`
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  @media (min-width: 1024px) {
    width: 280px;
    height: 155px;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 420px;
    height: 236px;
  }
  @media (min-width: 1024px) {
    width: 560px;
    height: 315px;
  }
`;

const ImageContent = styled.img`
  margin-bottom: 3vh;
  width: 100%;
  max-width: 800px;
  height: 100%;
`;

const YoutubeThumbnail = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  @media (min-width: 1024px) {
    width: 280px;
    height: 155px;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 420px;
    height: 236px;
  }
  @media (min-width: 1024px) {
    width: 560px;
    height: 315px;
  }
`;

const DividerW = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container>
        <DividerWBlock>
          <DividerWBlockColumn>
            교사와 학생, 학생과 학생 사이의 <br />
            소통과 협업이 활발하게 이루어지는
            <br />
            실시간 원격 코스입니다.
          </DividerWBlockColumn>
        </DividerWBlock>
        <ImageContent
          src={require('../../Assets/Images/ImageBlock.png')}
        ></ImageContent>
        <YoutubeThumbnail
          onClick={() => setShow(!show)}
          bgUrl={require('../../Assets/Images/Remote_Thumb.jpg')}
        >
          {show && (
            <YoutubeIframe
              src="https://www.youtube.com/embed/gox3EoRYmXw?start=893"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></YoutubeIframe>
          )}
        </YoutubeThumbnail>
      </Container>
    </>
  );
};

export default DividerW;
