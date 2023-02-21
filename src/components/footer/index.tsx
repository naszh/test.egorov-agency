import { SetStateAction, useEffect, useState } from 'react';
import {
  Wrapper,
  InputEmail,
  InputContainer,
  InputButton,
  Message,
} from './styled';

export const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [error, setError] = useState<string>('Email is empty');
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    error ? setFormValid(false) : setFormValid(true);
  }, [error]);

  const emailHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setError('Invalid email');
    } else {
      setError('');
    }
  };

  const blurHandler = () => {
    setEmailDirty(true);
  };

  return (
    <Wrapper>
      <InputContainer>
        <InputEmail
          type='email'
          value={email}
          placeholder='Enter your Email and get notified'
          onBlur={blurHandler}
          onChange={emailHandler}
        />
        <InputButton type='submit' disabled={!formValid} />
        {emailDirty && error && <Message>{error}</Message>}
      </InputContainer>
    </Wrapper>
  );
};
