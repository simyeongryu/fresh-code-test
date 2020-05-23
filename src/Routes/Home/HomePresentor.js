import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import SlideItem from "../../Components/SlideItem";
import Loading from "../../Components/Loading";

const SlideContatiner = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
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

export default HomePresentor;
