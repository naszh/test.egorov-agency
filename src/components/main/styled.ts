import styled from 'styled-components';

export const Wrapper = styled.main`
  margin: 0 auto;
  flex: 1 0 auto;
  text-align: center;
`;

export const TextHeader = styled.h1`
  margin-bottom: 8px;
  font-size: 72px;
  font-family: 'Poppins-Bold', sans-serif;
  line-height: 104%;
  text-transform: uppercase;
  color: #162c4e;
  opacity: 39%;
`;

export const Paragraph = styled.p`
  margin: auto;
`;

export const HeaderBottom = styled(Paragraph)`
  max-width: 423px;
  margin-bottom: 32px;
`;

export const Container = styled.section`
  margin: 72px auto 76px;
`;

export const Button = styled.button`
  position: relative;
  margin-top: 12px;
  width: 240px;
  height: 60px;
  padding: 16px 41px 17px 28px;
  outline: none;
  border: none;
  border-radius: 40px;
  background: #1d4169;
  cursor: pointer;
  &::after {
    position: absolute;
    top: 20px;
    right: 20px;
    content: url('../../../imgs/arrow-right.png');
    height: 20px;
  }
`;

export const TextButton = styled(Paragraph)`
  text-align: left;
  color: #ffffff;
`;
