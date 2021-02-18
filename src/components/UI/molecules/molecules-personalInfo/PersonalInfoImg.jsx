import React, { useRef } from 'react';
// import Input from '../../atoms/atoms-main/Input';

const PersonalInfoImg = ({ personInfoChange }) => {
  const infoimg = useRef();
  console.log(infoimg.current);
  return (
    <form method="post" encType="multipart/form-data">
      <input type="file" onChange={personInfoChange} name="imageUrl" multiple />
      <button>로그인</button>
    </form>
  );
};

export default PersonalInfoImg;
