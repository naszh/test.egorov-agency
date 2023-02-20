import { Wrapper, InputEmail, InputContainer } from './styled';

export const Footer = () => {
  return (
    <Wrapper>
      <InputContainer>
        <InputEmail
          type='email'
          placeholder='Enter your Email and get notified'
          pattern='/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i'
        />
      </InputContainer>
    </Wrapper>
  );
};
