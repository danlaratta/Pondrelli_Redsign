import React from 'react'
import styled from 'styled-components/macro'
import Pizza from '../Assets/pizza.jpg'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

const Title = styled.span`
    font-size: 3.5rem;
    font-weight: bold;
    align-self: center;
    padding-bottom: 5rem;
`

const PizzaContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 5%;
`

const PizzaItem = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22.5%;
`

const PizzaImg = styled.img`
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.7rem 0.8rem #888888;
`

const PizzaText = styled.span`
    font-size: 2rem;
    padding-top: 1rem;
`

const PizzaLink = styled(Link)`
    width: auto;
    color: #000;
    text-decoration: none;
    background: transparent;
    font-size: 2rem;
    font-weight: 600;
    border: 0.3rem solid #000;
    padding: 1.5rem 4.5rem;
    border-radius: 0.5rem;
    margin-top: 5rem;

    &:hover {
        background-color: var(--red);
        color: #fff;
    }
`

const TopChoices = () => {
    return (
        <Container>
            <Section>
                <Title> Top Choices </Title>

                <PizzaContainer>
                    <PizzaItem>
                        <PizzaImg src={Pizza} />
                        <PizzaText> Cheese Pizza </PizzaText>
                    </PizzaItem>

                    <PizzaItem>
                        <PizzaImg src={Pizza} />
                        <PizzaText> Cheese Pizza </PizzaText>
                    </PizzaItem>

                    <PizzaItem>
                        <PizzaImg src={Pizza} />
                        <PizzaText> Cheese Pizza </PizzaText>
                    </PizzaItem>
                </PizzaContainer>

                <PizzaLink> View Menu </PizzaLink>
            </Section>
        </Container>
    )
}

export default TopChoices