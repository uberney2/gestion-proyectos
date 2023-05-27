import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer)`
  font-family: ${(props) => props.theme.font};
  width: 403px;
  top: 15vh;
  .Toastify__toast {
    border-radius: 6px;
    box-shadow: none;
  }
  .Toastify__toast-body {
    display: flex;
    align-items: start;
  }
  .Toastify__toast--default {
    background-color: ${(props) => props.theme.colors.statusBlue100};
    color: ${(props) => props.theme.colors.statusBlue800};
    stroke: ${(props) => props.theme.colors.statusBlue800};
    fill: ${(props) => props.theme.colors.statusBlue800};
  }
  .Toastify__toast--info {
    background-color: ${(props) => props.theme.colors.statusBlue100};
    color: ${(props) => props.theme.colors.statusBlue800};
    stroke: ${(props) => props.theme.colors.statusBlue800};
    fill: ${(props) => props.theme.colors.statusBlue800};
  }
  .Toastify__toast--success {
    background-color: ${(props) => props.theme.colors.statusGreen100};
    color: ${(props) => props.theme.colors.statusGreen800};
    stroke: ${(props) => props.theme.colors.statusGreen800};
    fill: ${(props) => props.theme.colors.statusGreen800};
  }
  .Toastify__toast--warning {
    background-color: ${(props) => props.theme.colors.statusYellow100};
    color: ${(props) => props.theme.colors.statusYellow800};
    stroke: ${(props) => props.theme.colors.statusYellow800};
    fill: ${(props) => props.theme.colors.statusYellow800};
  }
  .Toastify__toast--error {
    background-color: ${(props) => props.theme.colors.statusRed100};
    color: ${(props) => props.theme.colors.statusRed800};
    stroke: ${(props) => props.theme.colors.statusRed800};
    fill: ${(props) => props.theme.colors.statusRed800};
  }
`;

export const StyledToastContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;

  h3 {
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: ${(props) => props.theme.fontWeights.semibold};
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }
`;

export const StyledToastIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;
