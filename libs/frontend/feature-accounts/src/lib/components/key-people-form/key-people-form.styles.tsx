import styled from 'styled-components';

export const StyledAccountsForm = styled.form`
  background-color: ${(props) => props.theme.colors.bgForm};
  margin: 24px 18px 0;
  min-height: 482px;
  padding: 24px 20px 0;

  label {
    display: flex;
    font-size: 14px;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    padding: 26px 0 12px;
  }
`;
export const StyledAccountsButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  position: relative;
  top: 220px;
  button {
    :last-child {
      width: 190px;
    }
  }
`;
export const StyledStar = styled.span`
  color: ${(props) => props.theme.colors.redSecondary};
  padding-left: 1px;
`;
