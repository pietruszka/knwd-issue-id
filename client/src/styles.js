import styled from 'styled-components';

export const View = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-weight: 400;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
  user-select: none;
`;

export const Top = styled.div`
  color: #4f4f4f;
  font-size: 48px;
`;

export const Bottom = styled.div`
  margin-top: 16px;
  color: #333;
  font-weight: 700;
  font-size: 72px;
`;

export const Center = styled.div`
  box-sizing: border-box;
`;

export const Input = styled.input`
  background-color: #fff;
  width: 560px;
  height: 120px;
  border: 2px solid #bdbdbd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 96px;
  text-align: center;
  color: #4f4f4f;
`;

export const Button = styled.button`
  width: 296px;
  height: 96px;
  margin: 40px auto 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  background-color: ${props => props.disabled ? '#e0e0e0' : '#2f80ed'};
  font-size: 36px;
  color: #fff;
  outline: none;
  border: none;
  cursor: ${props => props.disabled ? 'wait' : 'pointer'};
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${props => props.disabled ? '#e0e0e0' : '#3f91fe'};
  }

  &:active {
    background-color: ${props => props.disabled ? '#e0e0e0' : '#1d70dc'};
  }
`;

