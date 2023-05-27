import styled from 'styled-components';

export const StyledPursuitsForm = styled.form`
  filter: drop-shadow(0px 2px 10px rgba(50, 43, 43, 0.1));
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  margin: 24px 18px 40px;
  padding: 0 20px 20px;

  label {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 8px;

    &:nth-child(n + 7) {
      justify-content: space-between;
    }
  }
`;

export const StyledPursuitsButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 12px;
  margin-top: 20px;
`;

export const StyledContainerForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 40px;
`;

export const StyledStar = styled.span`
  color: ${(props) => props.theme.colors.redSecondary};
  display: contents;
  padding-left: 1px;
`;

export const StyledPursuitsSubTitle = styled.h3`
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 100px 0 40px;
  &:first-child {
    padding-top: 12px;
  }
`;

export const StyledItemsForm = styled.div`
  display: flex;
  column-gap: 24px;
`;
