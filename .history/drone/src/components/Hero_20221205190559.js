import React from "react";
import styled, {css} from 'styled-components/macro';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useRef } from "react";


const Hero = ({slides}) => {
  return (
    <>
      <HeroSection>
        <HeroWrapper>
          {
            slides.map((slide, index)=>{
              return(
                <HeroSlide key={index}>
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt}/>
                      <HeroContent>
                        <h1>{slide.title}</h1>
                        <p>{slide.price}</p>
                        <Button to={slide.path} primary="true"
                        css={`
                        max-width: 160px;
                        `}>
                          {slide.label}
                          <Arrow/>
                        </Button>


    
                      </HeroContent>
                  </HeroSlider>
                </HeroSlide>
              )
            })
          }

          <SliderButtons>
            <PrevArrow/>
            <NextArrow/>
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};

const HeroSection= styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`
const HeroWrapper=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

`

const HeroSlide=styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;

`
const HeroSlider=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%);
  }
`
const HeroImage=styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`


const HeroContent=styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: white;

  h1{
    font-size: clamp(1rem,8vw,12rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;

  }

  p{
    margin-bottom: 1.2rem;
    font-size: clamp(1rem,8vw,3rem);
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);

  }

`

const Arrow=styled(ArrowForwardIcon)`

  margin-left: ;

`

const SliderButtons=styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`

const arrowButtons=css`
  width: 3rem!important;
  height: 3rem!important;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover{
    background: #cd853f;
    transform: scale(1.05); 
  }
`;
const PrevArrow=styled(KeyboardDoubleArrowLeftIcon)`
    ${arrowButtons}
`
const NextArrow=styled(KeyboardDoubleArrowRightIcon)`
    ${arrowButtons}

`



export default Hero;
