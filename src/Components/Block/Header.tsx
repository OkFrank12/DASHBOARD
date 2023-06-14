import React from "react";
import styled from "styled-components";
import { RiSearchLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import toon1 from "../../Assets/toon1.webp";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <DivName>Welcome, BACK GEE.</DivName>
          <DivSearch>
            <SearchIcon />
            <SearchInput placeholder="Search" />
          </DivSearch>
          <CallToAction>
            <Bell />
            <ProfileImage>
              <Img src={toon1} />
            </ProfileImage>
            <Div>
              <ProfileName>Scarlett</ProfileName>
              <ProfileDetails>Admin</ProfileDetails>
            </Div>
            <DropDown />
          </CallToAction>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: calc(100vw - 65px);
  height: 80px;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;

const DivName = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #f540f5;
`;

const DivSearch = styled.div`
  display: flex;
  background-color: #fff;
  width: 230px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

const SearchIcon = styled(RiSearchLine)`
  color: black;
`;

const SearchInput = styled.input`
  height: 90%;
  width: 200px;
  border: none;
  outline: none;
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
`;

const Bell = styled(FaBell)`
  font-size: 25px;
  color: grey;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid silver;
`;

const Div = styled.div``;

const ProfileName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #f540f5;
`;

const ProfileDetails = styled.div`
  font-size: 17px;
  color: silver;
`;

const DropDown = styled(RiArrowDropDownLine)`
  font-size: 30px;
  color: grey;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
