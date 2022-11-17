import React from 'react'
import styled from 'styled-components/macro'
import Chef from '../Assets/chef.jpg'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    width: 78%;
`

const Section = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PizzaImg = styled.img`
    max-width: 100%;
`

const TextContainer = styled.div`
    
`

const Title = styled.span`
    font-size: 3.5rem;
    font-weight: bold;
    align-self: center;
`

const Text = styled.p`
    font-size: 1.6rem;
    width: 75%;
    line-height: 2.5rem;
`

const AboutSection = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
                    <TextContainer>
                        <Title> About Us </Title>

                        <Text>
                        Pondrelli's Pizza & Kitchen has been a Slice partner since 2018. They've been serving the local community for a while now, so you can rely on them providing great pizza. Call ahead and get curbside pickup at Pondrelli's Pizza & Kitchen. It's never been easier to get hot, fresh pizza to go. Make your money stretch further by taking advantage of special offers at Pondrelli's Pizza & Kitchen. The only thing better than pizza is pizza at an affordable price.
                        </Text>
                    </TextContainer>
                </Section>

                <Section>
                    <PizzaImg src={Chef} />
                </Section>
            </Wrapper>
        </Container>
    )
}


export default AboutSection