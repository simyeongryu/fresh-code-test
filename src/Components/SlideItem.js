import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1024px;
  height: 240px;
`;

const Image = styled.div`
  background-image: url(${props => props.imgUrl});
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

export default ({ imgUrl }) => (
  <Container>
    <Image imgUrl={imgUrl}></Image>
  </Container>
);
