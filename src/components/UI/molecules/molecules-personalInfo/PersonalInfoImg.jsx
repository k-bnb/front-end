import React, { useRef, useState } from 'react';
import axios from '../../../../../node_modules/axios/index';
import Input from '../../atoms/atoms-main/Input';
import { nanoid } from 'nanoid';
import imageCompression from 'browser-image-compression';
import { useDispatch } from 'react-redux';
import {
  changeInputImgPerson,
  changeInputPerson,
  userInfo,
} from '../../../../../src/modules/user';
const PersonalInfoImg = ({
  personInfoChange,
  setFix,
  name,
  email,
  birth,
  imageUrl,
}) => {
  const token = localStorage.getItem('token');
  const infoimg = useRef();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    avatar: [],
  });

  const onClickImageUpload = (files, type, index) => {
    setData({
      ...data,
      avatar: files,
    });
  };

  const Submite = async (e) => {
    e.preventDefault();
    console.log(infoimg.current.files);
    actionImgCompress(infoimg.current.files);
  };
  const actionImgCompress = async (fileSrc) => {
    console.log(fileSrc);
    console.log('압축 시작');

    try {
      // 압축 결과
      const formData = new FormData();
      formData.append('file', fileSrc[0]);
      formData.append('upload_preset', 'xw4yrog1');

      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': `multipart/form-data;charset=UTF-8; boundary=${nanoid()}`,
        },
      };

      const body = formData;
      const res = await axios.post(
        'http://3.34.198.174:8080/user/update/photo',
        body,
        headers,
      );
      console.log(res);
      dispatch(changeInputImgPerson('imageUrl', res.data.newImgUrl));
      sessionStorage.removeItem('userInfo');
      sessionStorage.setItem(
        'userInfo',
        JSON.stringify({ name, email, birth, imageUrl: res.data.newImgUrl }),
      );
      setFix((state) => ({
        name: false,
        img: false,
        birth: false,
        emailAddress: false,
        cancel: true,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      method="post"
      name="imageUrl"
      onSubmit={Submite}
      encType="multipart/form-data"
    >
      <input type="file" ref={infoimg} name="imageUrl" multiple />
      <button>수정</button>
    </form>
  );
};

export default PersonalInfoImg;
