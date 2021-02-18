import moment from 'moment';

export const extractMonthDate = (dateStr) => {
  const arr = dateStr.split('-');
  return { month: arr[1], date: arr[2] };
};

export const extractDay = (start, end) => {
  return moment(end).diff(start, 'day');
};
