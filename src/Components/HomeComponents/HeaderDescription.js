import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
`;

const AvatarContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  .left_text {
    width: 200%;
    text-align: left;
  }
  .right_text {
    width: 200%;
    text-align: right;
  }
  .right_img {
    align-items: flex-end;
  }
  .left_img {
    align-items: flex-start;
  }
`;

const AvatarContainerColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AvatarImg = styled.img`
  width: 145px;
  height: 145px;
  object-fit: contain;
`;

const AvatarDescription = styled.span`
  font-family: CoreGothicE-8;
  font-size: 16px;
  font-weight: 900;
  color: #000000;
  padding-left: 23px;
  padding-right: 23px;
`;

const AvatarInfo = styled.span`
  font-family: CoreGothicE-5;
  font-size: 11px;
  font-weight: 500;
  color: #000000;
  margin-top: 10px;
  padding-left: 23px;
  padding-right: 23px;
`;

const BottomDescription = styled.div`
  font-size: 30px;
  color: black;
  text-align: center;
  margin-top: 80px;
  padding-bottom: 64px;
`;

const HeaderDescription = () => (
  <Container>
    <AvatarContainer>
      <AvatarContainerColumn className="right_img">
        <AvatarImg
          src={require('../../Assets/Images/youngman/group29.png')}
        ></AvatarImg>
      </AvatarContainerColumn>
      <AvatarContainerColumn className="left_text">
        <AvatarDescription>
          이제 인터넷 강의는 지긋지긋해요 <br />
          돈은 돈대로 쓰고 남는 건 없어요
        </AvatarDescription>
        <AvatarInfo>대학생 김모씨 (23세)</AvatarInfo>
      </AvatarContainerColumn>
    </AvatarContainer>
    <AvatarContainer>
      <AvatarContainerColumn className="right_text">
        <AvatarDescription>
          혼자 공부하는 게 너무 어렵네요
          <br />잘 하고 있는 건지도 모르겠어요
        </AvatarDescription>
        <AvatarInfo>대학생 김모씨 (23세)</AvatarInfo>
      </AvatarContainerColumn>
      <AvatarContainerColumn className="left_img">
        <AvatarImg
          src={require('../../Assets/Images/girl/group31.png')}
        ></AvatarImg>
      </AvatarContainerColumn>
    </AvatarContainer>
    <AvatarContainer>
      <AvatarContainerColumn className="right_img">
        <AvatarImg
          src={require('../../Assets/Images/mustacheMan.png')}
        ></AvatarImg>
      </AvatarContainerColumn>
      <AvatarContainerColumn className="left_text">
        <AvatarDescription>
          좋은 오프라인 수업은 서울에서 열리니 <br />
          저는 수강할 엄두를 못 내요
        </AvatarDescription>
        <AvatarInfo>부산 거주 취준생 (26세)</AvatarInfo>
      </AvatarContainerColumn>
    </AvatarContainer>
    <BottomDescription>
      혹시 여러분들도 <br />
      비슷한 경험 있으신가요?
    </BottomDescription>
  </Container>
);
export default HeaderDescription;