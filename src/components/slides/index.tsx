import { useState } from 'react';
import { allEvents, EventsType } from '../../constants';
import {
  Container,
  Slide,
  SlidesList,
  EventTitle,
  EventId,
  EventIdBig,
  LeftSide,
  MoreInfo,
  EventName,
  EventDate,
  ButtonMore,
  Title,
} from './styled';

export const Slides = () => {
  const [active, setActive] = useState<string>('01');

  const toggleActive = (i: string) => {
    setActive(i);
  };

  return (
    <Container id='scroll'>
      <Title>All events</Title>
      <SlidesList>
        {allEvents.map((event: EventsType) => {
          return (
            <Slide
              key={event.id}
              active={active === event.id}
              onClick={() => toggleActive(event.id)}
              image={event.image}
            >
              <LeftSide active={active === event.id}>
                <EventIdBig>{event.id}</EventIdBig>
                <EventTitle active={active === event.id}>
                  {event.header}
                </EventTitle>
                <EventId active={active === event.id}>{event.id}</EventId>
                <MoreInfo active={active === event.id}>
                  <EventName>{event.header}</EventName>
                  <EventDate>{event.date}</EventDate>
                  <ButtonMore>
                    <a
                      href='https://www.linkedin.com/in/naszh/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      More information
                    </a>
                  </ButtonMore>
                </MoreInfo>
              </LeftSide>
            </Slide>
          );
        })}
      </SlidesList>
    </Container>
  );
};
