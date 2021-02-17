import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ObserverBlock = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: green;
  z-index: 1;
  text-align: center;
`;
const BelowBlock = styled.div`
  width: 100%;
  height: 200vh;
  position: relative;
  background-color: pink;
  padding-top: 200px;
`;

const Observer = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);
  return (
    <>
      <ObserverBlock>
        <h1>header</h1>
        {!onScreen && <button>Click me</button>}
      </ObserverBlock>
      <BelowBlock>
        <div>
          <button ref={ref}>click me instead</button>
        </div>
      </BelowBlock>
    </>
  );
};

export default Observer;

function useOnScreen(ref, rootMargin = '-100px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}
