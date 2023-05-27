import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { theme } from '../src/lib/theme/theme';

const themes = [theme];
addDecorator(withThemesProvider(themes));
