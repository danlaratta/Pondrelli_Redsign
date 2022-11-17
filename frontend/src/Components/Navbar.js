import React, { useState} from 'react'
import styled from 'styled-components/macro'
import { NavLink as Link } from 'react-router-dom'
import { BsTelephone } from 'react-icons/bs'

const Container = styled.div`
    width: 100%;
    background-color: ${props => props.color ? "var(--red)" : "rbga(0, 0, 0, 0)"};
    box-shadow: ${props => props.color ? "0rem 0.3rem 0.8rem rgba(0, 0, 0, 0.5)" : "none"};;
    position: fixed;
    z-index: 10;
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

    &:hover {
        color: #000;
    }
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
        color: #000;
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
    /* color: ${props => props.color ? "#000" : "#fff"}; */
    color: #fff;
`

const Icon = styled.div`
    font-size: 1.6rem;
    display: flex;
    align-items: flex-end;

`

const Phone = styled.span`
    font-size: 1.6rem;
`

const Navbar = () => {

    const [color, setColor] = useState(false)

    const changeColor = () => {
        window.scrollY >= 100 ? setColor(true) : setColor(false)
    }

    window.addEventListener('scroll', changeColor)

    return (
        <Container color={color}>
            <Wrapper>
                <Nav>
                    <LeftNav>
                        <LogoContainer>
                            <Logo to='/' color={color}> Pondrelli's </Logo>
                        </LogoContainer>
                    </LeftNav>

                    <CenterNav>
                        <NavContainer>
                            <Links to='/' color={color}> Home </Links>
                            <Links to='/menu' color={color}> Menu </Links>
                            <Links to='/order' color={color}> Order Online </Links>
                            <Links to='/about' color={color}> About </Links>
                            <Links to='/contact' color={color}> Contact </Links>
                        </NavContainer>

                    </CenterNav>

                    <RightNav>
                        <TextContainer color={color}>
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