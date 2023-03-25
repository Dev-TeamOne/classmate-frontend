import { format } from 'date-fns';

export const days = ['일', '월', '화', '수', '목', '금', '토'];

export const getStringDateValue = (date: Date) => {
  return `${format(date, 'LLLL')} ${format(date, 'd')}, ${format(date, 'Y')}`;
};
