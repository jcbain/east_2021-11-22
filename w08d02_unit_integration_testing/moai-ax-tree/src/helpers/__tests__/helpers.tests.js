import { announceResult, robotResponse } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('tests for choosing and option for the robot', () => {

  test('when cheating is true, returns the winnig option', () => {

    // playerSelection
    // cheating
    const isCheating = true;
    const playerSelection = "Axe";
    const actual = robotResponse(isCheating, playerSelection);
    const expected = "Moai";
    
    expect(actual).toBe(expected);

  });

  test('when cheating is false, returns a valid option', () => {
    const isCheating = false;
    const playerSelection = "Axe";
    const actual = robotResponse(isCheating, playerSelection);

    const options = ['Moai', 'Axe', 'Tree'];
    expect(options).toContain(actual);
  });

})