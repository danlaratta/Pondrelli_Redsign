import React from 'react'
import styled from 'styled-components/macro'
import { Parallax } from 'react-parallax'
import BgImg from '../Assets/HeroBg.jpg'
import { Link } from 'react-router-dom'
import TopChoices from '../Components/TopChoices'

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
    font-size: 12rem;
    font-weight: bold;
`

const SubTitle = styled.span`
    color: #fff;
    font-size: 6rem;
`
const Links = styled(Link)`
    color: #fff;
    text-decoration: none;
    background: transparent;
    font-size: 2rem;
    font-weight: 600;
    border: 0.3rem solid #fff;
    padding: 1.5rem 4.5rem;
    border-radius: 0.5rem;
    margin-top: 3rem;
`

const TopChoicesSection = styled.div`
    width: 100%;
`

const Home = () => {
    return (
        <Container>
            <Parallax 
                bgImage={BgImg}
                bgImageAlt="the dog"
                strength={-300}
            >
                <TextContainer>
                    <Title> Pondrelli's </Title>
                    <SubTitle> Pizza & Kitchen </SubTitle>
                    <Links to='/order'> Order </Links>
                </TextContainer>
            </Parallax>

            <TopChoicesSection>
                <TopChoices />
            </TopChoicesSection>

            
        </Container>
    )
}

export default Home