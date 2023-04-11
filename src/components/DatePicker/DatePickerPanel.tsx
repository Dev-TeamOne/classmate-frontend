import { useState, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { days } from './utils';
import { format, addMonths, subMonths, addYears, subYears } from 'date-fns';
import Calendar from './Calendar';
import Button from '../Button';
import IconButton from '../IconButton';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

function DatePickerPanel({ selectedDate, onDateClick, ...rest }: Props) {
  const [currentDate, setCurrentDate] = useState(selectedDate);

  const getPrevYear = () => {
    setCurrentDate(subYears(currentDate, 1));
  };
  const getNextYear = () => {
    setCurrentDate(addYears(currentDate, 1));
  };
  const getPrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  const getNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const arrowIconProps = {
    color: 'grey2',
    // NOTE: 화살표 아이콘의 크기가 작아 사용자의 클릭 영역이 작아져 클릭이 어려운 문제가 있어 임의로 margin 추가
    style: { margin: '3px' },
  };

  return (
    <PickerPanel {...rest}>
      <PickerHeader>
        <IconButton name='double-arrow-left' size={14} onClick={getPrevYear} {...arrowIconProps} />
        <IconButton name='arrow-left' size={8} onClick={getPrevMonth} {...arrowIconProps} />
        <PickerHeaderView>
          {format(currentDate, 'LLL')} {format(currentDate, 'Y')}
        </PickerHeaderView>
        <IconButton name='arrow-right' size={8} onClick={getNextMonth} {...arrowIconProps} />
        <IconButton name='double-arrow-right' size={14} onClick={getNextYear} {...arrowIconProps} />
      </PickerHeader>
      <PickerBody>
        <PickerContent>
          <thead>
            <tr>
              {days.map((dayName: string) => (
                <th>{dayName}</th>
              ))}
            </tr>
          </thead>
          <Calendar
            currentDate={currentDate}
            selectedDate={selectedDate}
            onDateClick={onDateClick}
          />
        </PickerContent>
      </PickerBody>
      <PickerFooter>
        <Button
          variant='text'
          size='small'
          underline={false}
          style={{ fontSize: '14px' }}
          onClick={() => onDateClick(new Date())}
        >
          Today
        </Button>
      </PickerFooter>
    </PickerPanel>
  );
}

export default DatePickerPanel;

const PickerPanel = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  color: 1px solid ${({ theme }) => theme.colors.titleActive};
  box-shadow: ${({ theme }) => theme.shadow.weak};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: absolute;
  z-index: 1;
`;

const PickerHeader = styled.div`
  display: flex;
  gap: 7px;
  padding: 11px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
`;

const PickerHeaderView = styled.div`
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typo.medium};
  color: ${({ theme }) => theme.colors.titleActive};
  text-align: center;
  width: -webkit-fill-available;
`;

const PickerBody = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PickerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: middle;
`;

const PickerContent = styled.table`
  border-collapse: separate;
  border-spacing: 10px 10px;

  th,
  td {
    width: 24px;
    height: 24px;
    text-align: center;
    vertical-align: middle;
  }
`;
