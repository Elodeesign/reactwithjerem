import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const MainContainer = styled.div`
    padding: 1em;
    display: flex;
    justify-content: space-between;
    background-color: ${props => (props.scroll ? 'black' : 'white')};
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`

const CustomLink = styled(Link)`
    margin-right: 1em;
    font-weight: ${props => (props.main ? '900' : '')};
    font-size: ${props => (props.main ? '1.3em' : '')};
    color: ${props => (props.scroll ? 'white' : 'black')};
`

const LeftPart = styled.div``

const RightPart = styled.div``

class Navbar extends Component {
    //Scroll navbar change background's color et link
    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })
        })
    }

    render() {
        const scrollPosition = window.scrollY

        return (
            <MainContainer scroll={scrollPosition}>
                <LeftPart>
                    <CustomLink main to="/" scroll={scrollPosition}>
                        E.
                    </CustomLink>
                    <CustomLink to="/projects" scroll={scrollPosition}>
                        Projects
                    </CustomLink>
                    <CustomLink to="/about" scroll={scrollPosition}>
                        À propos
                    </CustomLink>
                    <CustomLink to="/contact" scroll={scrollPosition}>
                        Contact
                    </CustomLink>
                </LeftPart>
                <RightPart />
            </MainContainer>
        )
    }
}

export default Navbar
