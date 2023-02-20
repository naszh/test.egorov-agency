import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
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
