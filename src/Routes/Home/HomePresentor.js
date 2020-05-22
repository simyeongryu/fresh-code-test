import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import SlideItem from "../../Components/SlideItem";
import Loading from "../../Components/Loading";

const SlideContatiner = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
`;

const properties = {
  duration: 5000,
  transitionDuration: 150,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true
};

const HomePresentor = ({ banners }) => {
  return (
    <>
      {banners ? (
        <SlideContatiner>
          <Slide {...properties}>
            {banners.map(banner => {
              return <SlideItem key={banner.id} imgUrl={banner.imgUrl} />;
            })}
          </Slide>
        </SlideContatiner>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HomePresentor;
