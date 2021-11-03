/**
 * @jest-environment jsdom
 */
import React from 'react';
import Heading from './Heading';
import { Datats } from '../../Data';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const NameApp = Datats.main.nameApp;

describe('Heading', () => {
  it('Render Heading component', () => {
    render(<Heading name={NameApp} />);
    screen.debug();
    expect(screen.getByText(/HETflix/i)).toBeInTheDocument();
  });
});
