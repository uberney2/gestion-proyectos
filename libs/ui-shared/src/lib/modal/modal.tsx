import { ReactNode } from 'react';
import { Dock } from 'react-dock';
import Button from '../button/button';
import { CloseModal } from '../icon-svg';
import {
  StyledModalcontainer,
  StyledModalContent,
  StyledModalHead,
} from './modal.styles';

/* eslint-disable-next-line */
export interface ModalProps {
  children?: ReactNode;
  closeModal: (value: boolean) => void;
  isVisible: boolean;
  position: 'right' | 'left' | 'top' | 'bottom';
  title: string;
}

export function Modal({
  children,
  closeModal,
  isVisible,
  position = 'right',
  title,
}: ModalProps) {
  return (
    <Dock position={position} isVisible={isVisible}>
      <StyledModalcontainer>
        <StyledModalHead>
          {title}
          <Button
            type="icon"
            text=""
            icon={<CloseModal width={23} />}
            onClick={() => closeModal(!isVisible)}
          />
        </StyledModalHead>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalcontainer>
    </Dock>
  );
}

export default Modal;
