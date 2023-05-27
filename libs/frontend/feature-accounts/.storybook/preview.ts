import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { theme } from '@delia/ui-shared';

const themes = [theme];
addDecorator(withThemesProvider(themes));
