import React, { useEffect, useState } from "react";
import HomePresentor from "./HomePresentor";
import { api } from "../../api";

/**
 * 메인 페이지 state 관리
 */
const HomeContainer = () => {
  const [banners, setBanners] = useState([]);

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
