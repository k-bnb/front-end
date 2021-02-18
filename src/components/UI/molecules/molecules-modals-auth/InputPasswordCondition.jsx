import React from 'react';
import styled, { css } from 'styled-components';
// import { GrFormClose } from 'react-icons/gr';
// import { FiCircle } from 'react-icons/fi';
// import { BsCheck } from 'react-icons/bs';
// import { AiOutlineCheck } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { FcCheckmark } from 'react-icons/fc';

const InputPasswordConditionBlock = styled.div`
  margin-left: -150px;
  div {
    line-height: 13px;
    svg {
      color: red;
      font-size: 13px;
      vertical-align: top;
    }
  }
`;

const ConditionText = styled.div`
  line-height: 13px;
  svg {
    color: red;
    font-size: 13px;
    vertical-align: top;
  }
  ${(props) =>
    props.condition &&
    css`
      color: green;
      svg {
        color: green;
      }
    `}
`;

const InputPasswordCondition = ({
  registerValidation,
  setRegisterValidation,
  isFirst,
  setIsFirst,
}) => {
  console.log(registerValidation.passwordValidation);
  return (
    <InputPasswordConditionBlock>
      <ConditionText
        className="pw-total"
        condition={
          registerValidation.passwordValidation.isLongerThanEight &&
          registerValidation.passwordValidation.hasEveryCharacter &&
          registerValidation.passwordValidation.doesContainInfo
        }
      >
        {registerValidation.passwordValidation.isLongerThanEight &&
        registerValidation.passwordValidation.hasEveryCharacter &&
        registerValidation.passwordValidation.doesContainInfo ? (
          <>
            <FcCheckmark />
            비밀번호 보안 수준: 강함
          </>
        ) : (
          <>
            <IoIosClose />
            비밀번호 보안 수준: 약함
          </>
        )}
      </ConditionText>
      <ConditionText
        className="pw-email-name"
        condition={registerValidation.passwordValidation.doesContainInfo}
      >
        <>
          {registerValidation.passwordValidation.doesContainInfo ? (
            <FcCheckmark />
          ) : (
            <IoIosClose />
          )}
          비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다.
        </>
      </ConditionText>
      <ConditionText
        className="pw-8"
        condition={registerValidation.passwordValidation.isLongerThanEight}
      >
        <>
          {registerValidation.passwordValidation.isLongerThanEight ? (
            <FcCheckmark />
          ) : (
            <IoIosClose />
          )}
          최소 8자{' '}
        </>
      </ConditionText>
      <ConditionText
        className="pw-contain"
        condition={registerValidation.passwordValidation.hasEveryCharacter}
      >
        <>
          {registerValidation.passwordValidation.hasEveryCharacter ? (
            <FcCheckmark />
          ) : (
            <IoIosClose />
          )}
          숫자와 기호를 모두 포함하세요{' '}
        </>
      </ConditionText>
    </InputPasswordConditionBlock>
  );
};

export default InputPasswordCondition;
