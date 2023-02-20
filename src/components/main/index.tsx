import {
  Wrapper,
  TextHeader,
  HeaderBottom,
  Paragraph,
  Container,
  TextButton,
  Button,
} from './styled';

export const Main = () => {
  return (
    <Wrapper>
      <TextHeader>Under Construction</TextHeader>
      <HeaderBottom>
        We're making lots of improvements and will be back soon
      </HeaderBottom>
      <Container>
        <Paragraph>Check our event page when you wait:</Paragraph>
        <Button>
          <TextButton>
            <a
              href='https://www.linkedin.com/in/naszh/'
              target='_blank'
              rel='noreferrer'
            >
              Go to the event
            </a>
          </TextButton>
        </Button>
      </Container>
    </Wrapper>
  );
};
