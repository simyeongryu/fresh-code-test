import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1024px;
  height: 240px;
`;

const Image = styled.div`
  background-image: url(${props => props.imgUrl});
  width: 1024px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Content = styled.span`
  font-weight: 600;
  padding: 20px;
  font-size: 20px;
  background: transparent;
  text-align: center;
`;

export default ({ imgUrl, content, imgWidth, imgHeight }) => (
  <Container>
    <Image imgUrl={imgUrl} imgWidth={imgWidth} imgHeight={imgHeight}>
      <Content>{content}</Content>
    </Image>
  </Container>
);
