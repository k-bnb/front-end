import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MIN_TEXTAREA_HEIGHT = 1;

const StyledTextarea = styled.textarea`
  resize: none;
  min-height: ${MIN_TEXTAREA_HEIGHT};
  width: 100%;
  outline: none;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #ddd;
  // IE and Edge
  -ms-overflow-style: none;

  // Firefox
  scrollbar-width: none;

  // Chrome, Safari, Opera
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AdjustHeightTeatarea = () => {
  const textareaRef = useRef(null);
  const [value, setValue] = useState('');

  const change = (e) => {
    setValue(e.target.value);
  };

  useLayoutEffect(() => {
    textareaRef.current.style.height = 'inherit';
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT,
    )}px`;
  }, [value]);

  return (
    <StyledTextarea
      onChange={change}
      ref={textareaRef}
      value={value}
      rows="1"
      spellCheck="false"
    ></StyledTextarea>
  );
};

export default AdjustHeightTeatarea;
