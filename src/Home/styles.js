import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  height: 370px;
  width: 370px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const H1 = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 24px;
`;
export const InputLabel = styled.p`
  margin-top: 50px;
  font-weight: bold;
  color: white;
  font-size: 14px;
`;
export const Input = styled.input`
  margin: 12px;
  background: none;
  border: 1px solid #353535;
  outline: none;
  max-width: 200px;
  padding: 11px 23px;
  font-size: 16px;
  border-radius: 50px;
  color: #979797;
  box-shadow: rgb(136 136 136 / 17%) 0px -23px 25px 0px inset,
    rgb(81 81 81 / 23%) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
export const Button = styled.button`
  margin-top: 35px;

  background: linear-gradient(140.14deg, #ec540e 15.05%, #d6361f 114.99%)
      padding-box,
    linear-gradient(142.51deg, #ff9465 8.65%, #af1905 88.82%) border-box;
  border-radius: 7px;
  border: 2px solid transparent;

  text-shadow: 1px 1px 1px #00000040;
  box-shadow: 8px 8px 20px 0px #45090059;

  padding: 10px 40px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;
