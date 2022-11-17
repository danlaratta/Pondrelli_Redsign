import React from 'react'
import styled from 'styled-components/macro'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { BsDoorClosed } from 'react-icons/bs'
import { TbPaperBag } from 'react-icons/tb'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #f4f4f4;
`

const Wrapper = styled.div`
    display: flex;
    width: 78%;
    padding: 2rem 0rem;
`

const Section = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
`

const SectionItem = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 2.5rem;
`

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    background-color: #fff;
    box-shadow: 0.3rem 0.7rem 0.8rem #888888;

    border-radius: 1rem;
`

const Icon = styled.div`
    width: 100%;
    font-size: 12rem;
    color: var(--red);
    text-align: center;
`

const Title = styled.span`
    width: 100%;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
`

const OrderProcess = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
                    <SectionItem>
                        <TextContainer>
                            <Icon> <HiOutlineDevicePhoneMobile /> </Icon>
                            <Title> ORDER ON THE GO </Title>
                        </TextContainer>
                    </SectionItem>
                </Section>

                <Section>
                    <SectionItem>
                        <TextContainer>
                            <Icon> <BsDoorClosed /> </Icon>
                            <Title> DOORSTEP DELIVERY </Title>
                        </TextContainer>
                    </SectionItem>
                </Section>

                <Section>
                    <SectionItem>
                        <TextContainer>
                            <Icon> <TbPaperBag /> </Icon>
                            <Title> CURBSIDE PICKUP </Title>
                        </TextContainer>
                    </SectionItem>
                </Section>
            </Wrapper>
        </Container>
    )
}

export default OrderProcess

/*

                    <Section>
                        <SectionItem>
                            <TextContainer>
                                <Icon> <HiOutlineDevicePhoneMobile /> </Icon>
                                <Title> ORDER ON THE GO </Title>
                            </TextContainer>
                        </SectionItem>
                    </Section>

                    <Section>
                        <SectionItem>
                            <TextContainer>
                                <Icon> <BsDoorClosed /> </Icon>
                                <Title> DOORSTEP DELIVERY </Title>
                            </TextContainer>
                        </SectionItem>
                    </Section>

                    <Section>
                        <SectionItem>
                            <TextContainer>
                                <Icon> <TbPaperBag /> </Icon>
                                <Title> CURBSIDE PICKUP </Title>
                            </TextContainer>
                        </SectionItem>
                    </Section>

*/

/*
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #f4f4f4;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`

const SectionContainer = styled.div`
    width: 100%;
    display: flex;
`

const LeftSection = styled.div`
    flex: 1;
    width: 100%;
    background-color: teal;
`

const Image = styled.img`
    width: 100%;
`

const RightSection = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
`

const Section = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
`

const SectionItem = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 2.5rem;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    background-color: #fff;
`

const Icon = styled.div`
    width: 100%;
    font-size: 10rem;
    color: #b10b0b;
    text-align: center;
`

const Title = styled.span`
    width: 100%;
    font-size: 1.55rem;
    font-weight: bold;
`

const OrderProcess = () => {
    return (
        <Container>
            <Wrapper>
                <SectionContainer>
                    <LeftSection>
                        <Image src={Chef} />
                    </LeftSection>

                    <RightSection>
                        <Section>
                            <SectionItem>
                                <TextContainer>
                                    <Icon> <HiOutlineDevicePhoneMobile /> </Icon>
                                    <Title> ORDER ON THE GO </Title>
                                </TextContainer>
                            </SectionItem>
                        </Section>

                        <Section>
                            <SectionItem>
                                <TextContainer>
                                    <Icon> <BsDoorClosed /> </Icon>
                                    <Title> DOORSTEP DELIVERY </Title>
                                </TextContainer>
                            </SectionItem>
                        </Section>

                        <Section>
                            <SectionItem>
                                <TextContainer>
                                    <Icon> <TbPaperBag /> </Icon>
                                    <Title> CURBSIDE PICKUP </Title>
                                </TextContainer>
                            </SectionItem>
                        </Section>
                    </RightSection>
                </SectionContainer>
            </Wrapper>
        </Container>
    )
}
*/