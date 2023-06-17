import {
  Children,
  ComponentProps,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import Fab from './Fab';
import styled from 'styled-components';
import { Props as FabProps } from './Fab';

type FabGroupChild = ReactElement<ComponentProps<typeof Fab>> | null;

export interface Props
  extends HTMLAttributes<HTMLDivElement>,
    Pick<FabProps, 'type' | 'iconName' | 'position'> {
  children: FabGroupChild | FabGroupChild[];
  trigger?: ButtonTrigger;
}

function FabGroup({
  children,
  trigger = 'none',
  position = 'left',
  type,
  iconName,
  ...rest
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const validChildren = Children.toArray(children).filter(isValidElement) as Array<
    NonNullable<FabGroupChild>
  >;

  const FabGroupItems = validChildren.map((child) => {
    return cloneElement(child, { shape: 'icon', position: 'none' });
  });

  return (
    <FABWrapper position={position} {...rest}>
      {trigger === 'none' ? (
        <FABGroup isTriggered={false}>{FabGroupItems}</FABGroup>
      ) : (
        <>
          <Fab
            shape='circle'
            position='none'
            type={type}
            iconName={iconName}
            onClick={() => trigger === 'click' && setIsOpen(!isOpen)}
            onMouseEnter={() => trigger === 'hover' && setIsOpen(!isOpen)}
            onMouseLeave={() => trigger === 'hover' && setIsOpen(!isOpen)}
          />
          <FABGroup isTriggered={true} isOpen={isOpen}>
            {FabGroupItems}
          </FABGroup>
        </>
      )}
    </FABWrapper>
  );
}

export default FabGroup;

const FABWrapper = styled.div<Pick<Props, 'position'>>`
  display: flex;
  position: ${({ position }) => position !== 'none' && 'fixed'};
  left: ${({ position }) => position === 'left' && '2em'};
  right: ${({ position }) => position === 'right' && '2em'};
  bottom: ${({ position }) => position !== 'none' && '2em'};
  z-index: 1;
`;

const FABGroup = styled.div<{ isTriggered: boolean; isOpen?: boolean }>`
  display: flex;
  background: rgba(0, 0, 0, ${({ isTriggered }) => (isTriggered ? 0.5 : 0.7)});
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  height: 50px;
  width: fit-content;
  padding: ${({ isTriggered }) => (isTriggered ? '0 30px 0 75px' : '0 30px')};
  justify-content: center;
  gap: 24px;
  margin-left: ${({ isTriggered }) => isTriggered && '-50px'};
  visibility: ${({ isOpen, isTriggered }) => isTriggered && (isOpen ? 'visible' : 'hidden')};
`;
