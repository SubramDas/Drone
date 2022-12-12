import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <Nav>
    <Logo src={logo} >
        
    </Logo>
    </Nav>
  )
}


const Nav=styled.nav`
  height: 10vh;
  background: red;
`
const Logo=styled.img`
    width: 5vw;
    height: 5vh;
    position: absolute;
`

export default Navbar