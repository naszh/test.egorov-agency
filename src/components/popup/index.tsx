import { useEffect, useRef } from 'react';
import {
  Cancel,
  Container,
  PopupButton,
  PopupContent,
  PopupHeader,
  PopupMessage,
} from './styled';

export const Popup = ({ onClose }: { onClose: () => void }) => {
  const rootEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: Event) =>
      rootEl?.current?.contains(e.target as HTMLElement) || onClose();
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [onClose]);

  return (
    <Container>
      <PopupContent ref={rootEl}>
        <Cancel src='../../../imgs/cancel.svg' onClick={onClose} />
        <PopupHeader>Success!</PopupHeader>
        <PopupMessage>
          You have successfully subscribed to the email newsletter
        </PopupMessage>
        <PopupButton onClick={onClose}>Close</PopupButton>
      </PopupContent>
    </Container>
  );
};
