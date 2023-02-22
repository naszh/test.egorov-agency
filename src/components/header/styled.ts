import styled, { keyframes } from 'styled-components';

const leftPicAnim = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const rightPicAnim = keyframes`
 0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

export const Wrapper = styled.header`
  position: relative;
  flex: 0 0 auto;
`;

export const LeftPic = styled.picture`
  position: absolute;
  animation: 1s ease-out 0s 1 ${leftPicAnim};
`;

export const RightPic = styled(LeftPic)`
  right: 0;
  animation: 1s ease-out 0s 1 ${rightPicAnim};
`;

export const Logotype = styled.img`
  margin: 60px auto 93px;
  @media (max-width: 900px) {
    margin: 100px auto 166px;
  }
  @media (max-width: 435px) {
    margin: 80px auto 66px;
    width: 128px;
  }
`;
