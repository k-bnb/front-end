import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import './CalendarTemplate.css';
import styled from 'styled-components';

const StyledDateRangePicker = styled(DateRangePicker)``;

class CalendarTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      start: null,
      end: null,
      array: [],
    };
    moment.locale('ko');
  }
  // const [focus, setFocus] = useState('startDate');

  render() {
    return (
      <div className="App">
        <DateRangePicker
          transitionDuration={0}
          monthFormat="YYYY년 M월"
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="checkIn" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="checkOut" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
            console.log(startDate, endDate);
          }} // PropTypes.func.isRequired,
          displayFormat={() => 'MM월 DD일'}
          readOnly={true}
          verticalHeight={500}
          minDate="disable"
          noBorder={true}
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <label htmlFor="checkIn" className="checkIn-text">
          체크인
        </label>
        <label htmlFor="checkOut" className="checkOut-text">
          체크아웃
        </label>
        {/* <button
          onClick={() => {
            console.log(this.state.startDate);
            console.log(this.state.endDate);
          }}
        >
          click
        </button> */}
      </div>
    );
  }
}

export default React.memo(CalendarTemplate);
