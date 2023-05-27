import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { Header, NavBarProps } from './navbar';

describe('Nav Bar Testing', () => {
  const renderNavBar = ({
    user = { name: '', avatar: '' },
    tool = '',
    logo = '',
    items = [{ itemName: '', url: '' }],
    logoutClick = jest.fn(),
  }: Partial<NavBarProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            user={user}
            tool={tool}
            logo={logo}
            items={items}
            logoutClick={logoutClick}
            children
          />
        </BrowserRouter>
      </ThemeProvider>
    );

  it('should render successfully', () => {
    expect(renderNavBar).toBeTruthy();
  });

  it('should display user name', () => {
    const { container } = renderNavBar({ user: { name: 'Nico', avatar: '' } });
    expect(container).toHaveTextContent('Nico');
  });

  it('should display Welcome Message', () => {
    const { container } = renderNavBar({});
    expect(container).toHaveTextContent('Welcome');
  });

  it('should display tool Name', () => {
    const { container } = renderNavBar({ tool: 'Lighthouse' });
    expect(container).toHaveTextContent('Lighthouse');
  });

  it('should display Items', () => {
    const { container } = renderNavBar({
      items: [
        {
          itemName: 'Accounts',
          url: 'Dashboard/Accounts',
        },
        {
          itemName: 'Projects',
          url: 'Dashboard/Projects',
        },
      ],
    });
    expect(container).toHaveTextContent('Accounts');
    expect(container).toHaveTextContent('Projects');
  });

  it('should trigger onClick when logout button is clicked', () => {
    const logoutClick = jest.fn();
    const { getByRole } = renderNavBar({ logoutClick });

    getByRole('button').click();
    expect(logoutClick).toHaveBeenCalled();
  });
});
