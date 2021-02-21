import React, { useRef, useState } from 'react';
import axios from '../../../../../node_modules/axios/index';
import Input from '../../atoms/atoms-main/Input';
import { nanoid } from 'nanoid';
import imageCompression from 'browser-image-compression';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInputImgPerson,
  changeInputPerson,
  userInfo,
} from '../../../../../src/modules/user';
import styled, { keyframes } from 'styled-components';
import { startLoading } from '../../../../modules/loading';
const ani = keyframes`
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(0);
  }

`;

const ani1 = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  70% {
    transform: scale(0.5);
  }

`;
const ani3 = keyframes`
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(0);
  }
  

`;
const PersonalInfoImgStyle = styled.div`
  form {
    display: flex;
    align-items: center;
    button {
      display: flex;
      padding: 10px 30px;
      background-color: #008489;
      border-radius: 5px;
      color: #fff;
      .animation {
        padding: 0;
        display: flex;
        margin-top: 10px;
        height: 0;
        & div:nth-child(1) {
          width: 10px;
          height: 10px;
          background-color: #5f3737;
          animation: ${ani} 1s infinite ease-in-out;
          animation-fill-mode: both;

          display: block;
          border-radius: 50%;
        }
        & div:nth-child(2) {
          width: 10px;
          height: 10px;
          background-color: #bea0a0;
          animation: ${ani1} 1s infinite ease-in-out;
          animation-fill-mode: both;
          display: block;
          border-radius: 50%;
        }
        & div:nth-child(3) {
          width: 10px;
          height: 10px;
          background-color: #c23636;
          animation: ${ani3} 1s infinite ease-in-out;
          animation-fill-mode: both;

          display: block;
          border-radius: 50%;
        }
      }
    }
  }
`;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const PersonalInfoImg = ({
  personInfoChange,
  setFix,
  name,
  email,
  birth,
  imageUrl,
}) => {
  const { token } = useSelector((tokens) => tokens.auth);
  const [loading, setLoading] = useState(false);
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

    actionImgCompress(infoimg.current.files);
  };
  const actionImgCompress = async (fileSrc) => {
    try {
      setLoading(true);
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
      sessionStorage.setItem(
        'userInfo',
        JSON.stringify({ name, email, birth, imageUrl: res.data.newImgUrl }),
      );
      dispatch(changeInputImgPerson('imageUrl', res.data.newImgUrl));

      setTimeout(async () => {
        setLoading(true);
        await sleep(3000);
        setFix(
          (state) => ({
            name: false,
            img: false,
            birth: false,
            emailAddress: false,
            cancel: true,
          }),
          400,
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PersonalInfoImgStyle>
      <form
        method="post"
        name="imageUrl"
        onSubmit={Submite}
        encType="multipart/form-data"
      >
        <input type="file" ref={infoimg} name="imageUrl" multiple />
        <button>
          {!loading && '저장'}
          {loading && (
            <div className="animation">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </button>
      </form>
    </PersonalInfoImgStyle>
  );
};

export default PersonalInfoImg;
