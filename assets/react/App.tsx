import { StrictMode, useEffect, useState } from 'react';
import { render } from 'react-dom';
import People, { Person } from '../app';

export const App = () => {
  const [my, setState] = useState<Person>();
  useEffect(() => {
    const { name, age, gender } = new People('Hendra', 26, 'male').identity();
    setState((prevState) => ({ ...prevState, name, age, gender }));
  }, []);
  return (
    <>
      <h1>This is me:</h1>
      <ul>
        <li>My name is {my?.name}</li>
        <li>I am {my?.age} years old</li>
        <li>And my gender is {my?.gender}</li>
      </ul>
    </>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
