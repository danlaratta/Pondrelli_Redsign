import React from 'react'
import styled from 'styled-components/macro'
import { Parallax } from 'react-parallax'
import BgImg from '../Assets/HeroBg.jpg'
import BgImg2 from '../Assets/bg.jpg'
import TopChoices from '../Components/TopChoices'
import ParallaxText from '../Components/ParallaxText'
import AboutSection from '../Components/AboutSection'
import OrderProcess from '../Components/OrderProcess'

const Container = styled.div`
    width: 100%;
`

const Section = styled.div`
    width: 100%;
`

const Home = () => {
    return (
        <Container>
            <Parallax 
                bgImage={BgImg}
                bgImageAlt="bg img"
                strength={-200}
            >
                <ParallaxText
                    title = "Presley's"
                    subtitle = 'Pizza & Kitchen'
                    path = '/order'
                    link = 'Order Now'
                />
            </Parallax>

            <Section>
                <TopChoices />
            </Section>

            <Parallax 
                bgImage={BgImg2}
                bgImageAlt="bg img"
                strength={-250}
            >
                <ParallaxText
                    title = "We Deliver"
                    subtitle = 'Order now and try one of our pies today!'
                    path = '/order'
                    link = 'Order Now'
                />
            </Parallax>

            <Section>
                <OrderProcess />
            </Section>

            <Section>
                <AboutSection />
            </Section>


        </Container>
    )
}

export default Home