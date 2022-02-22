import styled from "styled-components";
import PersonaImage from '../../assets/eduardo-unsplash@2x.png';

const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
    margin-bottom: 2rem
    `

const Title = styled.h3`
    font-size: 2rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    font-weight: 700;
    `

const PersonaDetails = styled.div`
    width: 40%;
    `

const ImageContainer = styled.div`
    width: 40%;
    `

const Persona = () => {
    return (
        <Section>
            <PersonaDetails>
                <Title>Who I am</Title>
                <p className="brief-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis odit consectetur sint voluptas laborum tempore accusamus, aspernatur, quasi odio obcaecati inventore ullam nostrum nam? Cum sint laboriosam nesciunt ipsam!</p>
            </PersonaDetails>
            <ImageContainer>
                <img src={PersonaImage} alt="" />
            </ImageContainer>

        </Section>
    )
}

export default Persona;