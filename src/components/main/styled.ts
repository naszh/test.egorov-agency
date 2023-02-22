import styled, { keyframes } from 'styled-components';

export const HeaderAnim = keyframes`
  0% { transform: translateY(-20%); opacity: 0; }
  100% { transform: translateY(0); opacity: 0.39; }
`;

export const DefaultAnim = keyframes`
  0% { transform: translateY(-30%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export const Wrapper = styled.main`
  margin: 0 auto;
  flex: 1 0 auto;
  text-align: center;
  @media (max-width: 435px) {
    padding: 0 20px;
  }
`;

export const TextHeader = styled.h1`
  margin-bottom: 8px;
  font-size: 72px;
  font-family: 'Poppins-Bold', sans-serif;
  line-height: 104%;
  text-transform: uppercase;
  color: #162c4e;
  opacity: 39%;
  animation: 1s ease-out 0s 1 ${HeaderAnim};
  @media (max-width: 900px) {
    margin-bottom: 20px;
    font-size: 36px;
  }
  @media (max-width: 435px) {
    margin-bottom: 16px;
  }
`;

export const Paragraph = styled.p`
  margin: auto;
  animation: 1s ease-out 0s 1 ${DefaultAnim};
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const HeaderBottom = styled(Paragraph)`
  max-width: 423px;
  margin-bottom: 32px;
  @media (max-width: 900px) {
    max-width: 286px;
    margin-bottom: 40px;
  }
`;

export const Container = styled.section`
  margin: 72px auto 76px;
  animation: 1s ease-out 0s 1 ${DefaultAnim};
  @media (max-width: 900px) {
    margin: 40px auto 169px;
  }
  @media (max-width: 435px) {
    margin-bottom: 86px;
  }
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
    content: url('../../../imgs/arrow-right1.svg');
    height: 20px;
  }
  @media (max-width: 900px) {
    margin-top: 15px;
  }
`;

export const TextButton = styled(Paragraph)`
  text-align: left;
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
