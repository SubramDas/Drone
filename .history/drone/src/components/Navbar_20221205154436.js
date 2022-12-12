import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <Nav>
    <Logo>
        <Image img src={logo} alt="..LOGO.." />
    </Logo>
    <h1> Navbar</h1>
    </Nav>
  )
}


const Nav=styled.nav`
  height: 60px;
  background: red;
`
const Logo=styled.div`
    width: 2vw;
    height: 2vh;
`

export default Navbar