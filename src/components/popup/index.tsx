import { useEffect, useRef } from 'react';
import {
  Cancel,
  Container,
  PopupButton,
  PopupContent,
  PopupHeader,
  PopupMessage,
} from './styled';

export const Popup = ({
  header,
  msg,
  onClose,
}: {
  header: string;
  msg: string;
  onClose: () => void;
}) => {
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
        <PopupHeader>{header}</PopupHeader>
        <PopupMessage>{msg}</PopupMessage>
        <PopupButton onClick={onClose}>Close</PopupButton>
      </PopupContent>
    </Container>
  );
};
