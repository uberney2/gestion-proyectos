import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Horizontal } from './navbar.styles';

export interface ItemProps {
  children: React.ReactNode;
  url: string;
}

export function NavbarItem({ children, url }: ItemProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const redirectHandler = () => {
    navigate(url);
  };

  return (
    <Horizontal
      onClick={redirectHandler}
      className={pathname.includes(url) ? 'active' : ''}
    >
      {children}
    </Horizontal>
  );
}
