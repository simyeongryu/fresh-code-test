import React, { useEffect, useState } from "react";
import DetailPresentor from "./DetailPresentor";
import { api } from "../../api";
import { useParams } from "react-router-dom";

/**
 * 상세 페이지 state 관리
 */
const DetailContainer = () => {
  const [holidays, setHolidays] = useState([]); // 휴일 목록
  const [menu, setMenu] = useState(null); // 메뉴
  const param = useParams(); // 해당 메뉴의 id

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
        // api에서 받아온 메뉴들 중 id와 일치하는 것만 얻어 presentor로 전달
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
