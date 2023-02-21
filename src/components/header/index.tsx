import { Wrapper, LeftPic, RightPic, Logotype } from './styled';

export const Header = () => {
  return (
    <Wrapper>
      <LeftPic>
        <source srcSet='../../../imgs/left360.png' media='(max-width: 610px)' />
        <source
          srcSet='../../../imgs/left768.png'
          media='(max-width: 1440px)'
        />
        <img src='../../../imgs/left.png' alt='Left side backdrop' />
      </LeftPic>
      <RightPic>
        <source
          srcSet='../../../imgs/right360.png'
          media='(max-width: 610px)'
        />
        <source
          srcSet='../../../imgs/right768.png'
          media='(max-width: 1440px)'
        />
        <img src='../../../imgs/right.png' alt='Right side backdrop' />
      </RightPic>
      <a href='/'>
        <Logotype
          src='../../../imgs/logo.png'
          alt='Logotype of LEAD ADVISORS'
        />
      </a>
    </Wrapper>
  );
};
