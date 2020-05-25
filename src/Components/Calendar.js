import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

/**
 * react-datepicker를 활용한 Calendar 구현 컴포넌트
 * @param {array} holidays - api에서 받아온 휴일 목록
 */
const Calendar = ({ holidays }) => {
  const [startDate, setStartDate] = useState(null);
  // 휴일 목록의 요소를 날짜 형식으로 변환
  const excludeDates = holidays.map(item => new Date(item.holiday));

  const CustomInput = ({ value, onClick }) => (
    <input
      className="react-date-picker-custum" // react-datepicker 커스텀 CSS
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
      customInput={<CustomInput />} // 날짜 표시 박스 커스텀
    />
  );
};

Calendar.propTypes = {
  holidays: PropTypes.array.isRequired
};

export default Calendar;
