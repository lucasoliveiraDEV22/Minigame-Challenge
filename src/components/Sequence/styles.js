import styled from 'styled-components';

export const Sequence = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  span {
    background-color: #f0f0f0;
    color: #2f3349;
    font-size: 2.2rem;
    width: 50px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.1s, color 0.1s;

    &[color='green'] {
      background-color: green;
      color: white;
    }

    &[color='red'] {
      background-color: red;
      color: white;
    }
  }
`;
