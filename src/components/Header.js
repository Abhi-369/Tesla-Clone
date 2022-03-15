import React, { useState } from 'react';
import styled from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return <Container>
    <a>
      <img src="/images/logo.svg"></img>
    </a>

    <Menu>
      <a href="#">Model S</a>
      <a href="#">Model 3</a>
      <a href="#">Model X</a>
      <a href="#">Model Y</a>
      <a href="#">Solar Roof</a>
      <a href="#">Solar Panels</a>
    </Menu>

    <RightMenu>
      <a href="#">Shop</a>
      <a href="#">Tesla Account</a>
      <CustomMenu onClick={() => setBurgerStatus(true)} />
    </RightMenu>

    <BurgerNav show={burgerStatus}>
      <CloseWrapper>
        <CustomClose onClick={() => setBurgerStatus(false)} />
      </CloseWrapper>
      <SubMenu>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
      </SubMenu>

      <li><a hre="#">Existing Inventory</a></li>
      <li><a hre="#">Used Inventory</a></li>
      <li><a hre="#">Trade-in</a></li>
      <li><a hre="#">Cybertruck</a></li>
      <li><a hre="#">Roadaster</a></li>
      <li><a hre="#">Inventory</a></li>
      <li><a hre="#"> Inventory</a></li>
      <li><a hre="#"> Inventory</a></li>
    </BurgerNav>
  </Container>;
}

export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`
const Menu = styled.div`
display: flex;
align-item: center;
justify-content: center;
flex: 1;

a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 20px;
}
  a:hover{
    color: rgb(163, 26, 26);
  }
@media(max-width: 1200px) {
  display: none;
}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 20px;
 }
`

const CustomMenu = styled(FaBars)`
cursor: pointer;
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right:0;
background: white;
width: 300px;
list-style: none;
padding: 20px;
transition: transform 0.3s;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
overflow-y: auto;
li{
  margin: 20px;
  padding: 7px 0;
  border-bottom: 1px solid silver;
  a{
    font-weight: bold;
  }
}
`
const SubMenu = styled.div`
@media(min-width: 1200px) {
  display: none;
}
`
const CustomClose = styled(FaTimes)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`