import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './EditCalendarTemplate.css';
import { dateInput } from '../modules/search';

function EditCalendar() {
  const dispatch = useDispatch();
  const { checkDateSearch } = useSelector(({ search }) => search.searchReq);

  const [dateRange, setDateRange] = useState({
    startDate: checkDateSearch.startDate || null,
    endDate: checkDateSearch.endDate || null,
  });
  const [focus, setFocus] = useState('startDate');

  let { startDate, endDate } = dateRange;

  if (startDate && !startDate._d) {
    startDate = moment(startDate);
  }
  if (endDate && !endDate._d) {
    endDate = moment(endDate);
  }

  console.log(startDate);
  console.log(endDate);

  const handleOnDateChange = (startDate, endDate) => {
    if (startDate.startDate && !startDate.endDate) {
      let startD = moment(startDate.startDate._d).format('YYYY-MM-DD');
      dispatch(dateInput('startDate', startD)); // 시작일만 선택시 시작일 dispatch
      setDateRange({ startDate: startD, endDate: startD });
    }

    if (startDate.startDate && startDate.endDate) {
      let startD = moment(startDate.startDate._d).format('YYYY-MM-DD');
      let endD = moment(startDate.endDate._d).format('YYYY-MM-DD');
      dispatch(dateInput('startDate', startD)); // 시작일만 선택시 시작일 dispatch

      dispatch(dateInput('endDate', endD)); // 시작일만 선택시 시작일 dispatch
      setDateRange({ startDate: startD, endDate: endD });
    }

    setDateRange(startDate, endDate);
  };

  return (
    <DayPickerRangeController
      isRTL={false} // 오른쪽에서 왼쪽으로 가는건가? false이면 왼쪽에서 오른쪽으로
      hideKeyboardShortcutsPanel={true}
      isOutsideRange={(day) => moment().diff(day) >= 0} // 오늘부터 선택 가능
      maxDate={null}
      minDate={null}
      monthFormat="YYYY년 M월" // 달력에 표시되는 양식 '2021년 2월'
      startDate={startDate} // 클릭한 날짜를 시작일로 표시, 미리 찍어두고 싶으면 괄호안에 다른값을 넣는다.
      endDate={endDate} //클릭한 날짜를 종료일로 표시, 미리 찍어두고 싶으면 괄호안에 다른값을 넣는다.
      onDatesChange={handleOnDateChange}
      focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={(focus) => {
        setFocus(focus);
      }} // PropTypes.func.isRequired,
      keepOpenOnDateSelect={true} // 날짜 선택 후 날자 조정 설정하기
      daySize={40} // 달력크기
      numberOfMonths={2} // 렌더링 되는 달력 갯수 (2이면 2달)
      transitionDuration={200} // 달력넘어가는 속도 millisec
    />
  );
}

export default EditCalendar;
