import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Check Functionality of CommandHistory component', () => {

    beforeEach(() => {
        const div = document.createElement('div');
        render(<App />, div);
    });

    it('renders empty list on load', () => {
        expect(screen.queryByTestId('logEntry')).toBeNull();
      });

    it('renders log entry on Forward command', () => {
        fireEvent.click(screen.queryByTestId('forward'));
        expect(screen.queryByTestId('logEntry')).toBeInTheDocument();
    });

});