import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <DropDownWrapper>
            <DropdownMenu>
                {menuData.map((item, index)=>(
                    <DropDownLink to={item.link} key={index}>
                        {item.title}
                    </DropDownLink>
                ))}
            </DropdownMenu>
            <BtnWrap>
                <Button primary="true" round="true" big="true" to="/contact">CONTACT US</Button>
            </BtnWrap>
        </DropDownWrapper>
    </DropdownContainer>
  )
}

const DropdownContainer=styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen? '1':'0')};
    top: 0;
`

const Icon=styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    
`
const CloseIcon=styled(FaTimes)`
    color: #000d1a;
    
`
const DropDownWrapper=styled.div`

`
const DropdownMenu=styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4,60px);
    }

`
const DropDownLink=styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out ;

    &:hover{
        color: #000d1a;
    }

`
const BtnWrap=styled.div`
    display: flex;
    justify-content: center;


`

export default Dropdown