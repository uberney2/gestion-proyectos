import styled from 'styled-components';

export const StyledPlanForm = styled.form`
  filter: drop-shadow(0px 2px 10px rgba(50, 43, 43, 0.1));
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  margin: 24px 18px 40px;
  padding: 20px;

  label {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    row-gap: 8px;
  }
`;

export const StyledPlanButtons = styled.div`
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
