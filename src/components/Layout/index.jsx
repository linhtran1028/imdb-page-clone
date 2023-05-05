import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";
import { Background } from "../../styles/LayoutStyles";
import styled from "styled-components";

const Layout = () => {
  const Content = styled.div`
    padding-top: 5rem;
    margin: auto;

    @media only screen and (min-width: 1366px) {
      width: 85rem;
    }
  
  `;


  return (
    <Background>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Background>
  );
};

export default Layout;
