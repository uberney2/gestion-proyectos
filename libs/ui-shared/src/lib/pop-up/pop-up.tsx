import { ReactNode } from 'react';
import Button from '../button/button';
import { ClosePopUp } from '../icon-svg';
import {
  StyledButtons,
  StyledIcon,
  StyledOverlay,
  StyledPopUpcontainer,
  StyledPopUpContent,
} from './pop-up.styles';

/* eslint-disable-next-line */
export interface PopUpProps {
  children?: ReactNode;
  isVisible: boolean;
  closePopUp: (value: boolean) => void;
  buttonMessage: string;
  onClick?: (something?: any) => void;
}

export function PopUp({
  children,
  isVisible,
  closePopUp,
  buttonMessage,
  onClick,
}: PopUpProps) {
  return (
    <>
      {isVisible && (
        <StyledOverlay>
          <StyledPopUpcontainer>
            <StyledIcon>
              <Button
                type="icon"
                text=""
                icon={<ClosePopUp width={23} />}
                onClick={() => closePopUp(!isVisible)}
              />
            </StyledIcon>
            <StyledPopUpContent>{children}</StyledPopUpContent>
            <StyledButtons>
              <Button
                variant="secondary"
                text="Return"
                onClick={() => closePopUp(!isVisible)}
              />
              <Button text={buttonMessage} onClick={onClick} />
            </StyledButtons>
          </StyledPopUpcontainer>
        </StyledOverlay>
      )}
    </>
  );
}

export default PopUp;
