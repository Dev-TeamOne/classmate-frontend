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

type FabGroupChild = ReactElement<ComponentProps<typeof Fab>> | null;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: FabGroupChild | FabGroupChild[];
  trigger?: ButtonTrigger;
  position?: FabPosition;
}

function FabGroup({ children, trigger = 'none', position = 'left', ...rest }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const validChildren = Children.toArray(children).filter(isValidElement) as Array<
    NonNullable<FabGroupChild>
  >;

  const FabGroupItems = validChildren.map((child) => {
    return cloneElement(child, { type: 'icon' });
  });

  return (
    <FABWrapper position={position}>
      {trigger === 'none' ? (
        <FABGroup isTriggered={false} {...rest}>
          {FabGroupItems}
        </FABGroup>
      ) : (
        <>
          <Fab
            type='circle'
            onClick={() => trigger === 'click' && setIsOpen(!isOpen)}
            onMouseEnter={() => trigger === 'hover' && setIsOpen(!isOpen)}
            onMouseLeave={() => trigger === 'hover' && setIsOpen(!isOpen)}
          />
          <FABGroup isTriggered={true} isOpen={isOpen} {...rest}>
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
  position: fixed;
  left: ${({ position }) => position === 'left' && '2em'};
  right: ${({ position }) => position === 'right' && '2em'};
  bottom: 2em;
`;

const FABGroup = styled.div<{ isTriggered: boolean; isOpen?: boolean }>`
  display: flex;
  background: rgba(0, 0, 0, ${({ isTriggered }) => (isTriggered ? 0.5 : 0.7)});
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  height: 55px;
  width: fit-content;
  padding: ${({ isTriggered }) => (isTriggered ? '0 30px 0 75px' : '0 30px')};
  justify-content: center;
  gap: 24px;
  margin-left: ${({ isTriggered }) => isTriggered && '-55px'};
  visibility: ${({ isOpen, isTriggered }) => isTriggered && (isOpen ? 'visible' : 'hidden')};
`;
