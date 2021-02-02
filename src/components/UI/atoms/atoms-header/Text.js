import React from 'react';
import styled, { css } from 'styled-components';

const TextBlock = styled.span`
  padding: 10px 12px 10px 0;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Airbnb Cereal App Medium -apple-system';
  src: local('Airbnb Cereal App Book'),
    url('AirbnbCerealBook.woff') format('woff');
  ${props =>
    props.small &&
    css`
      font-size: 12px;
    `}

  ${props =>
    props.bold &&
    css`
      font-weight: 600;
    `}
    ${props =>
    props.noPadding &&
    css`
      padding: 0;
    `}

    ${props =>
    props.block &&
    css`
      display: block;
    `}
`;

const Text = props => {
  return <TextBlock {...props}>{props.children}</TextBlock>;
};

export default Text;
