import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import './EditCalendarTemplate.css';
import { changeDate } from '../modules/reserve';

const CalendarNewBlock = styled.div`
  /* // NOTE: the order of these styles DO matter */

  /* // Will edit everything selected including everything between a range of dates */

  /* 달력 날짜 하나하나마다의 테두리 없애는 속성 */
  .App {
    padding-left: 20px;
    position: relative;
  }
  .CalendarDay {
    border: 0 !important;
  }

  /* 날짜에 호버햇을때 회색 원 표시 */
  .CalendarDay.CalendarDay__default.CalendarDay__default_2:hover {
    background-color: lightgray;
    border-radius: 50% !important;
  }

  .DayPicker_weekHeader_li {
    border: 0 !important;
  }
  .CalendarDay__selected_span {
    background: rgb(247, 247, 247) !important;
    color: rgb(34, 34, 34) !important;
    border: 0 !important;
  }

  /* // Will edit selected date or the endpoints of a range of dates */
  .CalendarDay__selected {
    background: rgb(34, 34, 34) !important;
    color: white;
    border-radius: 50%;
    border: 0 !important;
    font-size: 12px;
  }

  /* // Will edit when hovered over. _span style also has this property */
  .CalendarDay__selected:hover {
    color: white;
  }

  /* // Will edit when the second date (end date) in a range of dates */
  /* // is not yet selected. Edits the dates between your mouse and said date */
  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: transparent !important;
    color: rgb(34, 34, 34) !important;
  }

  /* 년/월 text style */
  .CalendarMonth_caption {
    font-size: 16px;
  }

  /* 모달 내부의 화살표 테두리 없애는 속성 */
  .DayPickerNavigation_button {
    border: 0 !important;
  }

  /* 달력 포함하고있는 전체 모달의 속성 */
  .DayPicker {
    padding-top: 20px !important;
    display: flex !important;
    justify-content: center !important;
    /* border-radius: 30px; */
    position: absolute !important;
    top: 10px;
    right: 50%;
    transform: translateX(50%);
    height: 230px;
    width: 655px !important;
    max-width: 850px !important;
    border-color: transparent !important;
    /* border-radius: 30px !important; */
  }

  /* 달력 border style */
  .DayPicker__withBorder {
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  /* 달력 이동 button style */
  .DayPickerNavigation_button {
    outline: none;
  }

  .DayPickerNavigation_button:hover {
    border-radius: 50%;
    background: rgb(243, 243, 243);
  }

  /* 모달의 전체 컨테이너 */
  .CalendarMonthGrid {
    width: 100% !important;
    height: 400px !important;
    /* border-radius: 30px !important; */
  }
`;

function EditCalendar() {
  const dispatch = useDispatch();
  const { checkDateSearch } = useSelector((state) => state.reserve);

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

  const handleOnDateChange = (startDate, endDate) => {
    if (startDate.startDate && !startDate.endDate) {
      let startD = moment(startDate.startDate._d).format('YYYY-MM-DD');
      dispatch(changeDate('startDate', startD)); // 시작일만 선택시 시작일 dispatch
      setDateRange({ startDate: startD, endDate: startD });
    }

    if (startDate.startDate && startDate.endDate) {
      let startD = moment(startDate.startDate._d).format('YYYY-MM-DD');
      let endD = moment(startDate.endDate._d).format('YYYY-MM-DD');
      dispatch(changeDate('startDate', startD)); // 시작일만 선택시 시작일 dispatch

      dispatch(changeDate('endDate', endD)); // 시작일만 선택시 시작일 dispatch
      setDateRange({ startDate: startD, endDate: endD });
    }

    setDateRange(startDate, endDate);
  };

  return (
    <CalendarNewBlock>
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
    </CalendarNewBlock>
  );
}

export default EditCalendar;
