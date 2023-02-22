import { SetStateAction, useEffect, useState } from 'react';
import { sendData } from '../../helpers';
import { Popup } from '../popup';
import {
  Wrapper,
  InputEmail,
  InputContainer,
  InputButton,
  Message,
  Other,
  ArrowDown,
} from './styled';

export const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [error, setError] = useState<string>('Email is empty');
  const [formValid, setFormValid] = useState<boolean>(false);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [textPopup, setTextPopup] = useState<{ header: string; msg: string }>({
    header: '',
    msg: '',
  });

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

  const sendHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const openSuccess = () => {
      setPopupOpen(true);
      setTextPopup({
        header: 'Success!',
        msg: 'You have successfully subscribed to the email newsletter',
      });
    };

    const openFailed = () => {
      setPopupOpen(true);
      setTextPopup({
        header: 'Failed! :(',
        msg: 'Something went wrong! Try again',
      });
    };

    sendData(email, openSuccess, openFailed);
    setEmail('');
    setFormValid(false);
  };

  const scrollHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    document!.querySelector('#scroll')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Wrapper>
        <InputContainer onSubmit={sendHandler}>
          <InputEmail
            type='email'
            value={email}
            placeholder='Enter your Email and get notified'
            onBlur={blurHandler}
            onChange={emailHandler}
            className='email__input'
          />
          <InputButton type='submit' disabled={!formValid} />
          {emailDirty && error && <Message>{error}</Message>}
        </InputContainer>
        <Other onClick={scrollHandler}>
          Other Events <ArrowDown src='../../../imgs/arrow-down.svg' />
        </Other>
      </Wrapper>
      {isPopupOpen && (
        <Popup
          header={textPopup.header}
          msg={textPopup.msg}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </>
  );
};
