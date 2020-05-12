// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import BackgroundImage from '../../Assets/Block_Images/1.png';

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: blue;
//   background-image: url(${BackgroundImage});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

// const HomePresenter = () => {
//   const Block = <Container />;
//   return Block;
// };

// // const Container = styled.div`
// //   width: 100%;
// //   height: 100%;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   background-color: #007bec;
// // `;

// // const Cover = styled.div`
// //   width: 100%;
// //   height: 100%;
// //   background-image: url(${(props) => props.src});
// //   background-repeat: no-repeat;
// //   background-size: cover;
// // `;

// // const DefaultButton = styled.button`
// //   width: 25em;
// //   height: 2.5em;
// //   font-size: 2.5em;
// //   font-family: 'CoreGothicE-3';
// //   font-weight: 800;
// //   color: #007bec;
// //   border-radius: 1em;
// // `;
// // const CollapseButtonContainer = styled.div`
// //   display: flex;
// //   width: 100%;
// //   height: 100%;
// // `;

// // const CollapseButtonColumn = styled.div`
// //   width: 100%;
// //   height: 100%;
// // `;

// // const CollapseButton = styled.button`
// //   width: 100%;
// //   height: 100%;
// //   background: none;
// //   border: 0px;
// //   font-size: 20px;
// //   color: black;
// // `;

// // // Review

// // const NewsContainer = styled.div`
// //   width: 100%;
// //   height: 100%;
// //   display: flex;
// //   justify-content: space-around;
// // `;

// // const ReviewBlockDefault = styled.div`
// //   width: 300px;
// //   height: 300px;
// //   display: inline-block;
// //   position: relative;
// //   overflow: hidden;
// // `;

// // const ReviewImg = styled.img`
// //   width: 100%;
// //   height: 100%;
// //   transition: all 0.2s linear;
// // `;

// // const BlockReviewInfo = styled.div`
// //   width: 300px;
// //   left: 0;
// //   bottom: 0;
// //   position: absolute;
// //   background-color: #273949;
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// //   transform: translate(0, 100%);
// //   transition: all 0.2s linear;
// // `;

// // const BlockReview = styled.div`
// //   &: hover ${ReviewImg} {
// //     transform: translateY(-25px);
// //   }
// //   &: hover ${BlockReviewInfo} {
// //     transform: translate(0, 0);
// //   }
// // `;

// // const ReviewColumn = styled.div`
// //   height: 50px;
// //   width: 100%;
// //   padding: 12px 10px 10px 10px;
// // `;

// // const RewviewInfo = styled.div`
// //   font-size: 10px;
// //   font-weight: 700;
// //   color: white;
// //   margin-bottom: 2px;
// // `;
// // const InfoButton = styled.button``;

// // const HomePresenter = ({ blocks, cardNews }) => (
// //   <Container>
// //     {blocks.map((image, index) => {
// //       if (image === '1.png') {
// //         const Block = (
// //           <>
// //             <Cover
// //               key={image}
// //               src={require(`../../Assets/Block_Images/${image}`)}
// //             />
// //             <DefaultButton>등록하러 가기</DefaultButton>
// //           </>
// //         );
// //         return Block;
// //       }
// //       if (image === '4.png') {
// //         const Block = (
// //           <>
// //             <Cover
// //               key={index}
// //               src={require(`../../Assets/Block_Images/${image}`)}
// //             />
// //             <NewsContainer>
// //               {cardNews.map((news) => {
// //                 const newsBlock = (
// //                   <ReviewBlockDefault>
// //                     <BlockReview>
// //                       <ReviewImg src={news.newsImage} />
// //                       <BlockReviewInfo>
// //                         <ReviewColumn>
// //                           <RewviewInfo>{news.students}</RewviewInfo>
// //                         </ReviewColumn>
// //                         <ReviewColumn>
// //                           <InfoButton href={news.newsAddress}>
// //                             살펴보기
// //                           </InfoButton>
// //                         </ReviewColumn>
// //                       </BlockReviewInfo>
// //                     </BlockReview>
// //                   </ReviewBlockDefault>
// //                 );
// //                 return newsBlock;
// //               })}
// //             </NewsContainer>
// //           </>
// //         );
// //         return Block;
// //       }
// //       if (image === '5.png') {
// //         const Block = (
// //           <>
// //             <Cover
// //               key={index}
// //               src={require(`../../Assets/Block_Images/${image}`)}
// //             />
// //             <CollapseButtonContainer>
// //               <CollapseButtonColumn>
// //                 <CollapseButton>중앙대학교 사례 보기</CollapseButton>
// //               </CollapseButtonColumn>
// //               <CollapseButtonColumn>
// //                 <CollapseButton>한양대학교 사례 보기</CollapseButton>
// //               </CollapseButtonColumn>
// //             </CollapseButtonContainer>
// //           </>
// //         );
// //         return Block;
// //       }
// //       return (
// //         <Cover
// //           key={index}
// //           src={require(`../../Assets/Block_Images/${image}`)}
// //         />
// //       );
// //     })}
// //   </Container>
// // );

// // HomePresenter.propTypes = {
// //   blocks: PropTypes.array,
// //   cardNews: PropTypes.array,
// // };
// export default HomePresenter;
