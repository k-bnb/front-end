export const extractMonthDate = (dateStr) => {
  const arr = dateStr.split('-');
  return { year: arr[0], month: arr[1], date: arr[2] };
};
