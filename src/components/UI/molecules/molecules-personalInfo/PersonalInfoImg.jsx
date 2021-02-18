import React, { useRef } from 'react';
import axios from '../../../../../node_modules/axios/index';
import Input from '../../atoms/atoms-main/Input';
import { nanoid } from 'nanoid';
const PersonalInfoImg = ({ personInfoChange }) => {
  const token = localStorage.getItem('token');
  const infoimg = useRef();
  const Submite = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('imageUrl', infoimg.current);

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `multipart/form-data;charset=UTF-8; boundary=${nanoid()}`,
      },
    };
    console.log(infoimg.current.files[0]);

    const obj = {};

    const body = formData;
    const res = await axios.post(
      'http://3.34.198.174:8080/user/update/photo',
      body,
      headers,
    );
    console.log(res);
  };
  console.log(infoimg.current);
  return (
    <form method="post" onSubmit={Submite} encType="multipart/form-data">
      <input
        type="file"
        ref={infoimg}
        onChange={personInfoChange}
        name="imageUrl"
        multiple
      />
      <button>로그인</button>
    </form>
  );
};

export default PersonalInfoImg;
