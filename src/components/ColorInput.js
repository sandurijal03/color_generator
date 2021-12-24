import { useState } from 'react';
import styled from 'styled-components';
import Values from 'values.js';

const Wrapper = styled.form``;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border: none;
  border-bottom: 2px solid;
  font-size: 1.2rem;
  outline: none;
  border-radius: 10px;
  color: purple;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  border: 0;
  margin-left: 10px;
  border-radius: 10px;
  background-color: purple;
  color: white;
`;

const ColorInput = ({ color, setColor, list, setList }) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Wrapper>
      <Input
        type='text'
        value={color}
        onChange={handleChange}
        placeholder='type color'
        className={`${error ? 'error' : null}`}
      />
      <Button onClick={handleSubmit}>Generate</Button>
    </Wrapper>
  );
};

export default ColorInput;
