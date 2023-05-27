import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { PopUp, PopUpProps } from './pop-up';

describe('PopUp', () => {
  const renderPopUp = ({
    isVisible = true,
    children = <div>content</div>,
    closePopUp = jest.fn(),
  }: Partial<PopUpProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <PopUp
          isVisible={isVisible}
          children={children}
          closePopUp={closePopUp}
          buttonMessage="Cancel"
        />
      </ThemeProvider>
    );

  it('should render successfully', () => {
    const { container } = renderPopUp({});
    expect(container).toBeTruthy();
  });
});
