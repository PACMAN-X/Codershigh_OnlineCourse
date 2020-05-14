import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UniversityDetailContainer = styled.div`
  width: 50%;
  margin-top: 80px;
  margin-bottom: 150px;
  display: flex;
  justify-content: space-around;
`;

const UniversityDetailColumn = styled.div``;

const UniversityDetailButton = styled.button`
  font-size: 15px;
`;

const UniversityDetail = styled.div`
  width: 100%;
  height: 100%;
`;

const UniversityCase = () => {
  const [hidden, setHidden] = useState(true);

  const handleShow = () => {
    if (hidden == true) {

    } else 
  };

  return (
    <>
      <UniversityDetailContainer>
        <UniversityDetailColumn>
          <UniversityDetailButton onClick={() => handleShow()}>
            중앙대학교 사례 보기
          </UniversityDetailButton>
        </UniversityDetailColumn>
        <UniversityDetailColumn>
          <UniversityDetailButton>한양대학교 사례 보기</UniversityDetailButton>
        </UniversityDetailColumn>
      </UniversityDetailContainer>
      <UniversityDetail></UniversityDetail>
      <UniversityDetail></UniversityDetail>
    </>
  );
};

export default UniversityCase;
