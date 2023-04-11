import { useState, useEffect, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Input from '../Input';
import DatePickerPanel from './DatePickerPanel';
import { getStringDateValue } from './utils';
import useModal from '../../hooks/useModal';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number;
}

function DatePicker({ width = 330, ...rest }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const { ref, isOpen, setIsOpen, handleClickInside } = useModal({ initialMode: false });

  const onDateClick = (day: Date) => setSelectedDate(day);

  useEffect(() => {
    setTimeout(() => setIsOpen(false), 200);
  }, [selectedDate]);

  return (
    <DatePickerWrapper ref={ref} {...rest}>
      <Input
        value={getStringDateValue(selectedDate)}
        rightAddon={<Icon name='calendar' color='grey2' size={20} />}
        onClick={handleClickInside}
      />
      <div>
        {isOpen ? (
          <DatePickerPanel
            selectedDate={selectedDate}
            onDateClick={onDateClick}
            onClick={handleClickInside}
            style={{ width: width && `${width - 10}px` }}
          />
        ) : null}
      </div>
    </DatePickerWrapper>
  );
}

export default DatePicker;

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
