import moment from 'moment';

// 이름 조건 검사
export const checkNameValidation = (name) => {
  const numberOrScRegExp = /^[가-힣a-zA-Z]{2,20}$/;
  return numberOrScRegExp.test(name);
};

// Date 조건 검사.  true 이면 조건 통과
export const checkDateValidation = (date) => {
  const dateRegExp = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/; // date 타입체크
  if (!dateRegExp.test(date)) return false;

  return moment().diff(moment(date), 'years') >= 18; // 만 18세 이상이면 true
};

// 이메일 조건 검사
export const checkEmailValidation = (email) => {
  const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 양식
  return emailRegExp.test(email);
};

// 비밀번호 조건검사
export const checkPasswordValidation = (
  nameValue = '',
  emailValue = '',
  password = '',
) => {
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 문자, 숫자, 특수 문자 포함

  const isLongerThanEight = password.length >= 8 ? true : false; // 8글자 이상인지 판단
  const hasEveryCharacter = passwordRegExp.test(password); // 문자, 숫자, 특수문자 모두 포함 했는지 판단
  const prevEmail = emailValue.split('@')[0];
  const doesContainInfo =
    !!password &&
    !password.match(nameValue) &&
    !password.match(prevEmail) &&
    !password.match(nameValue) &&
    !password.match(prevEmail); // 이름이나 이메일이 패스워드에 들어있으면 false반환,

  return {
    isLongerThanEight,
    hasEveryCharacter,
    doesContainInfo,
  };
};
