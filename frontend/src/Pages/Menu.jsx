import React from 'react'
import styled from 'styled-components/macro'
import Hero from '../Components/Hero'
import MenuItems from '../Components/MenuItems'
import BgImg from '../Assets/hero1.jpg'

const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    
`

const HeroSection = styled.div`
    
`

const MenuContainer = styled.div`
    
`

const MenuSections = styled.div`
    
`

const Title = styled.span`
    
`

const ItemContainer = styled.div`
    
`

const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <HeroSection>
                    <Hero title= 'Menu' image= {BgImg} />
                </HeroSection>

                <MenuContainer>
                    <MenuSections>
                        <Title> Pizza </Title>

                        <ItemContainer>
                            <MenuItems />
                            <MenuItems />
                            <MenuItems />
                            <MenuItems />
                        </ItemContainer>
                    </MenuSections>
                </MenuContainer>
            </Wrapper>
        </Container>
    )
}

export default Menu