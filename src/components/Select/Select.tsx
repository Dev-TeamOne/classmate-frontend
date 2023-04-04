import { HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Dropdown from '../Dropdown/Dropdown';
import { Item } from '../Dropdown/types';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  options: Array<Item>;
  defaultOption?: Item;
}

function Select({ options, defaultOption = options[0], width = 800, ...rest }: Props) {
  const [selected, setSelected] = useState<Item>(defaultOption);

  const onClickOption = (clicked: Item) => {
    if (clicked.title !== selected.title) setSelected(clicked);
  };

  return (
    <div style={{ width: width && `${width}px` }}>
      <Dropdown
        selected={selected}
        options={options}
        onClickOption={onClickOption}
        style={{ width: width && `${width - 10}px` }}
      >
        <SelectBox {...rest}>
          <Selector>{selected.title}</Selector>
          <Icon name='arrow-down' size={12} color={'grey2'} />
        </SelectBox>
      </Dropdown>
    </div>
  );
}

export default Select;

const SelectBox = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  box-shadow: ${({ theme }) => theme.shadow.weak};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;

  :hover,
  :focus,
  :active {
    outline: none !important;
    border-color: ${({ theme }) => theme.colors.primary1};
    box-shadow: 0 0 2.5px ${({ theme }) => theme.colors.primary1};
  }
`;

const Selector = styled.span`
  color: ${({ theme }) => theme.shadow.titleActive};
  font-size: ${({ theme }) => theme.typo.large};
  font-weight: ${({ theme }) => theme.fontWeight.text};
`;
