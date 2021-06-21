import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('listens for any valid keyboard input', () => {

    beforeEach(() => {
        const div = document.createElement('div');
        render(<App />, div);
    });

    it('F key press fires forward movement', () => {
        const input = screen.getByTestId('controlZone');
        fireEvent.keyUp(input, {key: 'f', code: 70});
        expect(screen.getByTestId('Yposition').innerHTML).toContain(1);
    });

    it('B key press fires backward movement', () => {
        const input = screen.getByTestId('controlZone');
        fireEvent.keyUp(input, {key: 'b', code: 66});
        expect(screen.getByTestId('Yposition').innerHTML).toContain(100);
    });

    it('L key press fires left turn', () => {
        const input = screen.getByTestId('controlZone');
        fireEvent.keyUp(input, {key: 'l', code: 76});
        expect(screen.getByTestId('currentOrientation').innerHTML).toContain('W');
    });

    it('R key press fires right turn', () => {
        const input = screen.getByTestId('controlZone');
        fireEvent.keyUp(input, {key: 'r', code: 82});
        expect(screen.getByTestId('currentOrientation').innerHTML).toContain('E');
    });

});
