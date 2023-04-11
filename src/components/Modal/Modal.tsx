import { HTMLAttributes, ReactElement, useState } from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton';
import Button from '../Button';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  withCloseButton?: boolean;
  bottomAddon?: ReactElement;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
}

function Modal({
  open,
  title,
  children,
  bottomAddon,
  withCloseButton = true,
  leftButtonLabel = 'Cancel',
  rightButtonLabel = 'Create',
  ...rest
}: Props) {
  return open ? (
    <ModalBackDrop>
      <ModalContainer {...rest}>
        <ModalHeader>
          <span>{title}</span>
          {withCloseButton && <IconButton name='close' size={20} color={'grey1'} />}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          {bottomAddon ? bottomAddon : <div></div>}
          <FooterButtonSet>
            <Button variant={'outlined'}>{leftButtonLabel}</Button>
            <Button variant={'contained'}>{rightButtonLabel}</Button>
          </FooterButtonSet>
        </ModalFooter>
      </ModalContainer>
    </ModalBackDrop>
  ) : (
    <></>
  );
}

export default Modal;

const ModalBackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(96, 96, 96, 0.7);
`;

const ModalContainer = styled.div`
  padding: 50px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.dropdown};
  border-radius: 20px;
  min-width: 200px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: ${({ theme }) => theme.typo.large};
    font-weight: ${({ theme }) => theme.fontWeight.title};
    color: ${({ theme }) => theme.colors.titleActive};
  }
`;

const ModalBody = styled.div`
  font-size: ${({ theme }) => theme.typo.large};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  color: ${({ theme }) => theme.colors.grey1};
  padding: 30px 0;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterButtonSet = styled.div`
  display: flex;
  gap: 15px;
`;
