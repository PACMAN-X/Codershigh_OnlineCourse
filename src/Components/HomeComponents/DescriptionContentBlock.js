import React from "react";
import styled from "styled-components";
import DescriptionContentBlockDetail from "./DescriptionContentBlockDetail";

const Container = styled.div`
  width: 100%;
  background-color: #eef3c0;
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

const AvatarImgContainer = styled.div`
  width: 145px;
  height: 145px;
  background-color: white;
  border-radius: 50%;
  display: flex;
`;

const AvatarImg = styled.img``;

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

const DescriptionContentBlock_1 = () => (
  <Container>
    <AvatarContainer>
      <AvatarContainerColumn className="right_img">
        <AvatarImgContainer>
          <AvatarImg></AvatarImg>
        </AvatarImgContainer>
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
          이제 인터넷 강의는 지긋지긋해요 <br />
          돈은 돈대로 쓰고 남는 건 없어요
        </AvatarDescription>
        <AvatarInfo>대학생 김모씨 (23세)</AvatarInfo>
      </AvatarContainerColumn>
      <AvatarContainerColumn className="left_img">
        <AvatarImgContainer>
          <AvatarImg></AvatarImg>
        </AvatarImgContainer>
      </AvatarContainerColumn>
    </AvatarContainer>
    <DescriptionContentBlockDetail></DescriptionContentBlockDetail>
  </Container>
);
export default DescriptionContentBlock_1;
