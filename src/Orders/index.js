import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../assets/logo.png";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Order,
  Button,
  Delete,
} from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const { data: showOrders } = await axios.get(
        "http://localhost:3001/orders"
      );
      setOrders(showOrders);
    };
    fetchOrders();
  }, []);

  const deleteOrder = async (orderId) => {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId);
    setOrders(newOrders);
  };

  const goBack = () => {
    navigate("/");
  };
  return (
    <Container>
      <Image src={Logo}></Image>
      <ContainerItens>
        <H1>Pedidos</H1>
        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <p>{order.order}</p>
              <p>{order.clientName}</p>
              <Delete onClick={() => deleteOrder(order.id)}> Excluir </Delete>
            </Order>
          ))}
        </ul>
        <Button onClick={goBack}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Orders;
