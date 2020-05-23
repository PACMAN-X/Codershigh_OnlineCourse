import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.cBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.padding};
`;

const CardNewsDescription = styled.div`
  ${(props) => props.theme.setMediaQuery(2)};
  &:last-child {
    font-weight: 600;
  }
`;

const CardNewsTitle = styled.div`
  margin-top: 30px;
  ${(props) => props.theme.setMediaQuery(1)};
`;

const CardNewsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const CardNewsBlockDefault = styled.div`
  width: 25%;
  min-width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
`;

const CardNewsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.2s linear;
`;

const BlockCardNewsInfo = styled.div`
  width: 80%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(2) {
    width: 70%;
  }
`;

const CardNewsInfo = styled.div`
  ${(props) => props.theme.setMediaQuery(6)};
  font-weight: 700;
  color: white;
  text-align: left;
`;

const CarNewsbtn = styled.button`
  ${(props) => props.theme.setMediaQuery(6)};
  border-radius: 10px;
  cursor: pointer;
  border: none;
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
                <CarNewsbtn>살펴보기</CarNewsbtn>
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
              <CardNewsInfo>문과생들이 앱?</CardNewsInfo>
            </CardNewsColumn>
            <CardNewsColumn>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/codershighteam/posts/1237510246451643"
              >
                <CarNewsbtn>살펴보기</CarNewsbtn>
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
              <CardNewsInfo>삼성전자 취업!</CardNewsInfo>
            </CardNewsColumn>
            <CardNewsColumn>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/codershighteam/posts/1249197898616211"
              >
                <CarNewsbtn>살펴보기</CarNewsbtn>
              </a>
            </CardNewsColumn>
          </BlockCardNewsInfo>
        </BlockCardNews>
      </CardNewsBlockDefault>
      <CardNewsBlockDefault>
        <BlockCardNews>
          <CardNewsImg
            src={require('../../Assets/Block_Images/cardNews/news4.jpg')}
          ></CardNewsImg>
          <BlockCardNewsInfo>
            <CardNewsColumn>
              <CardNewsInfo>카카오에?</CardNewsInfo>
            </CardNewsColumn>
            <CardNewsColumn>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/codershighteam/posts/1271911513011516/"
              >
                <CarNewsbtn>살펴보기</CarNewsbtn>
              </a>
            </CardNewsColumn>
          </BlockCardNewsInfo>
        </BlockCardNews>
      </CardNewsBlockDefault>
    </CardNewsContainer>
  </Container>
);

export default CardNewsBlock;
