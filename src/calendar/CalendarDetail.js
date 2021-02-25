import React, { useEffect, useRef, useState } from 'react';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import { useDispatch, useSelector } from 'react-redux';
// import { dateInput } from '../modules/search';
import styled, { css } from 'styled-components';
import Text from '../components/UI/atoms/atoms-header/Text';
import CloseBtn from '../components/UI/atoms/atoms-detail/CloseBtn';
import { clearCheckDateDtail, dateChangeDetail } from '../modules/detail';
import { AiOutlineClose } from 'react-icons/ai';

const CalendarDetailBlock = styled.div`
  /* 달력 날짜하나하나 */
  .CalendarDay {
    border: 0 !important;
    /* background-color: beige !important; */
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
  /* 모달의 전체 컨테이너 */
  .CalendarMonthGrid {
    width: 100% !important;
    height: 400px !important;
    border-radius: 0 !important;
  }

  .DayPicker__withBorder {
    border: 0 !important;
    z-index: 0;
    background-color: transparent;
    position: absolute !important;
    top: 0;
    right: 0;
  }

  .DayPicker {
    position: absolute !important;
    width: fit-content !important;
    border: 0 !important;
    box-shadow: none !important;
    transform: translate(0px, 0px);
    z-index: -1;
    padding: 85px 18px;
  }
`;

const CheckInAndOut = styled.div`
  position: relative;
  flex: 1 1 0%;
  overflow: hidden;

  & + & {
    border-left: 1px solid rgb(176, 176, 176);
  }
  ${(props) =>
    props.isValid &&
    css`
      &:first-child {
        border-radius: 8px;
        border: 2px solid rgb(34, 34, 34);
      }

      &:last-child {
        border: 2px solid rgb(34, 34, 34);
        border-radius: 8px;
      }
    `}
`;

export const CheckTxt = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  font-size: 10px;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 12px;
  color: rgb(34, 34, 34);
`;

const CheckDate = styled.div`
  height: 56px;
  width: 50%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 0%;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 8px;
  right: 25px;
`;

const SelectionDate = styled.div`
  height: 56px;
  padding: 26px 12px 10px;
  line-height: 18px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 8px;
  white-space: nowrap;

  input {
    border: none;
    width: 80%;
    outline: none;
  }

  ${(props) =>
    props.borderThick &&
    css`
      border-radius: 8px;
      border: solid 2px rgb(34, 34, 34);
    `}
`;

const CloseEmoticon = styled.div`
  position: absolute;
  height: 24px;
  width: 24px;
  right: 12px;
  top: 20px;
  z-index: 9999;
  text-align: center;
  cursor: pointer;
  /* ${(props) =>
    props.borderStrong &&
    css`
      left: 135px;
    `} */
`;

const SelectionInfo = ({
  text,
  date,
  dispatch,
  CheckinInputRef,
  CheckoutInputRef,
  isValid,
}) => {
  return (
    <CheckInAndOut isValid={isValid}>
      <CheckTxt>{text}</CheckTxt>
      <SelectionDate>
        <input
          // className="hi"
          value={date}
          placeholder="YYYY.MM.DD"
          ref={CheckinInputRef || CheckoutInputRef}
        ></input>
        {/* {date ? date : 'YYYY.MM.DD'} */}
      </SelectionDate>
      <CloseEmoticon onClick={() => dispatch(clearCheckDateDtail())}>
        <AiOutlineClose />
      </CloseEmoticon>
    </CheckInAndOut>
  );
};

const CalendarBlock = styled.div`
  position: absolute;
  z-index: 1;
  background-color: green;
  width: 667px;
  height: 464px;
  top: -20px;
  right: -25px;
  background-color: white;
  box-shadow: 2px 4px 15px 1px rgba(0, 0, 0, 0.79);
  border-radius: 20px;

  .add-date-container {
    display: flex;
    transform: translateY(25px);
    & > span {
      /* 날짜선택 텍스트 */
      margin-top: 10px;
      margin-left: 40px;
    }
  }

  .close-btn {
    position: absolute;
    bottom: 10px;
    right: 30px;
  }
