import { render } from '@testing-library/react';

import FrontendCore from './frontend-core';

describe('FrontendCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendCore />);
    expect(baseElement).toBeTruthy();
  });
});
