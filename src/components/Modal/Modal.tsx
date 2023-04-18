import {
  Dispatch,
  HTMLAttributes,
  ForwardedRef,
  ReactElement,
  SetStateAction,
  forwardRef,
} from 'react';
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
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  onSubmit?: () => void;
}

function Modal(
  {
    open,
    title,
    children,
    bottomAddon,
    withCloseButton = true,
    leftButtonLabel = 'Cancel',
    rightButtonLabel = 'Create',
    setIsOpen,
    onSubmit,
    ...rest
  }: Props,
  ref: ForwardedRef<any>,
) {
  const closeModal = () => setIsOpen?.(false);

  const submitModal = () => {
    onSubmit?.();
    closeModal();
  };

  return open ? (
    <ModalBackDrop>
      <ModalContainer ref={ref} {...rest}>
        <ModalHeader>
          <span>{title}</span>
          {withCloseButton && (
            <IconButton name='close' size={20} color={'grey1'} onClick={closeModal} />
          )}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          {bottomAddon ? bottomAddon : <div></div>}
          <FooterButtonSet>
            <Button variant={'outlined'} onClick={closeModal}>
              {leftButtonLabel}
            </Button>
            <Button variant={'contained'} onClick={submitModal}>
              {rightButtonLabel}
            </Button>
          </FooterButtonSet>
        </ModalFooter>
      </ModalContainer>
    </ModalBackDrop>
  ) : (
    <></>
  );
}

export default forwardRef(Modal);

const ModalBackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(96, 96, 96, 0.7);

  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
