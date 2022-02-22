import React from "react"
import styled from "styled-components"
import './Header.styles.css'

const Navigation = styled.header`
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

const Title = styled.p`
    font-size: 20px;
    color: red;
    `

const HamburgerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 5s ease-in-out;
    width: 4rem;
    height: 4rem;
    `
const HamburgerBtn = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 4px;
    background: red;
    border-radius: 5px;
    cursor: pointer;
    transition: all 5s ease-in-out;
    `

const Header = (e) => {
    let menuOpen = false

    const toggleMenu = (e) => {
        e.stopPropagation()
        if(!menuOpen) { 
            e.target.classlist.add('open') 
            menuOpen = true
        } else {
            e.target.classlist.remove('open');
            menuOpen = false;
        }
        
    }

    return (
        <Navigation>
            <Title>{'<devjulian>'}</Title>
            <HamburgerContainer onClick={(e) => toggleMenu(e)}>
                <HamburgerBtn className="hamburger-btn" />
            </HamburgerContainer>
        </Navigation>
        
    )

}

export default Header