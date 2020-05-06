import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

const DescriptionSmall = styled.div`
  width: 100%;
  height: 100%;
  font-family: CoreGothicE-3;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
`;

const CatchPhraseLarge = styled.div`
  font-family: CoreGothicE-8;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  color: #000000;
`;

const CatchPhraseMedium = styled.div`
  font-family: CoreGothicE-8;
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  color: #000000;
`;

const DescriptionLarge = styled.div`
  font-family: CoreGothicE-4;
  font-size: 22px;
  text-align: center;
  color: #000000;
`;

const ImageContainer = styled.div``;

const ProcessImage = styled.img``;

const CollapseButton = styled.button`
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #333333;
  text-decoration: none;
`;

const DescriptionContentBlockDetail = () => (
  <Container>
    <DescriptionSmall>비슷한 경험 있으신가요?</DescriptionSmall>
    <CatchPhraseLarge>
      하지만 <br />
      코더스하이는 다릅니다
    </CatchPhraseLarge>
    <DescriptionLarge>
      이론만 공부하고 끝나는 <br />
      단순한 인터넷 강의가 아닙니다
    </DescriptionLarge>
    <CatchPhraseMedium>
      교사와 학생, 학생과 학생 사이의 <br />
      소통과 협업이 함께 이루어지는 <br />
      실시간 원격 코스입니다!
    </CatchPhraseMedium>
    <ImageContainer>
      <ProcessImage></ProcessImage>
    </ImageContainer>
    <CollapseButton> 앱스토어에 등록된 수강생 작품 보기</CollapseButton>
  </Container>
);

export default DescriptionContentBlockDetail;
