import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

export const Input = styled.input`
  height: 48px;
  margin-top: 20px;
  padding: 0 20px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
  color: #666666;

  &::placeholder {
    color: #999999;
  }
`;

export const Button = styled.button`
  height: 48px;
  margin-top: 10px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: #df4723;
  cursor: pointer;
`;