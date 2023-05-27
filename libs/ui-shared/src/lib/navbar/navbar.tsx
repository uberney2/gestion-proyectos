import { NavbarBrand } from './navbar-brand';
import { NavbarItem } from './navbar-item';
import { ExitIcon } from '../icon-svg';
import { NavbarLogout } from './navbar-logout';
import {
  NavBar,
  NavbarNavigation,
  Diagonal,
  User,
  LogoutButton,
} from './navbar.styles';

export interface NavBarProps {
  user: { name: string; avatar: React.ReactNode };
  tool: string;
  logo: React.ReactNode;
  items: { itemName: string; url: string }[];
  logoutClick?: () => void;
  children: React.ReactNode;
}

export function Header({ user, tool, logo, items, logoutClick }: NavBarProps) {
  return (
    <NavBar>
      <NavbarNavigation>
        <NavbarBrand>
          {logo}
          <Diagonal />
          <p> {tool} </p>
        </NavbarBrand>
        {items.map((item) => (
          <NavbarItem key={item.itemName} url={item.url}>
            {' '}
            {item.itemName}{' '}
          </NavbarItem>
        ))}
      </NavbarNavigation>

      <NavbarLogout>
        <User>
          {user.avatar}
          <p>
            {' '}
            Welcome, <br /> {user.name}{' '}
          </p>
        </User>
        <LogoutButton onClick={logoutClick}>
          <ExitIcon height={28} />
        </LogoutButton>
      </NavbarLogout>
    </NavBar>
  );
}
