import { useState } from 'react';
import styled from 'styled-components';
import Values from 'values.js';

import ColorInput from './components/ColorInput';
import ColorList from './components/ColorList';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Main = () => {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#FF7777').all(10));

  return (
    <Wrapper>
      <Title>Random Color Generator</Title>
      <ColorInput
        color={color}
        setColor={setColor}
        list={list}
        setList={setList}
      />
      <ColorList list={list} />
    </Wrapper>
  );
};

export default Main;
