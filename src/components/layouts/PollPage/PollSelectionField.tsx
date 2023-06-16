import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { PollType, pollTypes } from './utils';
import PollTypeButton from './PollTypeButton';

export interface Props extends HTMLAttributes<HTMLDivElement> {}

function PollSelectionField({ ...rest }: Props) {
  return (
    <SelectionField {...rest}>
      <FieldTitle>Select new poll type</FieldTitle>
      <ButtonGroup>
        {pollTypes.map((item: PollType) => (
          <PollTypeButton>{item}</PollTypeButton>
        ))}
      </ButtonGroup>
    </SelectionField>
  );
}

export default PollSelectionField;

const SelectionField = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 20px;
  padding: 40px 50px;
`;

const FieldTitle = styled.h6`
  font-size: ${({ theme }) => theme.typo.medium};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  color: ${({ theme }) => theme.colors.titleActive};
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
`;