`;

function Datepicker({ setIsDateBorderThick, setIsCalendarOpen }) {
  const dispatch = useDispatch();
  const detailStartDate = useSelector((state) => state.detail.startDate);
  const detailEndDate = useSelector((state) => state.detail.endDate);

  const [dateRange, setdateRange] = useState({
    startDate: detailStartDate || null,
    endDate: detailEndDate || null,
  });
  const [focus, setFocus] = useState('startDate');

  let { startDate, endDate } = dateRange;

  if (startDate && !startDate._d) {
    startDate = moment(startDate);
  }
  if (endDate && !endDate._d) {
    endDate = moment(endDate);
  }

  // checkIn date가 checkOut date 보다 이후 날짜 일때 모두 clear
  // const AdjustCheckDate = () => {
  //   if (
  //     moment(endDate).diff(moment(startDate)) > 0 &&
  //     moment(detailEndDate).diff(moment(detailStartDate)) > 0
  //   )
  //     return;
  //   dispatch(clearCheckDateDtail());
  // };

  const handleOnDateChange = (startDate, endDate) => {
    if (startDate.startDate && !startDate.endDate) {
      let startD = moment(startDate.startDate._d).format('YYYY-MM-DD');
      dispatch(dateChangeDetail('startDate', startD, 'checkIn'));

      setdateRange({ startDate: startD, endDate: startD });
    }
    if (startDate.startDate && startDate.endDate) {
      let startD = moment(startDate.startDate._d).format('YYYY-MM-DD');
      let endD = moment(startDate.endDate._d).format('YYYY-MM-DD');
      dispatch(dateChangeDetail('endDate', endD, 'checkOut'));
      setdateRange({ startDate: startD, endDate: endD });
      // AdjustCheckDate();
    }
    setdateRange(startDate, endDate);
  };
  const DetailCalendarModalRef = useRef();

  // 날짜 변경시 시작일 종료일을
  useEffect(() => {
    if (dateRange.startDate !== null && dateRange.endDate !== null) {
      //const start = dateRange.startDate._d;
      //const end = dateRange.endDate._d;
    } else {
      return;
    }
  }, [dateRange]);

  // checkIn input에 포커스
  const CheckinInputRef = useRef();
  const CheckInFocus = () => CheckinInputRef.current.focus();

  // 모달을 켰을때 input에 포커스
  useEffect(() => {
    CheckInFocus();
    setIsBorderStrong(true);
  }, []);

  // 모달 켰을 때 DateBox border 진하게
  const [isBorderStrong, setIsBorderStrong] = useState(false);

  return (
    <CalendarDetailBlock ref={DetailCalendarModalRef}>
      <CalendarBlock>
        <div className="add-date-container">
          <Text bigger bold className="add-date">
            날짜 선택
          </Text>
          <CheckDate
            onClick={() => {
              setIsCalendarOpen(true);
            }}
            hasStartDate={detailStartDate}
            hasEndDate={detailEndDate}
          >
            <SelectionInfo
              text="체크인"
              date={detailStartDate}
              dispatch={dispatch}
              CheckinInputRef={CheckinInputRef}
              borderStrong={isBorderStrong}
              isValid={detailStartDate && !detailEndDate}
            />
            <SelectionInfo
              className="divider"
              text="체크아웃"
              date={detailEndDate}
              dispatch={dispatch}
              isValid={detailEndDate}
            />
          </CheckDate>
        </div>
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
          daySize={40} // 달력크기
          numberOfMonths={2} // 렌더링 되는 달력 갯수 (2이면 2달)
          transitionDuration={300} // 달력넘어가는 속도 millisec
          // initialVisibleMonth={() => moment().add(2, 'M')} // 달력을 열면 처음 보이는날.
          onOutsideClick={(e) => {
            if (
              e.target.classList.contains('e') ||
              e.target.classList.contains('DayPicker__withBorder')
            )
              return;
            if (
              DetailCalendarModalRef.current.contains(e.target) &&
              !e.target.classList.contains('close-btn')
            )
              return;
            setIsCalendarOpen(false);
            setTimeout(() => {
              setIsDateBorderThick(false);
            }, 300);
          }}
          verticalHeight={100}
        />
        <CloseBtn className="close-btn" />
      </CalendarBlock>
    </CalendarDetailBlock>
  );
}

export default Datepicker;
