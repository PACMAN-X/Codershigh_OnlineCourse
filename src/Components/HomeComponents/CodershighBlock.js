import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d3eeff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.padding};
`;

const CourseHeader = styled.div`
  width: 350px;
  height: 50px;
  font-weight: bold;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const Description = styled.div`
  margin-top: 48px;
  ${(props) => props.theme.setMediaQuery(3)};
  color: black;
  text-align: center;
  line-height: 30px;
`;

const ImageContent = styled.img`
  width: 70%;
  height: 100%;
  margin: 20px;
`;

const B = (props) => (
  <span style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const DirectLink = styled.a`
  margin: 20px;
  color: black;
  ${(props) => props.theme.setMediaQuery(4)};
  text-decoration: underline;
  cursor: pointer;
`;

const CodershighBlock = () => {
  return (
    <Container>
      <CourseHeader>온라인 강좌를 넘어 개발자 커뮤니티로</CourseHeader>
      <Description>
        12주 과정이 끝나면 다시 혼자 공부해야 할까요? <br />
        <B>그렇지 않습니다.</B>
        <br />
        <br />
        저희의 목표는 모든 수료생이 훌륭한 개발자가 되어
        <br />
        iOS 앱 개발 업계에 성공적으로 정착하는 것 입니다.
        <br />
        <br />
        수료 후 6개월이 지나도 앱 스토어 등록을 이어가고,
        <br />
        개발자로 취업한 뒤에도 꾸준히 활발하게 소통합니다.
      </Description>
      <DirectLink
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/groups/2041128336175840/?multi_permalinks=2671678816454119%2C2668901390065195&notif_id=1588740501419841&notif_t=group_activity"
      >
        <B>코더스하이 동문 페이스북 그룹 바로가기</B>
      </DirectLink>
      <ImageContent
        src={require('../../Assets/Images/Codershigh_Reunion.jpg')}
      />
      <DirectLink
        rel="noopener noreferrer"
        target="_blank"
        href="http://codershigh.dscloud.biz:30004/"
      >
        <B>코더스하이 라운지 바로가기</B>
      </DirectLink>
    </Container>
  );
};

export default CodershighBlock;
