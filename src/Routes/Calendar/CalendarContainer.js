import React, { useEffect, useState } from "react";
import CalendarPresentor from "./CalendarPresentor";
import { api } from "../../api";

const CalendarContainer = () => {
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

  return <CalendarPresentor holidays={holidays} />;
};

export default CalendarContainer;
