import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled, { css } from 'styled-components';
import { getReservedDetail } from '../../modules/reservedDetail';

const ReservedInfoContainerStyle = styled.section`
  ${(props) =>
    props.pc &&
    css`
      width: 40%;
      min-width: 500px;
      background-color: red;
    `}

  ${(props) =>
    props.mobile &&
    css`
      width: 100%;
      background-color: black;
    `}
`;

const ReservedInfoContainer = ({ ...rest }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getReservedDetail(token, 13));
  }, []);
  return <ReservedInfoContainerStyle {...rest}></ReservedInfoContainerStyle>;
};

export default ReservedInfoContainer;
