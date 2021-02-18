export const extractMonthDate = (dateStr) => {
  const arr = dateStr.split('-');
  return { month: arr[1], date: arr[2] };
};
