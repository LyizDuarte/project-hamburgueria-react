import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../assets/logo.png";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function Home() {
  const [orders, setOrders] = useState([]);
  const inputPedido = useRef();
  const inputCliente = useRef();
  const navigate = useNavigate();

  const addNewOrder = async () => {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: inputPedido.current.value,
        clientName: inputCliente.current.value,
      }
    );
    console.log(newOrder);
    setOrders([...orders, newOrder]);
  };

  const goToPedidos = () => {
    navigate("/pedidos")
  }

  return (
    <Container>
      <Image src={Logo}></Image>
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputPedido} placeholder="Pedido"></Input>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputCliente} placeholder="Nome"></Input>
        <Button onClick={addNewOrder}>+ Novo Pedido</Button>
        <Button onClick={goToPedidos}>Pedidos</Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;
