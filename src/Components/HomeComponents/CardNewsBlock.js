import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #007bec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
`;

const CardNewsDescription = styled.div`
  font-size: 15px;
  line-height: 20px;
  &:last-child {
    font-weight: 800;
  }
`;

const CardNewsTitle = styled.div`
  margin-top: 30px;
  font-size: 30px;
`;

const CardNewsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const CardNewsBlockDefault = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const CardNewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.2s linear;
`;

const BlockCardNewsInfo = styled.div`
  width: 80%;
  left: 10%;
  bottom: 0;
  position: absolute;
  background-color: #273949;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0, 100%);
  transition: all 0.2s linear;
`;

const BlockCardNews = styled.div`
  width: 80%;
  height: 80%;

  &:hover ${CardNewsImg} {
    transform: translateY(-25px);
  }
  &:hover ${BlockCardNewsInfo} {
    transform: translate(0, 0);
  }
`;

const CardNewsColumn = styled.div`
  height: 50px;
  width: 100%;
  padding: 12px 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardNewsInfo = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: white;
  margin-bottom: 2px;
`;

const CardNewsBlock = () => (
  <Container>
    <CardNewsDescription>앱 출시가 진짜 되냐고요?</CardNewsDescription>
    <CardNewsDescription>이미 많은 수강생들이 해냈습니다</CardNewsDescription>
    <CardNewsTitle>수강생들의 100% 리얼 후기</CardNewsTitle>
    <CardNewsContainer>
      <CardNewsBlockDefault>
        <BlockCardNews>
          <CardNewsImg
            src={require('../../Assets/Block_Images/cardNews/news1.jpg')}
          ></CardNewsImg>
          <BlockCardNewsInfo>
            <CardNewsColumn>
              <CardNewsInfo>앱 출시!?</CardNewsInfo>
            </CardNewsColumn>
            <CardNewsColumn>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/codershighteam/posts/1228818117320856"
              >
                <button>살펴보기</button>
              </a>
            </CardNewsColumn>
          </BlockCardNewsInfo>
        </BlockCardNews>
      </CardNewsBlockDefault>
      <CardNewsBlockDefault>
        <BlockCardNews>
          <CardNewsImg
            src={require('../../Assets/Block_Images/cardNews/news2.jpg')}
          ></CardNewsImg>
          <BlockCardNewsInfo>
            <CardNewsColumn>
              <CardNewsInfo>앱 출시!?</CardNewsInfo>
            </CardNewsColumn>
            <CardNewsColumn>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/codershighteam/posts/1237510246451643"
              >
                <button>살펴보기</button>
              </a>
            </CardNewsColumn>
          </BlockCardNewsInfo>
        </BlockCardNews>
      </CardNewsBlockDefault>
      <CardNewsBlockDefault>
        <BlockCardNews>
          <CardNewsImg
            src={require('../../Assets/Block_Images/cardNews/news3.jpg')}
          ></CardNewsImg>
          <BlockCardNewsInfo>
            <CardNewsColumn>
              <CardNewsInfo>앱 출시!?</CardNewsInfo>
            </CardNewsColumn>
            <CardNewsColumn>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/codershighteam/posts/1249197898616211"
              >
                <button>살펴보기</button>
              </a>
            </CardNewsColumn>
          </BlockCardNewsInfo>
        </BlockCardNews>
      </CardNewsBlockDefault>
      <CardNewsBlockDefault>
        <BlockCardNews>
          <CardNewsImg
            src={require('../../Assets/Block_Images/cardNews/news3.jpg')}
          ></CardNewsImg>
          <BlockCardNewsInfo>
            <CardNewsColumn>
              <CardNewsInfo>앱 출시!?</CardNewsInfo>
            </CardNewsColumn>
            <CardNewsColumn>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/codershighteam/posts/1249197898616211"
              >
                <button>살펴보기</button>
              </a>
            </CardNewsColumn>
          </BlockCardNewsInfo>
        </BlockCardNews>
      </CardNewsBlockDefault>
    </CardNewsContainer>
  </Container>
);

export default CardNewsBlock;
