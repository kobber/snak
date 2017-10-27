import styled from 'styled-components';
import { css } from 'styled-components';
import { clearfix } from './utils';

export const breakpoints = {
  tablet: '420px',
  desktop: '900px'
}
const columns = 12;

export const media = {
  tablet: (...args) => css`
    @media (min-width: ${breakpoints.tablet}) {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.desktop}) {
      ${ css(...args) }
    }
  `
}

function getColumnWidth(span) {
  if (!span) return;

  const width = span / 12 * 100;
  return css`
    width: ${width}%;
  `;
}

export const Row = styled.div`
  position: relative;
  ${clearfix}
`
export const Col = styled.div`
  float: left;
  min-height: 1px;

  ${media.tablet(css`
    ${props => props.tablet && getColumnWidth(props.tablet)}
  `)}

  ${media.desktop(css`
    ${props => props.desktop && getColumnWidth(props.desktop)}
  `)}
`
