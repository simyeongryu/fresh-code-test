import React, { useEffect, useState } from "react";
import HomePresentor from "./HomePresentor";
import { api } from "../../api";

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [banners, setBanners] = useState(null);
  const [menus, setMenus] = useState(null);
  const [holidays, setHolidays] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { banners }
        } = await api.banners();
      })();

      (async () => {
        const {
          data: { menus }
        } = await api.salads();
      })();

      (async () => {
        const {
          data: { holidays }
        } = await api.dayoff();
      })();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [loading, banners, menus, holidays]);

  return <HomePresentor />;
};

export default HomeContainer;
