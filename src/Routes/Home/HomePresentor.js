import React from "react";
import Carousel from "../../Components/Carousel";

const HomePresentor = ({ loading, banners }) => {
  return <>{loading ? "loading" : <Carousel banners={banners} />}</>;
};

export default HomePresentor;
