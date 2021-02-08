import React, { useRef, useEffect } from 'react';

export const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const clickOutSide = (e) => {
      if (domNode.current && domNode.current.contains(e.target)) return;
      console.log(e.target);
      handler();
    };

    window.addEventListener('click', clickOutSide);

    return () => {
      window.removeEventListener('click', clickOutSide);
    };
  }, []);
  return domNode;
};
