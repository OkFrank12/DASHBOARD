import React from "react";
import { ImHome, ImExit } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { BsUmbrellaFill } from "react-icons/bs";
import { FaShieldVirus } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { GiNetworkBars } from "react-icons/gi";
import styled from "styled-components";

const NavSider = () => {
  return (
    <div>
      <Container>
        <Main>
          <DivNavs>
            <Img1 />
            <Exact>
              <Img2 />
            </Exact>
            <Img3 />
            <Img4 />
            <Img5 />
            <Img6 />
            <Img7 />
          </DivNavs>
          <DivNavExit>
            <Img8 />
          </DivNavExit>
        </Main>
      </Container>
    </div>
  );
};

export default NavSider;

const Container = styled.div`
  width: 65px;
  height: 100%;
  background-color: #f540f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90%;
`;

const DivNavs = styled.div`
  color: white;
  display: flex;
  flex-direction: column;`;

const DivNavExit = styled.div``;

const Img1 = styled(ImHome)`
  margin: 20px 20px;
`;

const Img2 = styled(MdDashboard)`
  margin-left: 15px;
`;

const Img3 = styled(BsUmbrellaFill)`
  margin: 20px 20px;
`;

const Img4 = styled(FaShieldVirus)`
  margin: 20px 20px;
`;

const Img5 = styled(BiMap)`
  margin: 20px 20px;
`;

const Img6 = styled(HiUserGroup)`
  margin: 20px 20px;
`;

const Img7 = styled(GiNetworkBars)`
  margin: 20px 20px;
`;

const Img8 = styled(ImExit)`
  margin: 20px 20px;
`;

const Exact = styled.div`
  width: 60px;
  height: 30px;
  background-color: #fff;
  margin-left: 5px;
  border-radius: 20px 0px 0px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #f540f5;
`;
