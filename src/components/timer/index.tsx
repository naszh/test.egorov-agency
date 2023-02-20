import { useCountdown } from '../../hooks';
import {
  Backdrop,
  Container,
  Counter,
  Period,
  PeriodPP,
  Wrapper,
} from './styled';

export const Timer = ({ date }: { date: Date }) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  return (
    <Wrapper>
      <div>
        <Counter>{days < 10 ? '0' + days : days}</Counter>
        <Container>
          <Backdrop src='../../../imgs/backdrop-red.png' alt='' />
          <Period>Days</Period>
          <PeriodPP>DD</PeriodPP>
        </Container>
      </div>
      <Counter>:</Counter>
      <div>
        <Counter>{hours < 10 ? '0' + hours : hours}</Counter>
        <Container>
          <Backdrop src='../../../imgs/backdrop-red.png' alt='' />
          <Period>Hours</Period>
          <PeriodPP>HH</PeriodPP>
        </Container>
      </div>
      <Counter>:</Counter>
      <div>
        <Counter>{minutes < 10 ? '0' + minutes : minutes}</Counter>
        <Container>
          <Backdrop src='../../../imgs/backdrop-red.png' alt='' />
          <Period>Minutes</Period>
          <PeriodPP>MM</PeriodPP>
        </Container>
      </div>
      <Counter>:</Counter>
      <div>
        <Counter>{seconds < 10 ? '0' + seconds : seconds}</Counter>
        <Container>
          <Backdrop src='../../../imgs/backdrop-red.png' alt='' />
          <Period>Seconds</Period>
          <PeriodPP>SS</PeriodPP>
        </Container>
      </div>
    </Wrapper>
  );
};
