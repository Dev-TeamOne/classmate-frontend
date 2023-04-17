import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ResetButton } from '../../styles/common';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: Item;
  isSelected?: boolean;
}

function DropdownItem({ isSelected, option, ...rest }: Props) {
  const { title, emphasis } = option;
  return (
    <DropdownItemList>
      <ItemButton isSelected={isSelected} {...rest}>
        <span style={{ color: emphasis ? 'red' : 'inherit' }}>{title}</span>
      </ItemButton>
    </DropdownItemList>
  );
}

export default DropdownItem;

const DropdownItemList = styled.li`
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.titleActive};
  list-style: none;
`;

type ItemButtonProps = Pick<Props, 'isSelected'>;

const ItemButton = styled(ResetButton)<ItemButtonProps>`
  padding: 12px 0px;
  border-radius: 5px;
  background-color: ${(props) => props.isSelected && props.theme.colors.primary4};

  span {
    padding: 0 8px;
  }

  :hover {
    background-color: ${(props) => !props.isSelected && '#f5f5f5'};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.primary4};
  }
`;
