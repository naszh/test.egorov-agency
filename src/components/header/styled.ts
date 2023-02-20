import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  flex: 0 0 auto;
`;

export const LeftPic = styled.picture`
  position: absolute;
`;

export const RightPic = styled(LeftPic)`
  right: 0;
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
