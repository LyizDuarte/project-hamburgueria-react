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

export const Order = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 600px;
  height: 200px;
  margin-bottom: 15px;
  border: none;
  outline: none;
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
  margin-top: 15px;

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
  &&:hover {
    opacity: 0.7;
  }
  &&:active {
    opacity: 0.3;
  }
`;
export const Delete = styled.button`
  cursor: pointer;
  border-radius: 5px;
  color: rgb(219, 218, 218);
  border-style: solid;
  background-color: transparent;
  border-color: rgb(219, 218, 218);
  width: 120px;
  height: 40px;
  transition: 0.2s ease;
  text-transform: uppercase;
  border-width: 2px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 2px;
  &&:hover {
    color: rgb(247, 247, 247);
    background-color: rgb(202, 25, 25);
    border-color: rgb(202, 25, 25);
    text-shadow: 0 0 50px white, 0 0 20px white, 0 0 15px white;
    box-shadow: 0 0 50px rgb(202, 25, 25), 0 0 30px rgb(202, 25, 25),
      0 0 60px rgb(202, 25, 25), 0 0 120px rgb(202, 25, 25);
    font-size: 20px;
    width: 130px;
    height: 50px;
    letter-spacing: 3px;
  }
  &&:active {
    width: 115px;
    height: 38px;
    letter-spacing: 0px;
  }
`;
