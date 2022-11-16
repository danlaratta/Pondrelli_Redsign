import React from 'react'
import styled from 'styled-components/macro'
import { NavLink as Link } from 'react-router-dom'
import { BsTelephone } from 'react-icons/bs'

const Container = styled.div`
    width: 100%;
    background-color: #1e1e1d;
`

const Wrapper = styled.div`
    padding: 1.5rem;
`

const Nav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const LeftNav = styled.div`
    flex: 3.5;
    width: 100%;
    
`

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const Logo = styled(Link)`
    font-size: 2.3rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
`

const CenterNav = styled.div`
    flex: 5;
    width: 100%;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

const Links = styled(Link)`
    color: #fff;
    font-size: 1.6rem;
    text-decoration: none;

    &:hover {
        color: #ff0000;
    }
`

const RightNav = styled.div`
    flex: 3.5;
    width: 100%;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    width: 100%;
`

const Icon = styled.div`
    font-size: 1.6rem;
    color: #fff;
    display: flex;
    align-items: flex-end;

`

const Phone = styled.span`
    color: #fff;
    font-size: 1.6rem;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Nav>
                    <LeftNav>
                        <LogoContainer>
                            <Logo to='/'> Pondrelli's </Logo>
                        </LogoContainer>
                    </LeftNav>

                    <CenterNav>
                        <NavContainer>
                            <Links to='/'> Home </Links>
                            <Links to='/menu'> Menu </Links>
                            <Links to='/order'> Order Online </Links>
                            <Links to='/about'> About </Links>
                            <Links to='/contact'> Contact </Links>
                        </NavContainer>

                    </CenterNav>

                    <RightNav>
                        <TextContainer>
                            <Icon> <BsTelephone style = {{transform: 'rotate(-135deg)' }} /> </Icon>
                            <Phone> (732) 270-4444 </Phone>
                        </TextContainer>
                    </RightNav>
                </Nav>
            </Wrapper>
        </Container>
    )
}

export default Navbar