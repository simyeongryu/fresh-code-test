import React from "react";
import Loading from "../../Components/Loading";
import Calendar from "../../Components/Calendar";

const CalendarPresentor = ({ holidays }) => {
  return <>{holidays ? <Calendar holidays={holidays} /> : <Loading />}</>;
};

export default CalendarPresentor;
