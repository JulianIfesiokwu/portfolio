import styled from "styled-components";
import LandingImage from '../../assets/eduardo-unsplash@2x.png'

import './Landing.styles.css'

const LandingContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    `

const ImageContainer = styled.div`
    width: 40%;
    `
const IntroContainer = styled.div`
    `

const Introduction = styled.p`
    font-size: 2rem;
    font-weight: 200;
    padding: 1rem 0 0 1rem;
    `

const IntroductionTitle =  styled.h1`
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    background-color: teal;
    padding: 1rem;
    `

const Landing = () => {
    return (
        <LandingContainer>
            <ImageContainer>
                <img src={LandingImage} alt="" />
            </ImageContainer>
            <IntroContainer>
                <Introduction>
                    Hi, I am <strong className="developer-name">Julian</strong>
                </Introduction>
                <IntroductionTitle>Front-End Developer</IntroductionTitle>
            </IntroContainer>
        </LandingContainer>
    )
}

export default Landing