import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

// import the library that we want to fake (mock)
import axios from 'axios';

// we need to tell jest that we are faking this library
jest.mock('axios');

// create some fake data
const data = [
  {id: 1, name: "James", points: 5},
  {id: 2, name: "Jennifer", points: 3},
  {id: 3, name: "Pippa", points: 2},
];

test('can display results from an API call', () => {
  
  // we need to tell jest to respond to any axios request with the fake data
  axios.get.mockResolvedValue({ data: data });

  // we will render the <Result /> component
  const { getByTestId, findByText, container, debug } = render(<Result status="waiting"/>);
  // console.log(prettyDOM(container))
  debug();
  // find the high score button
  const highScoreButton = getByTestId("high-scores");
  
  // click the high score button 
  fireEvent.click(highScoreButton);

  // look for our fake data in the dom
  return findByText("James", { exact: false })
    .then(() => {
      debug();
    })
})


test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});