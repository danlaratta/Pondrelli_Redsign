import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    width: 100%;
    background-color: var(--red);
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.5rem 0rem;
`

const Section = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 4rem;
`

const Title = styled.span`
    font-size: 3.5rem;
    color: #fff;
    font-weight: bold;
`

const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const ContactSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ContactItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Text = styled.span`
    color: #fff;
    font-size: 1.6rem;
`

const Hours = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

const HourSection = styled.div`
    display: flex;
    flex-direction: column;
`

const Days = styled.span`
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    padding-right: 1rem;
`


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
                    <Title> COME GRAB A SLICE! </Title>
                </Section>

                <Section>
                    <ContactContainer>
                        <ContactSection>
                            <ContactItem>
                                <Text>  1500 Route 37 E <br/> Toms River, NJ 08753 </Text>
                            </ContactItem>

                            <ContactItem>
                                <Text>  (732) 785-4435</Text>
                            </ContactItem>

                            <ContactItem>
                                <Hours>
                                    <HourSection>
                                        <Days> Mon:  </Days>
                                        <Days> Tue - Thur: </Days>
                                        <Days> Fri - Sat: </Days>
                                        <Days> Sun: </Days>
                                    </HourSection>

                                    <HourSection>
                                        <Text> Closed </Text>
                                        <Text> 10:30AM - 8:45PM </Text>
                                        <Text> 10:30AM - 9:45PM </Text>
                                        <Text> 11:30AM - 8:15PM </Text>
                                    </HourSection>
                                </Hours>
                                
                            </ContactItem>

                        </ContactSection>

                        <ContactSection>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.4879711167964!2d-74.16002234869278!3d39.9528414915432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19c2540915535%3A0x44ad797ce96da727!2sPondrelli&#39;s%20Pizza%20And%20Kitchen!5e0!3m2!1sen!2sus!4v1668720295072!5m2!1sen!2sus" title="map" loading="lazy"
                            style={{ width: "100%", height: "25rem" }}></iframe>
                        </ContactSection>
                    </ContactContainer>
                </Section>
            </Wrapper>
        </Container>
    )
}


export default Footer