import React from 'react';
import styled, { keyframes } from 'styled-components';
const ani1 = keyframes`
	0% {
		transform: translateY(100%);
	}
	50% {

    transform: translateY(50%);
	}
	100% {

    transform: translateY(0%);

	}
`;
const PersonInfoEmailModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  animation: ${ani1} 0.3s ease-in alternate forwards;
  div {
    /* width: 400px; */
    /* height: 300px; */

    border-radius: 15px;
    padding: 10%;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      padding: 0;
      margin-bottom: 20px;
    }
    input {
      margin-top: 10px;
      border: 1px solid #000;
      border-radius: 15px;
    }
    button {
      margin-top: 20px;
      border-radius: 5px;
      padding: 10px 20px;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;
const PersonInfoEmailModal = () => {
  return (
    <PersonInfoEmailModalStyle>
      <div>
        <label>비밀번호를 입력하세요.</label>
        <input type="password" />
        <button>변경</button>
      </div>
    </PersonInfoEmailModalStyle>
  );
};

export default PersonInfoEmailModal;
