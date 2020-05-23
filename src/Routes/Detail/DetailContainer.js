import React, { useEffect, useState } from "react";
import DetailPresentor from "./DetailPresentor";
import { api } from "../../api";

const DetailContainer = () => {
  const [holidays, setHolidays] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { holidays }
        } = await api.dayoff();
        setHolidays(holidays);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <DetailPresentor holidays={holidays} />;
};

export default DetailContainer;
