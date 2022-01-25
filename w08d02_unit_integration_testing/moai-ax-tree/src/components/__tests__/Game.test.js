import Game from '../Game';
import { render, fireEvent } from '@testing-library/react';
import { robotResponse } from '../../helpers/helpers';

describe('tests for the Game component', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    // first render Game component
    const { getByTestId } = render(<Game />);

    // we need to find the robot head icon (somehow)
    const robotHead = getByTestId('robot');

    // we need click (virtual) on the robot head icon
    fireEvent.click(robotHead);

    // determine that the cheating state is true
    expect(robotHead).toHaveClass('cheating');

    // we need to click the robot head again
    fireEvent.click(robotHead);

    // determine that the cheating is now false
    expect(robotHead).not.toHaveClass('cheating');
  })

})