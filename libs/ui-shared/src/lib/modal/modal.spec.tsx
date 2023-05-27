import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { Modal, ModalProps } from './modal';

describe('Modal', () => {
  const renderModal = ({
    position = 'right',
    isVisible = true,
    title = 'Modal',
    children = <div>content</div>,
    closeModal = jest.fn(),
  }: Partial<ModalProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <Modal
          position={position}
          isVisible={isVisible}
          title={title}
          children={children}
          closeModal={closeModal}
        />
      </ThemeProvider>
    );

  it('should render successfully', () => {
    const { container } = renderModal({});
    expect(container).toBeTruthy();
  });
});
