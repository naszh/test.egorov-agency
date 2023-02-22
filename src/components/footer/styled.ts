import styled from 'styled-components';

export const Wrapper = styled.footer`
  position: relative;
  flex: 0 0 auto;
  background: #162c4e;
`;

export const InputContainer = styled.form`
  position: relative;
  margin: auto;
  width: fit-content;
`;

export const InputButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: #df2224;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  @media (max-width: 900px) {
    top: 4px;
    right: 4px;
    width: 33px;
    height: 33px;
  }
  &::after {
    position: absolute;
    top: 12px;
    right: 11px;
    content: url('../../../imgs/arrow-right1.svg');
    cursor: inherit;
    @media (max-width: 900px) {
      top: 5px;
      right: 8px;
      content: url('../../../imgs/arrow-right.svg');
    }
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
  @media (max-width: 900px) {
    margin: 60px auto;
    padding: 10px 20px;
    width: 360px;
    height: 41px;
    &::placeholder {
      font-size: 14px;
    }
  }
  @media (max-width: 435px) {
    margin: 50px auto;
    width: 280px;
  }
`;

export const Message = styled.span`
  position: absolute;
  top: -50%;
  left: 25%;
  font-size: 14px;
  color: red;
`;

export const Other = styled.div`
  position: absolute;
  top: 40%;
  right: 5%;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

export const ArrowDown = styled.img`
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
`;
