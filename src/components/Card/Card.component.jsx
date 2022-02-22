import styled from "styled-components";


const Title = styled.h2`
    font-weight: 700;
    font-szie: 2rem;
    `

const Card = (props) => {

    return (
        <Title>{props.name}</Title>

    )
}

export default Card;