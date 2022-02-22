import styled from "styled-components";
import './About.styles.css';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const StyledHeading = styled.h2`
    font-size: 3rem;
    letter-spacing: 5px;
    margin-bottom: 1rem;
    font-weight: 700;
    `

const AboutInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    gap:10%;
    margin-bottom: 2rem;
    `

const Title = styled.h3`
    font-size: 2rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    font-weight: 700;
    `

const Button = styled.button`
    padding: 1rem 2rem;
    `

const About = () => {
    return (
        <Section className="about">
            <StyledHeading>What I do</StyledHeading>
            <AboutInfo>
                <div className="web-design">
                    <Title>web design</Title>
                    <p className="brief-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis odit consectetur sint voluptas laborum tempore accusamus, aspernatur, quasi odio obcaecati inventore ullam nostrum nam? Cum sint laboriosam nesciunt ipsam!</p>
                </div>
                <div className="web-design">
                    <Title>web development</Title>
                    <p className="brief-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis odit consectetur sint voluptas laborum tempore accusamus, aspernatur, quasi odio obcaecati inventore ullam nostrum nam? Cum sint laboriosam nesciunt ipsam!</p>
                </div>
            </AboutInfo>
            <Button>view my work</Button>
        </Section>

    )
}

export default About;