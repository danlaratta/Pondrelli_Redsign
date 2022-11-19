import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
`

const TextContainer = styled.div`
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
    font-size: 10rem;
    font-weight: bold;
`

const SubTitle = styled.span`
    color: #fff;
    font-size: 4rem;
`
const Links = styled(Link)`
    color: #fff;
    text-decoration: none;
    background: transparent;
    font-size: 2rem;
    font-weight: 600;
    border: 0.3rem solid #fff;
    padding: 1.5rem 4rem;
    border-radius: 0.5rem;
    margin-top: 3rem;

    &:hover {
        background-color: var(--red);
    }
`

const ParallaxText = ({title, subtitle, path, link}) => {
    return (
        <Container>
            <TextContainer>
                <Title> { title } </Title>
                <SubTitle> { subtitle } </SubTitle>
                <Links to={path}> { link } </Links>
            </TextContainer>
        </Container>
    )
}


export default ParallaxText