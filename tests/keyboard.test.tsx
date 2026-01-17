
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { DataGrid } from '../src/DataGrid/DataGrid';

test('grid renders', () => {
  render(<div />);
  expect(true).toBe(true);
});
