import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  place-content: center;

  form {
    margin: 80px 0;
    width: 350px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-weight: 700;
    }

    button {
      background: #333;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #ffff00;
      width: 100%;
      font-weight: 500;
      margin-top: 18px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#333')}
      }
    }
  }
`;

export const SuccessContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  form {
    margin: 80px 0;
    width: 350px;
    text-align: center;

    h1 {
      font-weight: 700;
    }

    h2 {
      margin-top: 16px;
    }

    button {
      background: #333;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #ffff00;
      width: 320px;
      font-weight: 500;
      margin-top: 18px;
      transition: background-color 0.2s;

      margin-top: 26px;

      &:hover {
        background: ${shade(0.2, '#333')}
      }
    }
  }
`;

export const Background = styled.div`
  width: 800px;
  background-color: #ffff00;

  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  img {
    width: 280px;
    height: 280px;
  }

  h1 {
    margin-top: 16px;
    font-weight: 700;
  }

  h2 {
    margin-top: 14px;
  }
`;
