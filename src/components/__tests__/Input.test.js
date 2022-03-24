import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('listens for any valid keyboard input', () => {
  beforeEach(() => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('W key press fires forward movement', () => {
    const input = screen.getByTestId('controlZone');
    fireEvent.keyUp(input, { key: 'w', code: 87 });
    expect(screen.getByTestId('Yposition').innerHTML).toContain(1);
  });

  it('S key press fires backward movement', () => {
    const input = screen.getByTestId('controlZone');
    fireEvent.keyUp(input, { key: 's', code: 83 });
    expect(screen.getByTestId('Yposition').innerHTML).toContain(100);
  });

  it('A key press fires left turn', () => {
    const input = screen.getByTestId('controlZone');
    fireEvent.keyUp(input, { key: 'a', code: 65 });
    expect(screen.getByTestId('currentOrientation').innerHTML).toContain('W');
  });

  it('D key press fires right turn', () => {
    const input = screen.getByTestId('controlZone');
    fireEvent.keyUp(input, { key: 'd', code: 68 });
    expect(screen.getByTestId('currentOrientation').innerHTML).toContain('E');
  });
});
