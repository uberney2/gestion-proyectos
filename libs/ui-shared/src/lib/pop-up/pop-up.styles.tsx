import styled from 'styled-components';

export const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.font};
`;

export const StyledPopUpcontainer = styled.div`
  width: 460px;
  max-height: 300px;
  padding: 40px;
  background: ${(props) => props.theme.colors.white};
  position: relative;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 12px;
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 50px;
`;

export const StyledPopUpContent = styled.div`
  text-align: center;
  padding-bottom: 50px;
  font-size: 14px;
`;
