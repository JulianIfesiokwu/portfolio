import styled from "styled-components";

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;`

const About = () => {
    return (
        <AboutSection>
            <h2>What I do</h2>
            <div className="brief">
                <div className="web-design">
                    <h3 className="brief-title">web design</h3>
                    <p className="brief-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis odit consectetur sint voluptas laborum tempore accusamus, aspernatur, quasi odio obcaecati inventore ullam nostrum nam? Cum sint laboriosam nesciunt ipsam!</p>
                </div>
                <div className="web-design">
                    <h3 className="brief-title">web development</h3>
                    <p className="brief-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis odit consectetur sint voluptas laborum tempore accusamus, aspernatur, quasi odio obcaecati inventore ullam nostrum nam? Cum sint laboriosam nesciunt ipsam!</p>
                </div>
            </div>
            <button>view my work</button>
        </AboutSection>

    )
}

export default About;