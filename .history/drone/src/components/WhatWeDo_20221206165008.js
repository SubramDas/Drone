import React from 'react'
import styled from 'styled-components'
// import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';


const WhatWeDo = ({data}) => {
  return (
    <Container>
        <ContainerHeading>WHAT WE OFFER</ContainerHeading>

        <CardContainer>
        {data.map((product, index)=>{
            return(
            <ItemContainer key={index}>
                <ImageContainer src={product.image} alt={product.alt}/>
                <FontContainer>{product.title}</FontContainer>
            </ItemContainer>
            )
        })
        }
        </CardContainer>

    </Container>
    
  )
}

const Container=styled.div`
     width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px)/2);
  background: #150f0f;
  color: #fff;
`
const ContainerHeading=styled.h1`

    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;


`

const CardContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto; 
`
const ItemContainer=styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageContainer=styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
    z-index: 10;

    &:
`

const FontContainer=styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    position: absolute;
`

export default WhatWeDo