import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'

const Dropdown = () => {
  return (
    <DropdownContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <DropDownWrapper>
            <DropdownMenu>
                {menuData.map((item))}
            </DropdownMenu>
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
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: 1;
`

export default Dropdown