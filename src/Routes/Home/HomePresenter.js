import React from "react";
import styled from "styled-components";
import HeaderContentBlock from "../../Components/HomeComponents/HeaderContentBlock";
import DescriptionContentBlock from "../../Components/HomeComponents/DescriptionContentBlock";

const Container = styled.div``;

const HomePresenter = () => (
  <Container>
    <HeaderContentBlock></HeaderContentBlock>
    <DescriptionContentBlock></DescriptionContentBlock>
  </Container>
);

export default HomePresenter;
