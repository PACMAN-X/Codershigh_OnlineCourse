import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderJombo from '../../Components/HomeComponents/HeaderJombo';
import HeaderDescription from '../../Components/HomeComponents/HeaderDescription';
import DividerB from '../../Components/HomeComponents/DividerB';
import DividerW from '../../Components/HomeComponents/DividerW';
import CourserBlock from '../../Components/HomeComponents/CourseBlock';
import CardNewsBlock from '../../Components/HomeComponents/CardNewsBlock';
import LecturerBlock from '../../Components/HomeComponents/LecturerBlock';
import BlockiOS from '../../Components/HomeComponents/BlockiOS';
import CodershighBlock from '../../Components/HomeComponents/CodershighBlock';
import ImageBgBlock from '../../Components/HomeComponents/ImageBgBlock';
import TextBlock from '../../Components/HomeComponents/TextBlock';
import CurriculumBlock from '../../Components/HomeComponents/CurriculumBlock';
import CompareBlock from '../../Components/HomeComponents/CompareBlock';
import FooterBlock from '../../Components/HomeComponents/FooterBlock';

const Container = styled.div``;

const HomePresenter = ({ universities }) => (
  <Container>
    <HeaderJombo></HeaderJombo>
    <HeaderDescription></HeaderDescription>
    <DividerB></DividerB>
    <DividerW></DividerW>
    <CourserBlock></CourserBlock>
    <CardNewsBlock></CardNewsBlock>
    <LecturerBlock universities={universities}></LecturerBlock>
    <BlockiOS></BlockiOS>
    <CodershighBlock></CodershighBlock>
    <ImageBgBlock></ImageBgBlock>
    <TextBlock></TextBlock>
    <CurriculumBlock></CurriculumBlock>
    <CompareBlock></CompareBlock>
    <FooterBlock></FooterBlock>
  </Container>
);

HomePresenter.propTypes = {
  cardNews: PropTypes.array,
  universities: PropTypes.array,
};

export default HomePresenter;
