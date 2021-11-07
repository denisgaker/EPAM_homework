/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';
import '@testing-library/jest-dom';
import APP_NAME from '../../app/app.constants';

describe('Heading', () => {
  it('Render Heading component', () => {
    render(<Heading name={APP_NAME} />);
    screen.debug();
    expect(screen.getByText(/HETflix/i)).toBeInTheDocument();
  });
});
