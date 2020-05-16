import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './Curriculum.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CourseHeader = styled.div`
  width: 300px;
  height: 50px;
  color: black;
  font-size: 15pt;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  font-weight: bold;
`;

const CurriclumDescriptionContainer = styled.div`
  width: 70%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CurriclumDescriptionColumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CurriclumTitle = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 25px;
`;

const CurriclumDescription = styled.div`
  color: black;
  font-size: 15px;
  line-height: 20px;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CurriculumButtonContainer = styled.div`
  padding: 20px;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CurriculumButton = styled.button`
  width: 20%;
  font-size: 16px;
  border-radius: 20px;
  padding: 10px;
`;

const CurriculumWeekDetailContainer = styled.div`
  background-color: #fefff0;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: black;
  border-radius: 10px;
`;

const CurriculumWeekDetailContent = styled.div``;
const CurriculumWeekDetailTitle = styled.div`
  font-size: 20px;
  color: #007bec;
  font-weight: bold;
  margin-bottom: 20px;
`;
const CurriculumWeekDetailDescription = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
`;

const CurriculumWeekDetailDescriptionNecessary = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const CurriculumWeekDetailDescriptionHIG = styled.div`
  font-size: 12px;
  color: #007bec;
  margin-top: 30px;
  font-weight: bold;
`;

const DirectLink = styled.a`
  margin: 40px;
  font-size: 15px;
  font-weight: bold;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;

const UX = ({ coursesDetailUX }) => {
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
      <CourseHeader>UX 디자인 (4주) 커리큘럼</CourseHeader>
      <CurriclumDescriptionContainer>
        <CurriclumDescriptionColumn>
          <ImageContent
            src={require('../../Assets/Images/ux1.jpg')}
          ></ImageContent>
        </CurriclumDescriptionColumn>
        <CurriclumDescriptionColumn>
          <CurriclumTitle>앱의 구동방식을 설계하는 단계</CurriclumTitle>
          <CurriclumDescription>
            UX 디자인 과정에서는, 4주에 걸쳐 앱의 아이디어를
            <br /> 정리하고 구동 방식을 결정합니다. 이 과정을 통해
            <br /> 개발자들은 아이디어를 시각화하는 것을 경험하고
            <br /> 디자이너들에게는 앱이 동작하는 방식을 엿보는 기회가
            <br />
            되며, 기획자들은 사용자에 대한 통찰력을 얻게 됩니다.
          </CurriclumDescription>
        </CurriclumDescriptionColumn>
      </CurriclumDescriptionContainer>
      <CurriclumDescriptionContainer>
        <CurriclumDescriptionColumn>
          <ImageContent
            src={require('../../Assets/Images/ux2.jpg')}
          ></ImageContent>
        </CurriclumDescriptionColumn>
        <CurriclumDescriptionColumn>
          <CurriclumTitle>
            아이디어를 정리하고
            <br /> 동료들과 의견을 나누는 시간
          </CurriclumTitle>
          <CurriclumDescription>
            4주 간 매주 정해진 시간에 모여 과제 안내를 받습니다. 앱 아이디어를
            구체화 하기 위한 동영상 학습 콘텐츠를 학습한 뒤 과제를 제출합니다.
            서로의 아이디어를 공유하며 함께 팀을 꾸리고 싶은 사람을 점찍어
            두세요.
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
      <CurriculumWeekDetailContainer>
        <CurriculumWeekDetailContent>
          <CurriculumWeekDetailTitle>
            {coursesDetailUX[showCase].Title}
          </CurriculumWeekDetailTitle>
          <CurriculumWeekDetailDescription>
            {coursesDetailUX[showCase].Descriptions.map(
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
                } else {
                  DescriptionBlock = (
                    <CurriculumWeekDetailDescription
                      key={showCase + index + description}
                    >
                      {description}
                    </CurriculumWeekDetailDescription>
                  );
                }
                return DescriptionBlock;
              }
            )}
          </CurriculumWeekDetailDescription>
        </CurriculumWeekDetailContent>
      </CurriculumWeekDetailContainer>
      <DirectLink onClick={topFunction}>맨 위로</DirectLink>
    </Container>
  );
};

UX.propTypes = {
  coursesDetailUX: PropTypes.array
};

export default UX;
