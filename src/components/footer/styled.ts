import styled from 'styled-components';

export const Wrapper = styled.footer`
  flex: 0 0 auto;
  background: #162c4e;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: auto;
  width: fit-content;
  &::before {
    position: absolute;
    top: 8px;
    right: 8px;
    content: '';
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background: #df2224;
    cursor: pointer;
  }
  &::after {
    position: absolute;
    top: 20px;
    right: 19px;
    content: url('../../../imgs/arrow-right.png');
    height: 20px;
    cursor: pointer;
  }
`;

export const InputEmail = styled.input`
  display: block;
  margin: 61px auto 72px;
  padding: 16px 27px;
  width: 440px;
  height: 59px;
  background: #ffffff;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    color: rgba(0, 0, 0, 0.6);
  }
`;
