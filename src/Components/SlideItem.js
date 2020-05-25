import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  height: 400px;
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

/**
 * Slider 내부 이미지를 구현하는 컴포넌트
 * @param {string} imgUrl - api에서 받아온 이미지의 url
 */
const SlideItem = ({ imgUrl }) => (
  <Container>
    <Image imgUrl={imgUrl}></Image>
  </Container>
);

SlideItem.propTypes = {
  imgUrl: PropTypes.string.isRequired
};

export default SlideItem;
