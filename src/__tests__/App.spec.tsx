import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('<App />', () => {
  it('App component가 렌더링 되는지 확인한다', () => {
    render(<App />);
    expect(screen.getByTestId('welcome-cmpt')).toHaveTextContent('Welcome');
  });
});
