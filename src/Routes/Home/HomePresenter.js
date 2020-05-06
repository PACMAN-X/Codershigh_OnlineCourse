import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #007bec;
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
  src: url(${(props) => props.bgImage});
`;

const DefaultButton = styled.button`
  width: 25em;
  height: 2.5em;
  font-size: 2.5em;
  font-family: 'CoreGothicE-3';
  font-weight: 800;
  color: #007bec;
  border-radius: 1em;
`
const CollapseButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const CollapseButtonColumn = styled.div`
  width: 100%;
  height: 100%;
`

const CollapseButton = styled.button`
  width: 100%;
  height: 100%;
  background:none;
  border:0px; 
  font-size: 20px;
  color: black;
`

// Review

const ReviewBlockDefault = styled.div`
  width: 195px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const ReviewImg = styled.img`
  width: 80px;
  height: 80px;
  transition: all 0.2s linear;
`

const BlockReviewInfo = styled.div`
  width: 195px;
  left: 0;
  bottom: 0;
  position: absolute;
  background-color: #273949;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translate(0, 100%);
  transition: all 0.2s linear;
`

const BlockReview = styled.div`
  &: hover ${ReviewImg}{
    transform: translateY(-25px);
  };
  &: hover ${BlockReviewInfo}{
    transform: translate(0, 0);
  };
`

const ReviewColumn = styled.div`
  height: 50px;
  width: 100%;
  padding: 12px 10px 10px 10px;
`

const RewviewInfo = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: white;
  margin-bottom: 2px;
`
const Info_Button = styled.button`
`

const HomePresenter = ({max_images, reviews}) => (
  <Container>
    {
      max_images.map( (image, index) => 
         { if (image === "1.png") {
           const Block = 
           <>
              <Cover key={index} src={require(`../../Assets/Block_Images/${image}`)} />
              <DefaultButton>등록하러 가기</DefaultButton>
           </>
           return Block
         } else if (image === "4.png") {
           const Block = 
           <>
            <Cover key={index} src={require(`../../Assets/Block_Images/${image}`)} />
            <ReviewBlockDefault>
              <BlockReview>
                <ReviewImg src={require('../../Assets/Block_Images/1.png')}></ReviewImg>
                <BlockReviewInfo>
                  <ReviewColumn>
                    <RewviewInfo>앱 출시!?</RewviewInfo>
                  </ReviewColumn>
                  <ReviewColumn>
                    <Info_Button>살펴보기</Info_Button>
                  </ReviewColumn>
                </BlockReviewInfo>
              </BlockReview>
            </ReviewBlockDefault>
           </> 
           return Block
        } else if (image === "5.png") {
           const Block =
            <>
              <Cover key={index} src={require(`../../Assets/Block_Images/${image}`)} />
              <CollapseButtonContainer>
                <CollapseButtonColumn>
                <CollapseButton>중앙대학교 사례 보기</CollapseButton>
                </CollapseButtonColumn>
                <CollapseButtonColumn>
                <CollapseButton>한양대학교 사례 보기</CollapseButton>
                </CollapseButtonColumn>
              </CollapseButtonContainer>
            </>
           return Block
         } else {
          return <Cover key={index} src={require(`../../Assets/Block_Images/${image}`)} />
         }}
        
      )
    }
  </Container>
);

HomePresenter.propTypes = {
  max_images: PropTypes.array,
  reviews: PropTypes.array,
  collapse: PropTypes.func.isRequired
};


export default HomePresenter;
