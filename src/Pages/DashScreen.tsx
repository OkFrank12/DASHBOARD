import React from "react";
import NavSider from "../Components/Block/NavSider";
import Header from "../Components/Block/Header";
import Profile from "../Components/Block/Profile";
import Chart from "../Components/Block/Chart";
import CompSider from "../Components/Block/CompSider";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import RightSider from "../Components/Block/RightSider";

const DashScreen = () => {
  return (
    <div>
      <Container>
        <NavSider />
        <Main>
          <Header />
          <Div>
            <Div1>
              <Profile />
              <Chart />
            </Div1>
            <RightSider />
          </Div>

          <Outlet />
        </Main>
      </Container>
    </div>
  );
};

export default DashScreen;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;
