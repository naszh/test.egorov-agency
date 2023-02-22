import styled from 'styled-components';
import { DefaultAnim } from '../main/styled';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  animation: 1s ease-out 0s 1 ${DefaultAnim};
  @media (max-width: 900px) {
    gap: 12px;
  }
  @media (max-width: 435px) {
    gap: 4px;
  }
`;

export const Counter = styled.div`
  font-family: 'Poppins-SemiBold', sans-serif;
  font-size: 72px;
  line-height: 100%;
  color: #162c4e;
  @media (max-width: 900px) {
    font-size: 36px;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Backdrop = styled.img`
  margin-top: 3px;
  @media (max-width: 900px) {
    margin-top: 6px;
    width: 64px;
    height: 40px;
  }
`;

export const Period = styled.p`
  display: none;
  @media (min-width: 901px) {
    display: block;
    position: absolute;
    top: 18px;
    left: 40px;
    font-size: 16px;
    line-height: 100%;
    color: #ffffff;
  }
`;

export const PeriodPP = styled.p`
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: absolute;
    top: 15px;
    left: 25px;
    font-size: 12px;
    line-height: 100%;
    color: #ffffff;
  }
`;
