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
`;
