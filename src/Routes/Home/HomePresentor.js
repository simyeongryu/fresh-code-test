import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import SlideItem from "../../Components/SlideItem";
import Loading from "../../Components/Loading";
import PropTypes from "prop-types";

const SlideContatiner = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  /* library에 기본적으로 들어가 있는 div 조절 */
  div {
    width: 100%;
  }
`;

const properties = {
  duration: 5000, // 배너 지속 시간
  transitionDuration: 150, // 배너 넘어가는 속도
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true // 마우스 올리면 멈춤
};

/**
 * 메인 페이지 화면 구현 컴포넌트
 * @param {array} banners - api에서 받아온 banner 목록
 */
const HomePresentor = ({ banners }) => {
  return (
    <>
      {banners ? (
        <SlideContatiner>
          <Slide {...properties}>
            {banners.map(banner => (
              <SlideItem key={banner.id} imgUrl={banner.imgUrl} />
            ))}
          </Slide>
        </SlideContatiner>
      ) : (
        <Loading />
      )}
    </>
  );
};

HomePresentor.propTypes = {
  banners: PropTypes.array.isRequired
};

export default HomePresentor;
