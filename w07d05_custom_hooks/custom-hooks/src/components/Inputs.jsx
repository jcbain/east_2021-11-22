import { useState } from 'react';
import useInput from '../hooks/useInput';

const Inputs = () => {
  // const [ username, setUsername] = useState('');
  // const [ email, setEmail ] = useState('');
  // const [ password, setPassword] = useState('');
  const usernameInput = useInput();
  const emailInput = useInput();
  const passwordInput = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`the username is ${usernameInput.value}, email ${emailInput.value} and password ${passwordInput.value}`);
    usernameInput.clearValue();
  }

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br />
        <label>Email</label>
        <input 
          value={emailInput.value}
          onChange={emailInput.onChange}
        />
        <br />
        <label>Password</label>
        <input 
          value={passwordInput.value}
          onChange={passwordInput.onChange}
        />
        <br />
        <button type="submit">Register user</button>
      </form>

    </div>
  );
};

export default Inputs;