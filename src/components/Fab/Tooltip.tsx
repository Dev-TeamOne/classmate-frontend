import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  isShown?: boolean;
  text: string;
}

function Tooltip({ isShown = false, text, ...rest }: Props) {
  return (
    <TooltipContainer isShown={isShown} {...rest}>
      {text}
    </TooltipContainer>
  );
}

export default Tooltip;

const TooltipContainer = styled.div<{ isShown: boolean }>`
  background: rgba(217, 217, 217, 0.8);
  border-radius: 25px;
  width: fit-content;
  padding: 5px 21px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.typo.small};
  color: ${({ theme }) => theme.colors.titleActive};
  visibility: ${({ isShown }) => (isShown ? 'visible' : 'hidden')};
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: max-content;
`;
