import styled from 'styled-components';

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 8px;
`;

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  cursor: pointer;
  width: 100%;
  padding: 0;
`;
