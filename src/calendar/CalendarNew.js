import React, { useEffect, useState } from 'react';
import { DateRangePicker, DateRangePickerInputController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import { useErrorHandler } from '../../node_modules/react-error-boundary/dist/index';

function Datepicker() {
  const [dateRange, setdateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [focus, setFocus] = useState('startDate');

  const { startDate, endDate } = dateRange;

  const handleOnDateChange = (startDate, endDate) => {
    setdateRange(startDate, endDate);
  };

  // 날짜 변경시 시작일 종료일을
  useEffect(() => {
    if (dateRange.startDate !== null && dateRange.endDate !== null) {
      const start = dateRange.startDate._d;
      const end = dateRange.endDate._d;
      console.log(
        `체크인 ${start.getFullYear()}년 ${start.getMonth()}월 ${start.getDate()}일 ~`,
        `체크아웃 ${end.getFullYear()}년 ${end.getMonth()}월 ${end.getDate()}일`,
      );
    } else return;
  }, [dateRange]);

  return (
    <DateRangePicker
      minDate="disable"
      maxDate="disable"
      monthFormat="YYYY년 M월"
      keepOpenOnDateSelect={true}
      startDatePlaceholderText="Start"
      startDate={startDate}
      startDateId="checkIn"
      endDatePlaceholderText="End"
      onDatesChange={handleOnDateChange} // 날짜 바꾸기 이벤트
      endDate={endDate}
      endDateId="checkOut"
      displayFormat={() => 'MM월 DD일'}
      focusedInput={focus}
      onFocusChange={(focus) => setFocus(focus)} // 선택된 것 바꾸기
    />
  );
}

export default Datepicker;
