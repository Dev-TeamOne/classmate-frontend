import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: StepDirection;
  items: Array<StepItem>;
  current?: number;
}

function Steps({ current = 1, direction = 'horizontal', items, ...rest }: Props) {
  return (
    <StepsWrapper direction={direction} {...rest}>
      {items.map((item: StepItem, index: number) => {
        const isActiveItem = index + 1 === current;
        return (
          <StepItem key={index} direction={direction}>
            <StepItemIcon isVertical={direction === 'vertical' && index !== items.length - 1}>
              {index + 1 < current ? (
                <Icon name='check-circle-rounded' color='primary2' size={32} />
              ) : (
                <StepItemCircle isActive={isActiveItem}>{index + 1}</StepItemCircle>
              )}
            </StepItemIcon>
            <StepItemContent isActive={isActiveItem}>
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </StepItemContent>
          </StepItem>
        );
      })}
    </StepsWrapper>
  );
}

export default Steps;

const StepsWrapper = styled.div<{ direction: StepDirection }>`
  display: flex;
  justify-content: space-between;
  gap: ${({ direction }) => (direction === 'horizontal' ? '20px' : '50px')};
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};
  width: 100%;
`;

const StepItem = styled.div<{ direction: StepDirection }>`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-grow: 1;

  :not(:last-child) {
    flex-grow: 2;
  }

  :not(:last-child)::after {
    display: ${({ direction }) => (direction === 'horizontal' ? 'block' : 'none')};
    content: '';
    background-color: ${({ theme }) => theme.colors.primary1};
    min-width: 10px;
    width: -webkit-fill-available;
    height: 1px;
  }
`;

const StepItemIcon = styled.div<{ isVertical: boolean }>`
  ::after {
    display: ${({ isVertical }) => (isVertical ? 'block' : 'none')};
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary1};
    width: 1px;
    height: 35px;
    margin-left: 16px;
    margin-top: 6px;
  }
`;

const StepItemCircle = styled.div<{ isActive: boolean }>`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typo.small};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.titleActive)};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary1 : theme.colors.grey3};
`;

const StepItemContent = styled.div<{ isActive: boolean }>`
  flex-shrink: 0;

  h6 {
    font-size: ${({ theme }) => theme.typo.small};
    color: ${({ theme, isActive }) => (isActive ? theme.colors.titleActive : theme.colors.grey1)};
    margin-bottom: 5px;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-size: ${({ theme }) => theme.typo.xsmall};
    color: ${({ theme }) => theme.colors.grey1};
    line-height: 14px;
  }
`;
