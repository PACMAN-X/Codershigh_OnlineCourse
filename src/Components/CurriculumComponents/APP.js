import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './Curriculum.css';

const Container = styled.div`
  padding: ${(props) => props.theme.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 50px;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const CurriclumDescriptionContainer = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CurriclumDescriptionColumn = styled.div`
  width: 50%;
  height: 50%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CurriclumTitle = styled.div`
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  font-weight: bold;
  margin-bottom: 20px;
`;

const CurriclumDescription = styled.div`
  width: 100%;
  min-width: 200px;
  color: black;
  ${(props) => props.theme.setMediaQuery(5)};
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  min-width: 300px;
  object-fit: contain;
`;

const CurriculumButtonContainer = styled.div`
  padding: 10px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CurriculumButton = styled.button`
  width: 20%;
  ${(props) => props.theme.setMediaQuery(6)};
  border-radius: 20px;
  padding: 5px;
`;

const CurriculumWeekDetailContainer = styled.div`
  background-color: #fefff0;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: black;
  border-radius: 10px;
`;

const CurriculumWeekDetailContent = styled.div``;
const CurriculumWeekDetailTitle = styled.div`
  ${(props) => props.theme.setMediaQuery(4)};
  color: #007bec;
  font-weight: bold;
  margin: 10px;
`;
const CurriculumWeekDetailDescription = styled.div`
  margin-left: 30px;
  ${(props) => props.theme.setMediaQuery(6)};
  margin-top: 10px;
`;

const CurriculumWeekDetailDescriptionNecessary = styled.div`
  ${(props) => props.theme.setMediaQuery(6)};
  font-weight: bold;
  margin-top: 10px;
`;

const CurriculumWeekDetailDescriptionHIG = styled.div`
  margin-left: 30px;
  ${(props) => props.theme.setMediaQuery(6)};
  color: #007bec;
  margin-top: 30px;
  font-weight: bold;
`;

const DirectLink = styled.a`
  ${(props) => {
    if (props.href) {
      return props.theme.linked;
    }
  }}
`;

const YouTubeLink = styled.div`
  margin-left: 30px;
  margin-top: 10px;
`;

const ComingSoonText = styled.div`
  width: 100%;
  height: 100%;
  font-size: 25px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

const CurriculumWeekDetailDescriptionContainer = styled.div``;

const CurriculumWeekDetailDescriptionAssignment = styled.div`
  ${(props) => props.theme.setMediaQuery(6)};
  padding-left: 30px;
`;

const DetailIcon = styled.img`
  width: 20px;
  height: 20px;
  display: inline-block;
`;

