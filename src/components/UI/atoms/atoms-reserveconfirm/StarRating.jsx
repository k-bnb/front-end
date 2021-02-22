import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

const HiddenInput = styled.input`
  display: none;
`;

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;

        return (
          <label>
            <HiddenInput
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => setRating(starValue)}
            />
            <AiFillStar
              size={30}
              color={starValue <= (hover || rating) ? '#008489' : '#e4e5e9'}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
