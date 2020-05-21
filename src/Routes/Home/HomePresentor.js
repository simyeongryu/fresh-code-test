import React from "react";
import Banner from "../../Components/Banner";

const HomePresentor = ({ loading, banners }) => {
  return (
    <>{loading ? "loading" : <Banner loading={loading} banners={banners} />}</>
  );
};

export default HomePresentor;
