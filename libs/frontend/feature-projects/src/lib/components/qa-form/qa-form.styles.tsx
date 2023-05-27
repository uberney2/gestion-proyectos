import styled from 'styled-components';

export const StyledQAForm = styled.form`
  filter: drop-shadow(0px 2px 10px rgba(50, 43, 43, 0.1));
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  margin: 24px 18px 40px;
  padding: 20px;

  label {
    font-size: 14px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 8px;
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.grayTertiary};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    font-style: italic;
    margin-top: -10px;
  }
`;

export const StyledContainerForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 40px;
`;

export const StyledQAButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 12px;
  margin: 10px 0 20px;
`;

export const StyledCheckbox = styled.div`
  display: flex;
  :checked {
    background-color: ${(props) => props.theme.colors.redPrimary};
  }
  p {
    margin-left: 8px;
  }

  input[type='checkbox'] {
    width: 14px;
    accent-color: ${(props) => props.theme.colors.redSecondary};
  }
`;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.fontSizes.base};

  label {
    margin-bottom: 12px;
  }
`;
