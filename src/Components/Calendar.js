import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default ({ holidays }) => {
  const [startDate, setStartDate] = useState(null);

  const excludeDates = [];
  holidays.forEach(item => excludeDates.push(new Date(item.holiday)));

  const CustomInput = ({ value, onClick }) => (
    <input
      className="react-date-picker-custum"
      onClick={onClick}
      value={value}
      placeholder="배송일 선택"
      readOnly
    />
  );

  return (
    <DatePicker
      selected={startDate} // 선택된 날짜 표시
      onChange={date => setStartDate(date)} // 날짜 선택 시
      excludeDates={excludeDates} // 휴일 제외
      dateFormat="yyyy-MM-dd" // 날짜 형식
      customInput={<CustomInput />}
    />
  );
};
