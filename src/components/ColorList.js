import React from 'react';
import styled from 'styled-components';
import SingleColor from './SingleColor';

const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100vh;

  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
`;

const ColorList = ({ list }) => {
  return (
    <Wrapper>
      {list.map((color, index) => {
        return (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        );
      })}
    </Wrapper>
  );
};

export default ColorList;
