import styled from 'styled-components';
import { StyledStatusTitle } from '../dimension-status-form/dimension-status-form.styles';

export const StyledGutForm = styled.form`
  filter: drop-shadow(0px 2px 10px rgba(50, 43, 43, 0.1));
  background-color: ${(props) => props.theme.colors.white};
  height: 700px;
  border-radius: 5px;
  margin: 24px 18px 40px;
  padding: 20px;

  label {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 8px;
  }

  ${StyledStatusTitle} {
    padding: 0 0 100px;
    position: absolute;
    top: 20px;
  }
`;

export const StyledGutButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const StyledGutInfo = styled.p`
  margin: 35px 0 40px;
  font-size: 14px;
  width: 32%;
  padding: 0;
`;
