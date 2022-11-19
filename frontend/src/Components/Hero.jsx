import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { BsArrowDownCircle, BsArrowDownCircleFill } from 'react-icons/bs'
import { Parallax } from 'react-parallax'
// import { motion } from 'framer-motion'


const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.span`
    color: #fff;
    font-size: 8rem;
    font-weight: bold;
`

const Icon = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 4.5rem;
    padding-top: 2rem;

    &:hover{
        cursor: pointer;
    }
`

const Hero = ({title, image}) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleIconClick = () => {
        window.scrollTo({top: 935, behavior: 'smooth'})
    }


    return (
        <Container>
            <Parallax 
                bgImage={image}
                bgImageAlt="bg img"
                strength={-200}
            > 
                <Wrapper>
                    <Title> { title } </Title>

                    <Icon
                        onClick= {handleIconClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        { isHovered ? <BsArrowDownCircleFill /> : <BsArrowDownCircle /> }
                    </Icon>
                </Wrapper>

            </Parallax>
        </Container>
    )
}


export default Hero