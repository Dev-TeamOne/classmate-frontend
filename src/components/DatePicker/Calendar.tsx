import { HTMLAttributes } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
} from 'date-fns';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLTableSectionElement> {
  currentDate: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

function Calendar({ currentDate, selectedDate, onDateClick, ...rest }: Props) {
  // TODO: 리팩토링 방법 고민하기
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const todayDate = new Date();

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const cloneDay = day;
      days.push(
        <td
          className={`col ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : format(currentDate, 'M') !== format(day, 'M')
              ? 'not-valid'
              : 'valid'
          }${isSameDay(cloneDay, todayDate) ? ' today' : ''}`}
          onClick={() => onDateClick(cloneDay)}
        >
          <div className={format(currentDate, 'M') !== format(day, 'M') ? 'text not-valid' : ''}>
            {format(day, 'd')}
          </div>
        </td>,
      );
      day = addDays(day, 1);
    }
    rows.push(<tr className='row'>{days}</tr>);
    days = [];
  }
  return <TableBody {...rest}>{rows}</TableBody>;
}

export default Calendar;

const TableBody = styled.tbody`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.typo.small};
  text-align: center;
  color: ${({ theme }) => theme.colors.titleActive};

  .col {
    width: 24px;
    height: 24px;
    cursor: pointer;
    border-radius: 5px;

    div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    :hover:not(.selected, .today) {
      background: ${({ theme }) => theme.colors.offWhite};
    }
  }

  .disabled {
    color: ${({ theme }) => theme.colors.grey2};
  }

  .today {
    border: 1px solid ${({ theme }) => theme.colors.primary1};
    border-radius: 5px;
  }

  .selected {
    background: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.white};
  }
`;
