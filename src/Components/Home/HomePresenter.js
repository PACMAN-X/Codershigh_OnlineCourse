import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  width: 100vw;
  height: 100%;
  padding: 0px 100px;
`;

const HeaderBlock = styled.div`
  background-color: blue;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderBlock_w = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  color: black;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
  background-color: white;
  display: flex;
`;

const Description = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 400;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const CurriculumContainer = styled.div`
  width: 100%;
  background-color: red;
`;

const CurriculumList = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: left;
`;

const Item = styled.div`
  color: black;
`;
const ContentTitle = styled.div`
  background-color: yellow;
`;

const ContentBlock = styled.div``;

const ContentList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const ContentColumn = styled.div`
  width: 50%;
`;

const Content = styled.li``;

const ShowButton = styled.button``;

const HomePresenter = (error, loading, showCurriculum) => (
  <Container>
    <HeaderBlock>
      <Title>앱의 구동방식을 설계하는 단계.</Title>
      <Description>
        앱의 구동방식을 설계하는 단계. UX 디자인 과정에서는, 4주에 걸쳐 앱의
        아이디어를 정리하고 구동방식을 결정하는 것을 배웁니다.  이 과정을 통해
        개발자들은 ()를, 디자이너들은 (. )를 익힐 수 있으며, 기획자들은 (. )를
        깨닫게 됩니다.
      </Description>
    </HeaderBlock>
    <HeaderBlock_w>
      <Title>연세대 UX디자인 클래스를 1달 집중코스로 제공</Title>
      <Description>
        앱의 구동방식을 설계하는 단계. UX 디자인 과정에서는, 4주에 걸쳐 앱의
        아이디어를 정리하고 구동방식을 결정하는 것을 배웁니다.  이 과정을 통해
        개발자들은 ()를, 디자이너들은 (. )를 익힐 수 있으며, 기획자들은 (. )를
        깨닫게 됩니다.
      </Description>
    </HeaderBlock_w>
    <CurriculumContainer>
      <HeaderBlock>
        <Title>4주간 20시간 분량의 학습으로 내 앱을 디자인</Title>
        <Description>
          4주간 매주 5~ 10시간 분량의 학습 콘텐츠를 제공하고, 실시간 원격 수업을
          통해 진행상황 체크. 무료로 제공하는 동영상 콘텐츠를 미리 보고 준비해
          보자.
        </Description>
      </HeaderBlock>
      <CurriculumList>
        <Item>
          <Title>
            오리엔테이션, 학습 환경, 과제 제공 ( 1시간 )
            <ShowButton onclick={showCurriculum}>+</ShowButton>
          </Title>
          <ContentBlock>
            <ContentTitle>UXDesign 수업</ContentTitle>
            <ContentList>
              <ContentColumn>
                <Content>
                  [필수]스큐어모피즘과 플랫디자인 (https://youtu.be/OmWp4dgJ6_Y)
                  )
                </Content>
                <Content>
                  [필수]ADS, 페르소나, 멘탈모델(https://youtu.be/HTwMDRb-p8s)
                </Content>
                <Content>
                  [선택]내 앱은 왜 리젝 ( https://youtu.be/vH-W6dN1ZOs
                </Content>
                <Content>
                  [선택]앱이 빨라지는 마술 ( https://youtu.be/QEX4DNVT2SQ )
                </Content>
                <Content>
                  [선택]앱스토어 사례 ( https://youtu.be/V60KmDRAt_U ) 15:15
                </Content>
              </ContentColumn>
              <ContentColumn>ADS, 페르소나, 멘탈모델</ContentColumn>
            </ContentList>
          </ContentBlock>
          <ContentBlock>
            <ContentTitle>iOS HIG 수업</ContentTitle>
            <ContentList>
              <ContentColumn>
                <Content>[필수]1. 오리엔테이션</Content>
                <Content>[필수]2. iOS 디자인 테마</Content>
                <Content>[선택]3. Mac Catalyst 시작하기</Content>
                <Content>[선택]4. Mac Catalyst - Enhancement</Content>
                <Content>[선택]5. Mac Catalyst - Structure</Content>
                <Content>[선택]6. Mac Catalyst - Menu</Content>
                <Content>[필수]7. Interface Essentials</Content>
              </ContentColumn>
            </ContentList>
          </ContentBlock>
        </Item>
        <Item>
          <Title>목업스케치 안내 2시간</Title>
          <ContentBlock>
            <ContentTitle>프로토타입</ContentTitle>
            <ContentList>
              <ContentColumn>
                <Content>
                  [필수]스큐어모피즘과 플랫디자인 (https://youtu.be/OmWp4dgJ6_Y)
                  )
                </Content>
                <Content>
                  [필수]ADS, 페르소나, 멘탈모델(https://youtu.be/HTwMDRb-p8s)
                </Content>
                <Content>
                  [선택]내 앱은 왜 리젝 ( https://youtu.be/vH-W6dN1ZOs{" "}
                </Content>
                <Content>
                  [선택]앱이 빨라지는 마술 ( https://youtu.be/QEX4DNVT2SQ )
                </Content>
                <Content>
                  [선택]앱스토어 사례 ( https://youtu.be/V60KmDRAt_U ) 15:15
                </Content>
              </ContentColumn>
              <ContentColumn>
                <Content> 목업 스케치 </Content>
              </ContentColumn>
            </ContentList>
          </ContentBlock>
          <ContentBlock>
            <ContentTitle>iOS HIG 수업</ContentTitle>
            <ContentList>
              <ContentColumn>
                <Content>
                  [필수]01 Launching
                  <Content> [필수]02 Launching</Content>
                  <Content> [필수]03 Onboarding</Content>
                  <Content> [필수]04 Loading</Content>
                  <Content>[필수]05 Modality </Content>
                  <Content>[필수]06 Modality </Content>
                  <Content> [필수]07 Navigation</Content>
                  <Content> [선택]08 RequestingPermission</Content>
                  <Content>[선택]09 Settings1</Content>
                </Content>
              </ContentColumn>
            </ContentList>
          </ContentBlock>
        </Item>
        <Item>
          <Title>프로토타입 제작 및 안내 (2시간)</Title>
          <ContentBlock>
            <ContentTitle>프로토타입</ContentTitle>
            <ContentList>
              <ContentColumn>
                <Content>
                  [필수]스큐어모피즘과 플랫디자인 (https://youtu.be/OmWp4dgJ6_Y)
                  )
                </Content>
                <Content>
                  [필수]ADS, 페르소나, 멘탈모델(https://youtu.be/HTwMDRb-p8s)
                </Content>
                <Content>
                  [선택]내 앱은 왜 리젝 ( https://youtu.be/vH-W6dN1ZOs{" "}
                </Content>
                <Content>
                  [선택]앱이 빨라지는 마술 ( https://youtu.be/QEX4DNVT2SQ )
                </Content>
                <Content>
                  [선택]앱스토어 사례 ( https://youtu.be/V60KmDRAt_U ) 15:15
                </Content>
              </ContentColumn>
              <ContentColumn>
                <Content> 목업 스케치 </Content>
              </ContentColumn>
            </ContentList>
          </ContentBlock>
          <ContentBlock>
            <ContentTitle>iOS HIG 수업</ContentTitle>
            <ContentList>
              <ContentColumn>
                <Content>
                  [필수]01 Launching
                  <Content> [필수]02 Launching</Content>
                  <Content> [필수]03 Onboarding</Content>
                  <Content> [필수]04 Loading</Content>
                  <Content>[필수]05 Modality </Content>
                  <Content>[필수]06 Modality </Content>
                  <Content> [필수]07 Navigation</Content>
                  <Content> [선택]08 RequestingPermission</Content>
                  <Content>[선택]09 Settings1</Content>
                </Content>
              </ContentColumn>
            </ContentList>
          </ContentBlock>
        </Item>
        <Item>
          <Title>발표, 피드백(2시간)</Title>
          <ContentBlock>
            <ContentTitle>프로토타입</ContentTitle>
            <ContentList>
              <ContentColumn>
                <Content>
                  [필수]스큐어모피즘과 플랫디자인 (https://youtu.be/OmWp4dgJ6_Y)
                  )
                </Content>
                <Content>
                  [필수]ADS, 페르소나, 멘탈모델(https://youtu.be/HTwMDRb-p8s)
                </Content>
                <Content>
                  [선택]내 앱은 왜 리젝 ( https://youtu.be/vH-W6dN1ZOs{" "}
                </Content>
                <Content>
                  [선택]앱이 빨라지는 마술 ( https://youtu.be/QEX4DNVT2SQ )
                </Content>
                <Content>
                  [선택]앱스토어 사례 ( https://youtu.be/V60KmDRAt_U ) 15:15
                </Content>
              </ContentColumn>
              <ContentColumn>
                <Content> 목업 스케치 </Content>
              </ContentColumn>
            </ContentList>
          </ContentBlock>
          <ContentBlock>
            <ContentTitle>iOS HIG 수업</ContentTitle>
            <ContentList>
              <ContentColumn>
                <Content>
                  [필수]01 Launching
                  <Content> [필수]02 Launching</Content>
                  <Content> [필수]03 Onboarding</Content>
                  <Content> [필수]04 Loading</Content>
                  <Content>[필수]05 Modality </Content>
                  <Content>[필수]06 Modality </Content>
                  <Content> [필수]07 Navigation</Content>
                  <Content> [선택]08 RequestingPermission</Content>
                  <Content>[선택]09 Settings1</Content>
                </Content>
              </ContentColumn>
            </ContentList>
          </ContentBlock>
        </Item>
      </CurriculumList>
    </CurriculumContainer>
  </Container>
);

HomePresenter.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  showCurriculum: PropTypes.func.isRequired,
};

export default HomePresenter;
