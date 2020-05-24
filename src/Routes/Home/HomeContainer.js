import React, { useEffect, useState } from "react";
import HomePresentor from "./HomePresentor";
import { api } from "../../api";

const HomeContainer = () => {
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { banners }
        } = await api.banners();
        setBanners(banners);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <HomePresentor banners={banners} />;
};

export default HomeContainer;
