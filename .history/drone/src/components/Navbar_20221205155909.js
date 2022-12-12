import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <Nav>

    <Logo >
        <Image src={logo} alt="..LOGO.."/>
    </Logo>
    <MenuBars/>
    <NavMenu>

    </NavMenu>
    </Nav>
  )
}


const Nav=styled.link`
  height: 10vh;
  background: red;
  margin: 0;
  padding: 0;

`
const Logo=styled.div`
    width: 5vw;
    height: 10vh;
    display:flex;
    align-items:center;
`
const Image=styled.img`
    width: 5vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    `
const MenuBars=styled.i``
const NavMenu=styled.div`
`

export default Navbar