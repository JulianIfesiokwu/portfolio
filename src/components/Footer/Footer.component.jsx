import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    background-color: #141414;
    color: white;
    `

const SocialsContainer = styled.div`
    display: flex;
    width: 70%;` 

const Footer = () => {
    return (
        <FooterContainer>
            <p>julianIfesiokwu@gmail.com</p>
            <SocialsContainer>

            </SocialsContainer>

        </FooterContainer>

    )
}

export default Footer;