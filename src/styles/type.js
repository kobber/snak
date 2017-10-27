import styled from 'styled-components';
import { css } from 'styled-components';
import { type, style, color } from './variables';
import { media } from './responsive';

const headline = css`
  font-family: 'Open Sans', Arial, sans-serif;
  color: ${color.text};
  font-weight: ${type.semiBold};
  font-family: ${type.font};
  line-height: 1.5;
  margin-top: 0;
  text-transform: none;
`;

export const H1 = styled.h1`
  ${headline}
  font-size: 24px;
  margin-bottom: 12px;

  ${media.tablet(css`
    font-size: 36px;
    margin-bottom: 18px;
  `)}
`;

export const H2 = styled.h2`
  ${headline}
  font-size: 20px;
  margin-bottom: 10px;

  ${media.tablet(css`
    font-size: 30px;
    margin-bottom: 18px;
  `)}
`;

export const H3 = styled.h2`
  ${headline}
  font-size: 18px;

  ${media.tablet(css`
    font-size: 24px;
  `)}
`;

export const P = styled.p`
  font-size: 1em;
  font-family: ${type.font};
`;

export const Strong = styled.strong`
  font-weight: ${type.semiBold};
`;
