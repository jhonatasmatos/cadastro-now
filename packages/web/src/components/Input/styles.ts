import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffff00;
  border-radius: 10px;
  border: 2px solid #ffff00;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  ${props => props.isFocused && css`
    color: #333;
    border-color: #333;
  `}

  ${props => props.isFilled && css`
    color: #333;
  `}

  & + div {
      margin-top: 10px;
    }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #333;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
