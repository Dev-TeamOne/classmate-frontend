import { HTMLAttributes, useRef, Fragment, useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import useDropdownPosition from '../../hooks/useDropdownPosition';
import DropdownItem from './DropdownItem';
import DropdownTrigger from './DropdownTrigger';

export interface Props extends HTMLAttributes<HTMLUListElement> {
  selected?: Item;
  options: Array<Item>;
  onClickOption?: (clicked: Item) => void;
}

function Dropdown({ selected, options, onClickOption, style, children, ...rest }: Props) {
  const [trigger, setTrigger] = useState<boolean>(false);

  const ref = useRef<HTMLUListElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  const onClickTrigger = () => setTrigger(!trigger);

  const { coords, visible, setVisible } = useDropdownPosition(outerRef, ref);
  const { x, y } = coords;

  const onClickOptionItem = (opt: Item) => {
    onClickOption?.(opt);
    setVisible(false);
  };

  useEffect(() => setVisible(trigger), [trigger]);

  return (
    <div style={{ position: 'relative' }} ref={outerRef}>
      <DropdownTrigger onClickTrigger={onClickTrigger}>{children as ReactElement}</DropdownTrigger>
      <DropdownContainer
        ref={ref}
        style={{
          visibility: visible ? 'visible' : 'hidden',
          marginTop: y,
          marginLeft: x,
          ...style,
        }}
        {...rest}
      >
        {options.map((opt: Item, idx: number) => (
          <Fragment key={idx}>
            <DropdownItem
              key={idx}
              option={opt}
              onClick={() => onClickOptionItem(opt)}
              isSelected={selected && selected?.title === opt.title}
            />
            {opt.breakAfter && <BreakLine />}
          </Fragment>
        ))}
      </DropdownContainer>
    </div>
  );
}

Dropdown.Trigger = DropdownTrigger;

export default Dropdown;

const DropdownContainer = styled.ul`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.dropdown};
  padding: 3px;
  position: absolute;
  margin-top: 8px;
  z-index: 1;
  display: block;
  width: max-content;
`;

const BreakLine = styled.hr`
  margin: 0;
  border: 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey3};
  height: 1px;
`;
