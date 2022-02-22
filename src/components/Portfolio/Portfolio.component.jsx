import styled from "styled-components";
import Card from "../Card/Card.component";

const PortfolioContainer = styled.section`
    background-color: #2E2E2E;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    `

const Title =  styled.h3`
    font-size: 2rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    font-weight: 700;
    `

const PortfolioGrid = styled.div`
    display: grid;`

const Portfolio = () => {

    const Projects = ['audiophile-ecommerce-website', 'dad-jokes', 'Designo-multi-page-website', 'Drag-N-Drop', 'Infinte-Scroll', 'Light-Dark-Mode', 'Music-Player', 'rest-countries-api-with-color-theme-switcher', 'Simple-Calculator', 'Video-Player']

    const LoadData = async () => {
        try {
            const url = `https://api.github.com/users/julianIfesiokwu/repos?per_page=100`
            const res = await fetch(url)
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PortfolioContainer>
            <Title>My Work</Title>
            <p>A selection of my work</p>
            <PortfolioGrid>
                {
                    LoadData().then((data) => {
                        data.forEach((item) => console.log(item.name))
                    })
                }
            </PortfolioGrid>
        </PortfolioContainer>

    )
}

export default Portfolio