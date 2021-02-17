import Button from '../../atoms/atoms-main/Button';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
const ArrowButton = React.forwardRef((props) => {
  console.log(props);

  return (
    <Button circle {...props}>
      <IoIosArrowForward />
    </Button>
  );
});

export default ArrowButton;
