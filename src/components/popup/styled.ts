import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: rgba(22, 44, 78, 0.6);
`;

export const PopupContent = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  width: 320px;
  height: 370px;
  border: 1px solid rgba(19, 89, 120, 0.07);
  border-radius: 2px;
  background: #ffffff;
`;

export const Cancel = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
`;

export const PopupHeader = styled.h2`
  font-family: 'Poppins-Bold', sans-serif;
  font-size: 36px;
  line-height: 104%;
  text-align: center;
  text-transform: uppercase;
  color: #162c4e;
`;

export const PopupMessage = styled.p`
  max-width: 280px;
  font-size: 16px;
  text-align: center;
`;

export const PopupButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 40px;
  border: none;
  outline: none;
  background: #1d4169;
  color: #ffffff;
  cursor: pointer;
`;