const UX = ({ coursesDetailAPP }) => {
  const [showCase, setShowCase] = useState(0);

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    const btns = document.getElementsByClassName('btn');
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        if (current.length > 0) {
          current[0].className = current[0].className.replace(' active', '');
        }
        this.className += ' active';
      });
    }
  });

  return (
    <Container>
      <CourseHeader>앱 개발 (8주) 커리큘럼</CourseHeader>
      <CurriclumDescriptionContainer>
        <CurriclumDescriptionColumn>
          <ImageContent
            src={require('../../Assets/Images/app1.jpg')}
          ></ImageContent>
        </CurriclumDescriptionColumn>
        <CurriclumDescriptionColumn>
          <CurriclumTitle>앱 개발 (8주) 커리큘럼</CurriclumTitle>
          <CurriclumDescription>
            좋은 그릇이 있으면 학습 내용들이 잘 정리되어 <br /> 담길 수
            있습니다. 코더스하이 과정에서는 잘 나뉘어진
            <br /> 좋은 그릇을 준비하는 작업을 함께 합니다. iOS 앱 개발자로서
            <br /> 알아야 하는 내용들을 정리하고 필수적인 기술과 그 기술을
            <br /> 사용하는 가장 좋은 방식(Best Practices)을 제공합니다.
          </CurriclumDescription>
        </CurriclumDescriptionColumn>
      </CurriclumDescriptionContainer>
      <CurriclumDescriptionContainer>
        <CurriclumDescriptionColumn>
          <ImageContent
            src={require('../../Assets/Images/app2.jpg')}
          ></ImageContent>
        </CurriclumDescriptionColumn>
        <CurriclumDescriptionColumn>
          <CurriclumTitle>애플과 공감하기</CurriclumTitle>
          <CurriclumDescription>
            코더스하이의 강사들은 모두 애플 플랫폼에서 개발자로 <br /> 활동해
            왔으며, 정기적으로 애플의 교육팀과 교류하며 <br /> 교육적인 해법을
            찾아 나가고 있습니다. Swift 언어로 <br /> iOS 앱을 개발하는 애플의
            공식 커리큘럼 위에 현업의 <br /> 노하우를 더해서 코더스하이의 과정이
            완성되었습니다.
          </CurriclumDescription>
        </CurriclumDescriptionColumn>
      </CurriclumDescriptionContainer>
      <CurriclumDescriptionContainer>
        <CurriclumDescriptionColumn>
          <ImageContent
            src={require('../../Assets/Images/app3.jpg')}
          ></ImageContent>
        </CurriclumDescriptionColumn>
        <CurriclumDescriptionColumn>
          <CurriclumTitle>공부하는 법 알아가기</CurriclumTitle>
          <CurriclumDescription>
            12주의 과정 동안 모든 걸 다 알려줄 수는 없습니다. 과정이 <br />
            끝난 뒤에도 스스로 학습할 수 있도록 하는 능력을 키우고 <br />
            지속적으로 사용할 수 있는 도구를 제공하는 것이 중요합니다. <br />
            학생들은 스스로 학습하는 방법을 터득하고, 학습 커뮤니티를 <br />
            만들어 과정이 끝나더라도 학습을 이어갈 수 있습니다.
          </CurriclumDescription>
        </CurriclumDescriptionColumn>
      </CurriclumDescriptionContainer>
      <CurriclumDescriptionContainer>
        <CurriclumDescriptionColumn>
          <ImageContent
            src={require('../../Assets/Images/app4.jpg')}
          ></ImageContent>
        </CurriclumDescriptionColumn>
        <CurriclumDescriptionColumn>
          <CurriclumTitle>학습 모둠</CurriclumTitle>
          <CurriclumDescription>
            함께 배우고, 배운 것을 나누는 학습 모둠은 온라인 수업에서도 <br />
            오프라인 수업과 마찬가지로 코더스하이 과정의 핵심입니다. <br />
            작게는 프로젝트 팀부터 같은 기수의 동료들과 지난 기수를 <br />
            수료한 선배들, 그리고 코더스하이의 강사진들까지 <br />
            여러분이 만나게 될 모두가 하나의 학습 모둠을 만듭니다.
          </CurriclumDescription>
        </CurriclumDescriptionColumn>
      </CurriclumDescriptionContainer>
      <CurriculumButtonContainer>
        <CurriculumButton onClick={() => setShowCase(0)} className="btn active">
          1주차
        </CurriculumButton>
        <CurriculumButton onClick={() => setShowCase(1)} className="btn">
          2주차
        </CurriculumButton>
        <CurriculumButton onClick={() => setShowCase(2)} className="btn">
          3주차
        </CurriculumButton>
        <CurriculumButton onClick={() => setShowCase(3)} className="btn">
          4주차
        </CurriculumButton>
      </CurriculumButtonContainer>
      <CurriculumButtonContainer>
        <CurriculumButton onClick={() => setShowCase(4)} className="btn">
          5주차
        </CurriculumButton>
        <CurriculumButton onClick={() => setShowCase(5)} className="btn">
          6주차
        </CurriculumButton>
        <CurriculumButton onClick={() => setShowCase(6)} className="btn">
          7주차
        </CurriculumButton>
        <CurriculumButton onClick={() => setShowCase(7)} className="btn">
          8주차
        </CurriculumButton>
      </CurriculumButtonContainer>
      <CurriculumWeekDetailContainer>
        <CurriculumWeekDetailContent>
          {coursesDetailAPP[showCase].Title !== '' ? (
            <>
              <CurriculumWeekDetailTitle>
                <DetailIcon src={require('../../Assets/Images/ux2.jpg')} />
                {coursesDetailAPP[showCase].Title}
              </CurriculumWeekDetailTitle>
              <CurriculumWeekDetailDescriptionContainer>
                <CurriculumWeekDetailTitle>
                  <DetailIcon src={require('../../Assets/Images/ux2.jpg')} />
                  학습 영상
                </CurriculumWeekDetailTitle>
                {coursesDetailAPP[showCase].Descriptions.map(
                  (description, index) => {
                    var DescriptionBlock;
                    if (description.indexOf('[필수]') !== -1) {
                      DescriptionBlock = (
                        <CurriculumWeekDetailDescriptionNecessary
                          key={showCase + index + description}
                        >
                          {description}
                        </CurriculumWeekDetailDescriptionNecessary>
                      );
                    } else if (description.indexOf('iOS HIG') !== -1) {
                      DescriptionBlock = (
                        <CurriculumWeekDetailDescriptionHIG
                          key={showCase + index + description}
                        >
                          {description}
                        </CurriculumWeekDetailDescriptionHIG>
                      );
                    } else if (description.indexOf('https://') !== -1) {
                      DescriptionBlock = (
                        <YouTubeLink key={showCase + index + description}>
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={description.split('. ')[1]}
                          >
                            {description}
                          </a>
                        </YouTubeLink>
                      );
                    } else {
                      DescriptionBlock = (
                        <CurriculumWeekDetailDescription
                          key={showCase + index + description}
                        >
                          <DirectLink
                            rel="noopener noreferrer"
                            target="_blank"
                            href={coursesDetailAPP[showCase].URLs[description]}
                          >
                            {description}
                          </DirectLink>
                        </CurriculumWeekDetailDescription>
                      );
                    }
                    return DescriptionBlock;
                  }
                )}
              </CurriculumWeekDetailDescriptionContainer>
              <CurriculumWeekDetailDescriptionContainer>
                <CurriculumWeekDetailTitle>
                  <DetailIcon src={require('../../Assets/Images/ux2.jpg')} />
                  과제
                </CurriculumWeekDetailTitle>
                {coursesDetailAPP[showCase].Assignments.map((item, index) => {
                  return (
                    <CurriculumWeekDetailDescriptionAssignment
                      key={showCase + index + item}
                    >
                      {item}
                    </CurriculumWeekDetailDescriptionAssignment>
                  );
                })}
              </CurriculumWeekDetailDescriptionContainer>
            </>
          ) : (
            <ComingSoonText>
              Coming Soon
              <span role="img" aria-label="rating">
                😉
              </span>
            </ComingSoonText>
          )}
        </CurriculumWeekDetailContent>
      </CurriculumWeekDetailContainer>
      <DirectLink onClick={topFunction}>맨 위로</DirectLink>
    </Container>
  );
};

UX.propTypes = {
  coursesDetailAPP: PropTypes.array
};

export default UX;
