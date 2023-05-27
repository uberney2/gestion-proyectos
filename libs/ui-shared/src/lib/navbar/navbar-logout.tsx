import { ButtonContainer } from './navbar.styles';

export interface LogoutProps {
  children: React.ReactNode;
}

export function NavbarLogout({ children }: LogoutProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
