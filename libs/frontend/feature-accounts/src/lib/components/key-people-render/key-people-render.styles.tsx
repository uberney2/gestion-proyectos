import styled from 'styled-components';

export const StyledKeyPeopleRender = styled.div`
  font-family: ${(props) => props.theme.font};
  font-size: 16px;
  line-height: 20px;
  p {
    color: ${(props) => props.theme.colors.blueSecondary};
    font-size: 14px;
    margin: 0;
  }
`;
