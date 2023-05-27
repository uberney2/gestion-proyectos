import styled from 'styled-components';

export const Flex = `display: flex; flex-direction: row; align-items: center`;

export const NavBar = styled.header`
  display: flex;
  height: 68px;
  background-color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.font};
  font-size: 11px;
  justify-content: space-between;
`;

export const NavbarNavigation = styled.div`
  ${Flex};
  margin-left: 18px;
  padding: 0px;
`;

export const Slider = styled.div`
  ${Flex};
  margin-right: 100px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

export const Diagonal = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.redPrimary};
  width: 40%;
  transform: rotate(-75deg);
`;

export const Horizontal = styled.div`
  ${Flex};
  color: ${(props) => props.theme.colors.grayOpacity};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-right: 26px;
  margin-top: 4px;
  padding-bottom: 4px;
  &:hover {
    cursor: pointer;
  }

  &.active {
    color: ${(props) => props.theme.colors.white};
    border-bottom: solid 2px ${(props) => props.theme.colors.redSecondary};
  }
`;

export const User = styled.div`
  ${Flex};
  padding: 0px;
  gap: 11px;
  color: ${(props) => props.theme.colors.white};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: center;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  align-items: center;
  line-height: 14px;
  padding: 0px;
  gap: 35px;
`;

export const LogoutButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  width: 68px;
  height: 68px;
  background: ${(props) => props.theme.colors.grayPrimary};
  &:hover {
    cursor: pointer;
  }
`;
