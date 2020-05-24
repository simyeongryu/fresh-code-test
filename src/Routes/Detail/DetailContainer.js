import React, { useEffect, useState } from "react";
import DetailPresentor from "./DetailPresentor";
import { api } from "../../api";
import { useParams } from "react-router-dom";

const DetailContainer = () => {
  const [holidays, setHolidays] = useState(null);
  const [menu, setMenu] = useState(null);

  const param = useParams();

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { holidays }
        } = await api.dayoff();
        setHolidays(holidays);
      })();

      (async () => {
        const {
          data: { menus }
        } = await api.salads();
        const temp = menus.find(menu => menu.id === +param.id);
        setMenu(temp);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <DetailPresentor holidays={holidays} menu={menu} />;
};

export default DetailContainer;
