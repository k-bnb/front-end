import React, { useEffect, useState } from 'react';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { dateInput } from '../modules/search';
import styled from 'styled-components';

const CalendarNewBlock = styled.div`
  .App {
    padding-left: 20px;
    position: relative;
  }
  .CalendarDay {
    border: 0 !important;
  }

  /* 날짜에 호버햇을때 회색 원 표시 */
  .CalendarDay.CalendarDay__default.CalendarDay__default_2:hover {
    /* border: 1px solid rgb(34, 34, 34) !important; */
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
    background: orange;
    color: white;
  }

  /* // Will edit when the second date (end date) in a range of dates */
  /* // is not yet selected. Edits the dates between your mouse and said date */
  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: transparent !important;
    color: rgb(34, 34, 34) !important;
  }

  /* 모달 내부의 화살표 테두리 없애는 속성 */
  .DayPickerNavigation_button {
    border: 0 !important;
  }

  /* 달력 포함하고있는 전체 모달의 속성 */
  .DayPicker {
    display: flex !important;
    justify-content: center !important;
    border-radius: 30px;
    position: absolute !important;
    top: 80px;
    left: -296px;
    height: 410px;
    width: 850px !important;
    max-width: 850px !important;
    border-radius: 30px !important;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6) !important;
  }
  /* 모달의 전체 컨테이너 */
  .CalendarMonthGrid {
    width: 100% !important;
    height: 400px !important;
    border-radius: 30px !important;
  }
`;

function Datepicker({ setNavModalState, moveFocusNext }) {
  const dispatch = useDispatch();
  const { checkDateSearch } = useSelector(({ search }) => search.searchReq);

  const [dateRange, setdateRange] = useState({
    startDate: checkDateSearch.startDate || null,
    endDate: checkDateSearch.endDate || null,
  });
  const [focus, setFocus] = useState('startDate');

  let { startDate, endDate } = dateRange;
  console.log(startDate);
  console.log(endDate);

  // startDate의 값이 있으며, 이미 string으로 변화되어 store에 저장된경우
  // 달력에는 다시 moment 객체로 변환시켜 startdate, enddate로 입력시킨다.
  if (startDate && !startDate._d) {
    startDate = moment(startDate);
  }
  if (endDate && !endDate._d) {
    endDate = moment(endDate);
  }

  const handleOnDateChange = (startDate, endDate) => {
    // if (endDate > startDate) {
    //   dispatch()
    //   return;
    // }

    if (startDate.startDate && !startDate.endDate) {
      let startD = moment(startDate.startDate._d).format('YYYY-MM-DD');
      dispatch(dateInput('startDate', startD)); // 시작일만 선택시 시작일 dispatch
      moveFocusNext('checkIn');
      setdateRange({ startDate: startD, endDate: startD });
    }
    if (startDate.startDate && startDate.endDate) {
      let startD = moment(startDate.startDate._d).format('YYYY-MM-DD');
      let endD = moment(startDate.endDate._d).format('YYYY-MM-DD');
      dispatch(dateInput('startDate', startD)); // 시작일만 선택시 시작일 dispatch

      dispatch(dateInput('endDate', endD)); // 시작일만 선택시 시작일 dispatch
      setdateRange({ startDate: startD, endDate: endD });
    }
    setdateRange(startDate, endDate);
  };

  // 날짜 변경시 시작일 종료일을
  useEffect(() => {
    if (dateRange.startDate !== null && dateRange.endDate !== null) {
      const start = dateRange.startDate._d;
      const end = dateRange.endDate._d;
    } else {
      return;
    }
  }, [dateRange]);

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
        onDatesChange={handleOnDateChange} // PropTypes.func.isRequired,
        focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={(focus) => {
          setFocus(focus);
        }} // PropTypes.func.isRequired,
        keepOpenOnDateSelect={true}
        daySize={52} // 달력크기
        numberOfMonths={2} // 렌더링 되는 달력 갯수 (2이면 2달)
        transitionDuration={300} // 달력넘어가는 속도 millisec
        // initialVisibleMonth={() => moment().add(2, 'M')} // 달력을 열면 처음 보이는날.
        onOutsideClick={() => {
          setNavModalState({
            location: false,
            checkIn: false,
            checkOut: false,
            guest: false,
          });
          // setIsClicked(false);
        }}
      />
    </CalendarNewBlock>
  );
}

export default Datepicker;
