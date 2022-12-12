import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const InfoSection = ({info}) => {
  return (
    <ProductsContainer>
      <ProductsHeading>
        <h3>The significant areas of expertise that DroneVionics possesses include Consulting, Simulation,
          Experimental Solutions and Training for a wide variety of Engineering problems.</h3>
          <h2>
            Our service is suitable for both academic and commercial applications.
          </h2>
        </ProductsHeading>
        <ProductWrapper>
          {info.map((product, index)=>{
            return(
              <ProductCard key={index}>
                <ProductImg src={product.image} alt={product.alt}/>
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductButton>{product.buttonLabel}</ProductButton>
                </ProductInfo>
              </ProductCard>
            )
          })}
        </ProductWrapper>
      
    </ProductsContainer>
  )
}

const ProductsContainer=styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px)/2);
  background: #150f0f;
  color: #fff;
`
const ProductWrapper=styled.div`
    display: flex;
    flex-wrap: wrap;
    jus
`

const ColumnLeft=styled.div`

`

const ColumnRight=styled.div`

`


export default InfoSection