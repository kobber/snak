import styled from 'styled-components';
import { css } from 'styled-components';
import { type, style, color } from './variables';

const buttonColor = (color) => css`
  background-color: ${color};
  border-color: ${color};
  color: white;

  &:hover {
    background-color: mix(white, $color, 10%);
  }

  &:active {
    background-color: mix(black, $color, 10%);
  }

  ${props => props.ghost && css`
    background: transparent;
    color: ${color};

    &:hover {
      background-color: ${color};
    }

    &:active {
      background-color: ${color};
    }
  `}
`

export const Button = styled.button`
  border: 1px solid transparent;
  border-radius: ${style.roundness};
  display: inline-block;
  font-size: 1rem;
  font-style: normal;
  font-weight: normal;
  padding: 10px 18px;
  cursor: pointer;
  transition: border-color 0.1s, box-shadow 0.1s;
  color: white;

  &:focus {
    outline: none;
    border-color: ${color.focus};
    transition: border-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 0 3px ${color.focus};
  }

  ${props => props.small && css`
    font-size: 14px;
  `}

  ${props => {
    switch(props.color) {
      case 'primary':   return buttonColor(color.primary);
      case 'secondary': return buttonColor(color.secondary);
      case 'success':   return buttonColor(color.success);
      case 'danger':    return buttonColor(color.danger);
      default:          return buttonColor(color.text);
    }
  }}

  ${props => {
    switch(props.size) {
      case 'small': return css`
        font-size: 14px;
      `;
      case 'large': return css`
        font-size: 18px;
      `;
    }
  }}
`
