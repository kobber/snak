import styled from 'styled-components';
import { css } from 'styled-components';

export const clearfix = css`
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`
