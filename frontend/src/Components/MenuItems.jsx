import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextContainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;
`

const Title = styled.span`
    font-size: 2rem;
    font-weight: bold;
`

const Dots = styled.div`
    border-bottom: 0.2rem dotted #aaa;
    flex-grow: 1;
    margin: 0 0.5rem;
`

const Price = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
`

const Bottom = styled.div`
    width: 100%;
`


const Desc = styled.span`
    font-size: 1.6rem;
`

/*
const Title = styled.span`
    font-size: 2rem;
    font-weight: bold;
`

const Desc = styled.span`
    font-size: 1.6rem;
`

const Price = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
`
*/

const MenuItems = () => {
    return (
        <Container>
            <Wrapper> 
                <TextContainer>
                    <Top> 
                        <Title> Title </Title>
                        <Dots></Dots>
                        <Price> $15 </Price>
                    </Top>

                    <Bottom>
                        <Desc> This is my Desc </Desc>
                    </Bottom>
                </TextContainer>
            </Wrapper> 
        </Container>
    )
}

export default MenuItems

/*
                <TextContainer>
                    <Title> Title </Title>
                    <Desc> This is my Desc </Desc>
                    <Price> $15 </Price>
                </TextContainer>
                
*/