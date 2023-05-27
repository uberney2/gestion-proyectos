import styled from 'styled-components';

export const StyledAccountsForm = styled.form`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  filter: drop-shadow(0px 2px 10px rgba(50, 43, 43, 0.1));
  margin: 24px 18px 0;
  min-height: 482px;
  padding-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    font-size: 14px;
    font-weight: ${(props) => props.theme.fontWeights.normal};
    width: 100%;
  }
`;
export const StyledAccountsButtons = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  gap: 12px;
  right: 20px;
`;
export const StyledItemsForm = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0;
  gap: 24px;
`;

export const StyledStar = styled.span`
  color: ${(props) => props.theme.colors.redSecondary};
  display: contents;
  padding-left: 1px;
`;
