import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  display: flex;
  svg {
    position: relative;
    top: 11px;
    right: 14px;
  }

  input {
    font-family: ${(props) => props.theme.font};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    font-size: ${(props) => props.theme.fontSizes.sm};
    background-color: ${(props) => props.theme.colors.bgPrimary};
    width: 103%;
    padding: 0px 10px;
    border: 0;
    border-radius: 0px;
    border-bottom: 1px solid ${(props) => props.theme.colors.bgSecondary};
    height: 40px;
  }

  .react-datepicker {
    background-color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    border-radius: 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 12px;
    margin: 0px;
  }

  .react-datepicker__header {
    background-color: ${(props) => props.theme.colors.white};
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .react-datepicker__week {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    width: 281px;
    height: 36px;
  }

  .react-datepicker__day {
    width: 40px;
    height: 32px;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .react-datepicker__day-names {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 0px 4px;
    margin-top: 12px;
    width: 100%;
    height: 20px;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.black};
  }

  .react-datepicker__day--today {
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }

  .react-datepicker__navigation-icon::before {
    border-color: black;
    border-width: 2px 2px 0 0;
  }

  .react-datepicker__day-names {
    margin-bottom: 0px;
  }

  .react-datepicker__current-month {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }

  .react-datepicker__day--outside-month {
    color: ${(props) => props.theme.colors.grayTertiary};
  }

  .react-datepicker__day--selected {
    border-radius: 0;
    background-color: ${(props) => props.theme.colors.redPrimary};
    color: ${(props) => props.theme.colors.white};
  }

  .react-datepicker__day:hover {
    border-radius: 0;
    color: ${(props) => props.theme.colors.redPrimary};
    border: 1px solid ${(props) => props.theme.colors.redPrimary};
    background-color: ${(props) => props.theme.colors.white};
    flex-grow: 0;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation--next {
    right: 12px;
    top: 14px;
  }

  .react-datepicker__navigation--previous {
    left: 12px;
    top: 14px;
  }
`;
