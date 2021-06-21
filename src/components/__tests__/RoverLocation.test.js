import { render, screen  } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';

beforeEach(() => {
    const div = document.createElement('div');
    render(<App />, div);
});

describe('Standard Protocol', () => {

    it('always lands at 0 0 N', () => {
        expect(screen.getByTestId('Yposition').innerHTML).toContain(0);
        expect(screen.getByTestId('Xposition').innerHTML).toContain(0);
        expect(screen.getByTestId('currentOrientation').innerHTML).toContain('N');
      });

    it('always changes it\'s position incrementally by 1', () => {
      for (let i = 0; i < 5; i++) {
          userEvent.click(screen.getByTestId('forward'));
      }
      expect(screen.getByTestId('Yposition').innerHTML).toContain(5);

      userEvent.click(screen.getByTestId('backward'));
      expect(screen.getByTestId('Yposition').innerHTML).toContain(4);

      userEvent.click(screen.getByTestId('right'));
      for (let i = 0; i < 4; i++) {
          userEvent.click(screen.getByTestId('forward'));
      }
      expect(screen.getByTestId('Yposition').innerHTML).toContain(4);

      userEvent.click(screen.getByTestId('backward'));
      expect(screen.getByTestId('Xposition').innerHTML).toContain(3);
    });  
});

describe('Turning', () => {

    it('Left turns the rover 90 degrees left', () => {
        userEvent.click(screen.getByTestId('left'));
        expect(screen.getByTestId('currentOrientation').innerHTML).toContain('W');
    });

    it('Right turns the rover 90 degrees right', () => {
        userEvent.click(screen.getByTestId('right'));
        expect(screen.getByTestId('currentOrientation').innerHTML).toContain('E');
    });
});

describe('Moving Forward -', () => {

      it('- while facing North increases Y position by 1', () => {
        userEvent.click(screen.getByTestId('forward'));
        expect(screen.getByTestId('Yposition').innerHTML).toContain(1);
      });

      it('- while facing South decreases Y position by 1', () => {
        userEvent.dblClick(screen.getByTestId('left'));
        userEvent.click(screen.getByTestId('forward'));

        expect(screen.getByTestId('Yposition').innerHTML).toContain(100);
      });

      it('- while facing East increases X position by 1', () => {
        userEvent.click(screen.getByTestId('right'));
        userEvent.click(screen.getByTestId('forward'));
        expect(screen.getByTestId('Xposition').innerHTML).toContain(1);
      });

      it('- while facing West decreases X position by 1', () => {
        userEvent.click(screen.getByTestId('left'));
        userEvent.click(screen.getByTestId('forward'));
        expect(screen.getByTestId('Xposition').innerHTML).toContain(100);
      });

});

describe('Moving Backward -', () => {

      it('- while facing North decreases Y position by 1', () => {
        userEvent.click(screen.getByTestId('backward'));
        expect(screen.getByTestId('Yposition').innerHTML).toContain(100);
      });

      it('- while facing South increases Y position by 1', () => {
        userEvent.dblClick(screen.getByTestId('left'));
        userEvent.click(screen.getByTestId('backward'));

        expect(screen.getByTestId('Yposition').innerHTML).toContain(1);
      });

      it('- while facing East decreases X position by 1', () => {
        userEvent.click(screen.getByTestId('right'));
        userEvent.click(screen.getByTestId('backward'));
        expect(screen.getByTestId('Xposition').innerHTML).toContain(100);
      });

      it('- while facing West increases X position by 1', () => {
        userEvent.click(screen.getByTestId('left'));
        userEvent.click(screen.getByTestId('backward'));
        expect(screen.getByTestId('Xposition').innerHTML).toContain(1);
      });

});

describe('Grid Edge Traversion', () => { 

    it('can switch between 0 and 100 in both direction on Y scale', () => {
        userEvent.click(screen.getByTestId('backward'));
        expect(screen.getByTestId('Yposition').innerHTML).toContain(100);
        userEvent.click(screen.getByTestId('forward'));
        expect(screen.getByTestId('Yposition').innerHTML).toContain(0);
    });

    it('can switch between 0 and 100 in both direction on X scale', () => {
        userEvent.click(screen.getByTestId('left'));

        userEvent.click(screen.getByTestId('forward'));
        expect(screen.getByTestId('Xposition').innerHTML).toContain(100);
        userEvent.click(screen.getByTestId('backward'));
        expect(screen.getByTestId('Xposition').innerHTML).toContain(0);
    });
});