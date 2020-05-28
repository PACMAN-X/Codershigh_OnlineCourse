import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderJombo from '../../Components/HomeComponents/HeaderJombo';
import HeaderDescription from '../../Components/HomeComponents/HeaderDescription';
import DividerB from '../../Components/HomeComponents/DividerB';
import DividerW from '../../Components/HomeComponents/DividerW';
import StudentsOutputBlock from '../../Components/HomeComponents/StudentsOutputBlock';
import CardNewsBlock from '../../Components/HomeComponents/CardNewsBlock';
import LecturerBlock from '../../Components/HomeComponents/LecturerBlock';
import BlockiOS from '../../Components/HomeComponents/BlockiOS';
import CodershighBlock from '../../Components/HomeComponents/CodershighBlock';
import ImageBgBlock from '../../Components/HomeComponents/ImageBgBlock';
import TextBlock from '../../Components/HomeComponents/TextBlock';
import CurriculumBlock from '../../Components/HomeComponents/CurriculumBlock';
import CompareBlock from '../../Components/HomeComponents/CompareBlock';
import ApcspBlock from '../../Components/HomeComponents/ApcspBlock';
import FooterBlock from '../../Components/Footer/FooterBlock';

const Container = styled.div``;

const HomePresenter = ({ universities }) => (
  <Container>
    <HeaderJombo></HeaderJombo>
    <HeaderDescription></HeaderDescription>
    <DividerB></DividerB>
    <DividerW></DividerW>
    <StudentsOutputBlock></StudentsOutputBlock>
    <CardNewsBlock></CardNewsBlock>
    <LecturerBlock universities={universities}></LecturerBlock>
    <BlockiOS></BlockiOS>
    <CodershighBlock></CodershighBlock>
    <ImageBgBlock></ImageBgBlock>
    <TextBlock></TextBlock>
    <CurriculumBlock></CurriculumBlock>
    <CompareBlock></CompareBlock>
    <ApcspBlock></ApcspBlock>
    <FooterBlock></FooterBlock>
  </Container>
);

HomePresenter.propTypes = {
  cardNews: PropTypes.array,
  universities: PropTypes.array
};

export default HomePresenter;
