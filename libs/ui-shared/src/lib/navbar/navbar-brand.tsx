import React from 'react';
import { Slider } from './navbar.styles';

export interface BrandProps {
  children: React.ReactNode;
}

export function NavbarBrand({ children }: BrandProps) {
  return <Slider>{children}</Slider>;
}
