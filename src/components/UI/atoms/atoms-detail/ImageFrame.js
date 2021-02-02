import React from 'react';
import styled from 'styled-components';

const AccommodationPictures = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 50%);
  grid-gap: 8px;
  max-width: 1128px;
  width: 100%;
  max-height: calc(60vh - 64px);
  min-height: 300px;
  margin: 0 auto;
  border-radius: 12px;
  overflow-y: hidden;
  margin-top: 24px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }

  .one {
    grid-column: 1/3;
    grid-row: 1/3;
    background: pink;
  }
  .two {
    grid-column: 3/4;
    grid-row: 1/2;
    background: skyblue;
  }
  .three {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  .four {
    grid-column: 4/5;
    grid-row: 1/2;
  }
  .five {
    grid-column: 4/5;
    grid-row: 2/3;
    background: lightgreen;
  }
`;

const ImageFrame = () => (
  <>
    <AccommodationPictures>
      <div className="one">
        <img
          src="https://a0.muscache.com/im/pictures/144d8628-1123-4cd4-af93-dd81f47455cd.jpg?im_w=960"
          alt=""
        />
      </div>
      <div className="two">
        <img
          src="https://a0.muscache.com/im/pictures/9471ef27-e408-4bc6-82b3-73d76bc7c693.jpg?im_w=1200"
          alt=""
        />{' '}
      </div>
      <div className="three">
        <img
          src="https://a0.muscache.com/im/pictures/4f91a3fc-f44e-4c07-a6d5-e653a18fcb5e.jpg?im_w=1200
"
          alt=""
        />{' '}
      </div>
      <div className="four">
        <img
          src="https://a0.muscache.com/im/pictures/ff5353d8-7527-4671-bda3-eadb8a8a327c.jpg?im_w=1200"
          alt=""
        />{' '}
      </div>
      <div className="five">
        <img
          src="https://a0.muscache.com/im/pictures/b23d7c84-c948-4557-b141-4f36d738d2fa.jpg?im_w=1200"
          alt=""
        />{' '}
      </div>
    </AccommodationPictures>
  </>
);

export default ImageFrame;