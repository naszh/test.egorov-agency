import styled from 'styled-components';
import { HeaderAnim } from '../main/styled';

export const Title = styled.h2`
  margin: 70px auto 40px;
  font-size: 72px;
  font-family: 'Poppins-Bold', sans-serif;
  line-height: 104%;
  text-align: center;
  text-transform: uppercase;
  color: #162c4e;
  opacity: 39%;
  animation: 1s ease-out 0s 1 ${HeaderAnim};
  @media (max-width: 900px) {
    font-size: 36px;
  }
`;

export const Container = styled.section`
  margin: 115px auto 100px;
  width: 80%;
  @media (max-width: 1500px) {
    margin: 10px auto 80px;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const SlidesList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 4px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Slide = styled.li.attrs(
  (props: { active: boolean; image: string }) => props
)`
  position: relative;
  overflow: hidden;
  width: ${props => (props.active ? '59%' : '5%')};
  height: 680px;
  border-bottom: 2px solid #df2224;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position-x: center;

  -webkit-transition: all 500ms linear;
  -moz-transition: all 500ms linear;
  -o-transition: all 500ms linear;
  -ms-transition: all 500ms linear;
  transition: all 500ms linear;

  @media (max-width: 1500px) {
    height: 470px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: ${props => (props.active ? '470px' : '70px')};
  }

  &::after {
    content: '';
    background: ${props =>
      props.active
        ? ''
        : 'linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162c4e 100%)'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &::before {
    content: '';
    background: ${props => (props.active ? '' : 'rgba(18, 18, 18, 0.7)')};
    background-blend-mode: ${props => (props.active ? '' : 'darken')};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const EventTitle = styled.span.attrs(
  (props: { active: boolean }) => props
)`
  position: absolute;
  bottom: 13%;
  left: 18px;
  font-family: 'SF-Pro-Display-Semibold', sans-serif;
  font-size: 32px;
  line-height: 100%;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: #ffffff;
  @media (max-width: 1500px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    display: ${props => (props.active ? 'none' : 'block')};
    bottom: 55%;
    left: 13%;
    font-size: 24px;
    writing-mode: unset;
    transform: unset;
  }
`;

export const EventId = styled.span.attrs((props: { active: boolean }) => props)`
  position: absolute;
  bottom: 3%;
  left: 12px;
  font-family: 'SF-Pro-Display-Semibold', sans-serif;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #ffffff;
  @media (max-width: 1500px) {
    font-size: 24px;
  }
  @media (max-width: 1024px) {
    display: ${props => (props.active ? 'none' : 'block')};
    bottom: 50%;
    font-size: 28px;
  }
`;

export const LeftSide = styled.div.attrs((props: { active: boolean }) => props)`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  content: '';
  background: ${props => (props.active ? 'rgba(18, 18, 18, 0.8)' : '')};
  backdrop-filter: ${props => (props.active ? 'blur(20px)' : '')};
  z-index: 1;
  @media (max-width: 1024px) {
    bottom: 0;
    top: unset;
    width: 100%;
    height: 40%;
  }
`;

export const EventIdBig = styled.span`
  position: absolute;
  font-family: 'SF-Pro-Display-Semibold', sans-serif;
  font-size: 380px;
  line-height: 100%;
  color: rgba(255, 255, 255, 0.04);
  @media (max-width: 1500px) {
    font-size: 200px;
  }
  @media (max-width: 1024px) {
    right: -3%;
    font-size: 120px;
  }
`;

export const MoreInfo = styled.div.attrs((props: { active: boolean }) => props)`
  position: absolute;
  display: ${props => (props.active ? 'block' : 'none')};
  bottom: 7%;
  left: 22%;
  width: 75%;
  @media (max-width: 1024px) {
    left: 5%;
    bottom: 15%;
    width: 30%;
  }
`;

export const EventName = styled.p`
  margin-bottom: 12px;
  font-family: 'SF-Pro-Display-Semibold', sans-serif;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  @media (max-width: 1500px) {
    font-size: 16px;
  }
`;

export const EventDate = styled.p`
  margin-bottom: 25px;
  font-family: 'SF-Pro-Display-Regular', sans-serif;
  font-size: 18px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.8);
  @media (max-width: 1500px) {
    font-size: 14px;
  }
`;

export const ButtonMore = styled.button`
  width: 80%;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  font-family: 'SF-Pro-Display-Semibold', sans-serif;
  font-size: 18px;
  line-height: 120%;
  background: none;
  color: rgba(255, 255, 255, 0.8);
  @media (max-width: 1500px) {
    font-size: 14px;
  }
`;
