import React, { useEffect, useState } from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';
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
    if (moment()._d > startDate) {
      console.log('error');
      return;
    }
    setdateRange(startDate, endDate);
  };

  // 날짜 변경시 시작일 종료일을
  useEffect(() => {
    if (dateRange.startDate !== null && dateRange.endDate !== null) {
      const start = dateRange.startDate._d;
      const end = dateRange.endDate._d;
      console.log('start: ', start);
      console.log('end: ', end);
      console.log(moment());
    } else return;
  }, [dateRange]);

  return (
    // <DateRangePicker
    //   monthFormat="YYYY년 M월"
    //   dayFormat="ddd"
    //   keepOpenOnDateSelect={true}
    //   startDatePlaceholderText="Start"
    //   startDate={startDate}
    //   startDateId="checkIn"
    //   endDatePlaceholderText="End"
    //   onDatesChange={handleOnDateChange} // 날짜 바꾸기 이벤트
    //   endDate={endDate}
    //   endDateId="checkOut"
    //   displayFormat={() => 'MM월 DD일'}
    //   focusedInput={focus}
    //   onFocusChange={(focus) => setFocus(focus)} // 선택된 것 바꾸기
    // />
    <>
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
        onFocusChange={(focus) => setFocus(focus)} // PropTypes.func.isRequired,
        keepOpenOnDateSelect={true}
        daySize={41} // 달력크기
        numberOfMonths={2} // 렌더링 되는 달력 갯수 (2이면 2달)
        transitionDuration={300} // 달력넘어가는 속도 millisec
        // initialVisibleMonth={() => moment().add(2, 'M')} // 달력을 열면 처음 보이는날.
      />
    </>
  );
}

export default Datepicker;
